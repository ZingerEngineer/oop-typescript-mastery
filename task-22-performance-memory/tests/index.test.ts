import { describe, it, expect, vi } from 'vitest';
import { ObjectPool, CharacterStyleFactory, LazyValue } from '../src/index.js';

describe('task-22 - Performance & Memory', () => {
  it('ObjectPool reuses objects', () => {
    const pool = new ObjectPool(
      () => ({ value: 0 }),
      obj => { obj.value = 0; },
      2
    );

    expect(pool.availableCount).toBe(2);

    const obj1 = pool.acquire();
    obj1.value = 42;

    expect(pool.inUseCount).toBe(1);

    pool.release(obj1);
    expect(obj1.value).toBe(0); // Reset

    const obj2 = pool.acquire();
    expect(obj2).toBe(obj1); // Same object reused
  });

  it('CharacterStyleFactory caches styles', () => {
    const factory = new CharacterStyleFactory();

    const style1 = factory.getStyle('Arial', 12, 'black');
    const style2 = factory.getStyle('Arial', 12, 'black');
    const style3 = factory.getStyle('Arial', 14, 'black');

    expect(style1).toBe(style2); // Same instance
    expect(style1).not.toBe(style3);
    expect(factory.cacheSize).toBe(2);
  });

  it('LazyValue defers initialization', () => {
    const factory = vi.fn(() => 'expensive');
    const lazy = new LazyValue(factory);

    expect(lazy.isInitialized).toBe(false);
    expect(factory).not.toHaveBeenCalled();

    const value = lazy.get();

    expect(value).toBe('expensive');
    expect(lazy.isInitialized).toBe(true);
    expect(factory).toHaveBeenCalledTimes(1);
  });
});
