import { describe, it, expect, vi } from 'vitest';
import { Calculator, Frozen } from '../src/index.js';

describe('task-14 - Decorators & Metaprogramming', () => {
  it('Calculator.add works with Log decorator', () => {
    const calc = new Calculator();
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const result = calc.add(2, 3);

    expect(result).toBe(5);
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });

  it('Calculator.multiply works with Log decorator', () => {
    const calc = new Calculator();
    expect(calc.multiply(3, 4)).toBe(12);
  });

  it('Frozen decorator prevents modification', () => {
    @Frozen
    class Config {
      constructor(public value: string) {}
    }

    const config = new Config('test');
    expect(() => {
      (config as { value: string }).value = 'changed';
    }).toThrow();
  });
});
