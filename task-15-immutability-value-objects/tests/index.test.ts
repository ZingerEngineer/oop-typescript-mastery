import { describe, it, expect } from 'vitest';
import { Money, ImmutableList } from '../src/index.js';

describe('task-15 - Immutability & Value Objects', () => {
  it('Money.of creates value object', () => {
    const money = Money.of(100, 'USD');
    expect(money.amount).toBe(100);
    expect(money.currency).toBe('USD');
  });

  it('Money.add returns new instance', () => {
    const m1 = Money.of(50, 'USD');
    const m2 = Money.of(30, 'USD');
    const sum = m1.add(m2);

    expect(sum.amount).toBe(80);
    expect(m1.amount).toBe(50); // Original unchanged
  });

  it('Money.equals compares by value', () => {
    const m1 = Money.of(100, 'USD');
    const m2 = Money.of(100, 'USD');
    expect(m1.equals(m2)).toBe(true);
  });

  it('ImmutableList.add returns new list', () => {
    const list1 = ImmutableList.of(1, 2);
    const list2 = list1.add(3);

    expect(list1.size).toBe(2);
    expect(list2.size).toBe(3);
  });

  it('ImmutableList.map transforms items', () => {
    const list = ImmutableList.of(1, 2, 3);
    const doubled = list.map(x => x * 2);
    expect(doubled.toArray()).toEqual([2, 4, 6]);
  });
});
