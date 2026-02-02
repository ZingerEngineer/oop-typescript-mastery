import { describe, it, expect } from 'vitest';
import { PriceCalculator, OrderProcessor, StandardShipping, ExpressShipping } from '../src/index.js';

describe('task-21 - Refactoring & Code Smells', () => {
  it('PriceCalculator.calculateSubtotal sums items', () => {
    const calc = new PriceCalculator();
    const items = [{ price: 10, qty: 2 }, { price: 5, qty: 3 }];
    expect(calc.calculateSubtotal(items)).toBe(35);
  });

  it('OrderProcessor uses calculator for clean processing', () => {
    const processor = new OrderProcessor(new PriceCalculator());
    const items = [{ price: 100, qty: 1 }];

    const result = processor.process(items, 10, 8);

    // 100 - 10% = 90, + 8% tax = 97.2
    expect(result).toBe(97.2);
  });

  it('ShippingStrategy polymorphism replaces conditionals', () => {
    const standard = new StandardShipping();
    const express = new ExpressShipping();

    expect(standard.calculate(10)).toBe(15);
    expect(express.calculate(10)).toBe(40);
  });
});
