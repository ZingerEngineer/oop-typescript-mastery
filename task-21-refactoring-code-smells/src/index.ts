/**
 * TASK 21: Refactoring & Code Smells
 *
 * PROBLEM:
 * Refactor code to eliminate common code smells:
 * - Extract Method: Break long methods into focused, reusable pieces
 * - Replace Conditional with Polymorphism: Use strategy pattern
 * - Single Responsibility: Separate calculation logic from orchestration
 *
 * EXPECTED OUTCOMES:
 * 1. PriceCalculator handles individual calculations (subtotal, discount, tax, round)
 * 2. OrderProcessor uses PriceCalculator for clean orchestration
 * 3. ShippingStrategy interface with Standard, Express, Free implementations
 * 4. StandardShipping: weight * 1.5
 * 5. ExpressShipping: weight * 3.0 + 10
 *
 * LEARNING GOALS:
 * - Identify and fix Long Method smell
 * - Apply Extract Method refactoring
 * - Replace conditionals with polymorphism
 */

// BEFORE: Long method with multiple responsibilities (for reference)
export class OrderProcessorBefore {
  process(items: Array<{ price: number; qty: number }>, discount: number, tax: number): number {
    // This method does too much - calculate, discount, tax, round
    let total = 0;
    for (const item of items) {
      total += item.price * item.qty;
    }
    total = total * (1 - discount / 100);
    total = total * (1 + tax / 100);
    return Math.round(total * 100) / 100;
  }
}

// AFTER: Extracted calculator with single-purpose methods
export class PriceCalculator {
  calculateSubtotal(items: Array<{ price: number; qty: number }>): number {
    // TODO: Sum all (price * qty) for each item
    // Hint: Use reduce()
    throw new Error('Not implemented');
  }

  applyDiscount(amount: number, discountPercent: number): number {
    // TODO: Return amount * (1 - discountPercent / 100)
    throw new Error('Not implemented');
  }

  applyTax(amount: number, taxPercent: number): number {
    // TODO: Return amount * (1 + taxPercent / 100)
    throw new Error('Not implemented');
  }

  round(amount: number): number {
    // TODO: Round to 2 decimal places
    // Hint: Math.round(amount * 100) / 100
    throw new Error('Not implemented');
  }
}

// OrderProcessor now orchestrates using PriceCalculator
export class OrderProcessor {
  constructor(private calculator: PriceCalculator) {}

  process(items: Array<{ price: number; qty: number }>, discount: number, tax: number): number {
    // TODO: Use calculator methods in sequence:
    // 1. calculateSubtotal
    // 2. applyDiscount
    // 3. applyTax
    // 4. round and return
    throw new Error('Not implemented');
  }
}

// Replace Conditional with Polymorphism
export interface ShippingStrategy {
  calculate(weight: number): number;
}

export class StandardShipping implements ShippingStrategy {
  calculate(weight: number): number {
    // TODO: Return weight * 1.5
    throw new Error('Not implemented');
  }
}

export class ExpressShipping implements ShippingStrategy {
  calculate(weight: number): number {
    // TODO: Return weight * 3.0 + 10
    throw new Error('Not implemented');
  }
}

export class FreeShipping implements ShippingStrategy {
  calculate(_weight: number): number {
    // TODO: Return 0
    throw new Error('Not implemented');
  }
}
