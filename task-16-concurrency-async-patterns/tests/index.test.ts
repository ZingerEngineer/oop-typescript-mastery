import { describe, it, expect, vi } from 'vitest';
import { AsyncResult, withRetry, Semaphore, delay } from '../src/index.js';

describe('task-16 - Concurrency & Async Patterns', () => {
  it('AsyncResult.success creates success result', () => {
    const result = AsyncResult.success(42);
    expect(result.isSuccess()).toBe(true);
    expect(result.getOrThrow()).toBe(42);
  });

  it('AsyncResult.failure creates failure result', () => {
    const result = AsyncResult.failure(new Error('fail'));
    expect(result.isSuccess()).toBe(false);
    expect(result.getOrDefault(0)).toBe(0);
  });

  it('withRetry retries on failure', async () => {
    let attempts = 0;
    const fn = vi.fn(async () => {
      attempts++;
      if (attempts < 3) throw new Error('fail');
      return 'success';
    });

    const result = await withRetry(fn, 3, 1);
    expect(result).toBe('success');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  it('Semaphore limits concurrency', async () => {
    const semaphore = new Semaphore(2);
    let concurrent = 0;
    let maxConcurrent = 0;

    const task = async () => {
      concurrent++;
      maxConcurrent = Math.max(maxConcurrent, concurrent);
      await delay(10);
      concurrent--;
    };

    await Promise.all([
      semaphore.run(task),
      semaphore.run(task),
      semaphore.run(task),
    ]);

    expect(maxConcurrent).toBe(2);
  });
});
