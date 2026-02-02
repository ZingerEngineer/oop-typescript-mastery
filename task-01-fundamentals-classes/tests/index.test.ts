import { describe, it, expect } from 'vitest';
import { Person, Product } from '../src/index.js';

describe('task-01 - Fundamentals & Classes', () => {
  it('exports Person class', () => {
    expect(typeof Person).toBe('function');
  });

  it('Person.introduce returns greeting', () => {
    const p = new Person('Alice', 30);
    expect(p.introduce()).toContain('Alice');
  });

  it('exports Product class', () => {
    expect(typeof Product).toBe('function');
  });

  it('Product.format returns formatted string', () => {
    const prod = new Product('p1', 'Widget', 9.99);
    expect(prod.format()).toContain('Widget');
  });
});
