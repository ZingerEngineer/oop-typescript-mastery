// task-22-performance-memory - Object pooling, flyweight, optimization

// Object Pool pattern
export class ObjectPool<T> {
  private available: T[] = [];
  private inUse = new Set<T>();

  constructor(
    private factory: () => T,
    private reset: (obj: T) => void,
    initialSize: number = 0
  ) {
    for (let i = 0; i < initialSize; i++) {
      this.available.push(factory());
    }
  }

  acquire(): T {
    const obj = this.available.pop() ?? this.factory();
    this.inUse.add(obj);
    return obj;
  }

  release(obj: T): void {
    if (this.inUse.has(obj)) {
      this.inUse.delete(obj);
      this.reset(obj);
      this.available.push(obj);
    }
  }

  get availableCount(): number {
    return this.available.length;
  }

  get inUseCount(): number {
    return this.inUse.size;
  }
}

// Flyweight pattern
export class CharacterStyle {
  constructor(
    readonly font: string,
    readonly size: number,
    readonly color: string
  ) {}
}

export class CharacterStyleFactory {
  private cache = new Map<string, CharacterStyle>();

  getStyle(font: string, size: number, color: string): CharacterStyle {
    const key = `${font}-${size}-${color}`;

    if (!this.cache.has(key)) {
      this.cache.set(key, new CharacterStyle(font, size, color));
    }

    return this.cache.get(key)!;
  }

  get cacheSize(): number {
    return this.cache.size;
  }
}

// Lazy initialization
export class LazyValue<T> {
  private value?: T;
  private initialized = false;

  constructor(private factory: () => T) {}

  get(): T {
    if (!this.initialized) {
      this.value = this.factory();
      this.initialized = true;
    }
    return this.value!;
  }

  get isInitialized(): boolean {
    return this.initialized;
  }
}
