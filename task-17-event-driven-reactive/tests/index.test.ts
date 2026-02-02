import { describe, it, expect, vi } from 'vitest';
import { TypedEventEmitter, Observable } from '../src/index.js';

describe('task-17 - Event-Driven & Reactive', () => {
  it('TypedEventEmitter emits events', () => {
    type Events = { message: string; count: number };
    const emitter = new TypedEventEmitter<Events>();

    const handler = vi.fn();
    emitter.on('message', handler);
    emitter.emit('message', 'hello');

    expect(handler).toHaveBeenCalledWith('hello');
  });

  it('TypedEventEmitter.on returns unsubscribe function', () => {
    type Events = { tick: number };
    const emitter = new TypedEventEmitter<Events>();

    const handler = vi.fn();
    const unsubscribe = emitter.on('tick', handler);

    emitter.emit('tick', 1);
    unsubscribe();
    emitter.emit('tick', 2);

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('Observable.of creates observable from values', () => {
    const values: number[] = [];
    Observable.of(1, 2, 3).run({ next: v => values.push(v) });
    expect(values).toEqual([1, 2, 3]);
  });

  it('Observable.map transforms values', () => {
    const values: number[] = [];
    Observable.of(1, 2, 3)
      .map(x => x * 2)
      .run({ next: v => values.push(v) });
    expect(values).toEqual([2, 4, 6]);
  });
});
