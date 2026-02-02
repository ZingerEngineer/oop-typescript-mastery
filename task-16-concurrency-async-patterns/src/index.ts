// task-16-concurrency-async-patterns - Promises, async/await, patterns

// Async result wrapper
export class AsyncResult<T, E = Error> {
  private constructor(
    private readonly value?: T,
    private readonly error?: E
  ) {}

  static success<T, E = Error>(value: T): AsyncResult<T, E> {
    return new AsyncResult(value, undefined);
  }

  static failure<T, E = Error>(error: E): AsyncResult<T, E> {
    return new AsyncResult(undefined, error);
  }

  isSuccess(): boolean {
    return this.error === undefined;
  }

  getOrThrow(): T {
    if (this.error) throw this.error;
    return this.value as T;
  }

  getOrDefault(defaultValue: T): T {
    return this.isSuccess() ? (this.value as T) : defaultValue;
  }
}

// Retry with exponential backoff
export async function withRetry<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  baseDelay: number = 100
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxAttempts - 1) {
        await delay(baseDelay * Math.pow(2, attempt));
      }
    }
  }

  throw lastError;
}

// Async semaphore for concurrency control
export class Semaphore {
  private running = 0;
  private queue: (() => void)[] = [];

  constructor(private readonly maxConcurrency: number) {}

  async acquire(): Promise<void> {
    if (this.running < this.maxConcurrency) {
      this.running++;
      return;
    }

    return new Promise<void>(resolve => {
      this.queue.push(resolve);
    });
  }

  release(): void {
    this.running--;
    const next = this.queue.shift();
    if (next) {
      this.running++;
      next();
    }
  }

  async run<T>(fn: () => Promise<T>): Promise<T> {
    await this.acquire();
    try {
      return await fn();
    } finally {
      this.release();
    }
  }
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
