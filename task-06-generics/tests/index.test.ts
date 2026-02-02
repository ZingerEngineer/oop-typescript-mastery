import { describe, it, expect } from 'vitest';
import { Container, Repository, merge } from '../src/index.js';

describe('task-06 - Generics', () => {
  it('exports Container class', () => {
    expect(typeof Container).toBe('function');
  });

  it('Container works with numbers', () => {
    const nums = new Container<number>();
    nums.add(1);
    nums.add(2);
    expect(nums.getAll()).toEqual([1, 2]);
  });

  it('Repository stores identifiable entities', () => {
    const repo = new Repository<{ id: string; name: string }>();
    repo.save({ id: '1', name: 'Test' });
    expect(repo.findById('1')?.name).toBe('Test');
  });

  it('merge combines two objects', () => {
    const result = merge({ a: 1 }, { b: 2 });
    expect(result).toEqual({ a: 1, b: 2 });
  });
});
