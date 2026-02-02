import { describe, it, expect } from 'vitest';
import { UserRepository, UserValidator, PercentageDiscount, FixedDiscount } from '../src/index.js';

describe('task-08 - SOLID Principles', () => {
  it('UserRepository handles persistence (SRP)', () => {
    const repo = new UserRepository();
    repo.save({ id: '1', name: 'Alice', email: 'alice@test.com' });
    expect(repo.findById('1')?.name).toBe('Alice');
  });

  it('UserValidator handles validation (SRP)', () => {
    const validator = new UserValidator();
    const errors = validator.validate({ id: '1', name: 'A', email: 'invalid' });
    expect(errors.length).toBeGreaterThan(0);
  });

  it('PercentageDiscount calculates correctly (OCP)', () => {
    const discount = new PercentageDiscount(10);
    expect(discount.calculate(100)).toBe(90);
  });

  it('FixedDiscount calculates correctly (OCP)', () => {
    const discount = new FixedDiscount(15);
    expect(discount.calculate(100)).toBe(85);
  });
});
