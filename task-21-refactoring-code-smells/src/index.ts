// task-21-refactoring-code-smells - Identifying and fixing anti-patterns

// BEFORE: Long method with multiple responsibilities
export class OrderProcessorBefore {
  process(items: Array<{ price: number; qty: number }>, discount: number, tax: number): number {
    let total = 0;
    for (const item of items) {
      total += item.price * item.qty;
    }
    total = total * (1 - discount / 100);
    total = total * (1 + tax / 100);
    return Math.round(total * 100) / 100;
  }
}

// AFTER: Extract methods, single responsibility
export class PriceCalculator {
  calculateSubtotal(items: Array<{ price: number; qty: number }>): number {
    return items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  applyDiscount(amount: number, discountPercent: number): number {
    return amount * (1 - discountPercent / 100);
  }

  applyTax(amount: number, taxPercent: number): number {
    return amount * (1 + taxPercent / 100);
  }

  round(amount: number): number {
    return Math.round(amount * 100) / 100;
  }
}

export class OrderProcessor {
  constructor(private calculator: PriceCalculator) {}

  process(items: Array<{ price: number; qty: number }>, discount: number, tax: number): number {
    const subtotal = this.calculator.calculateSubtotal(items);
    const discounted = this.calculator.applyDiscount(subtotal, discount);
    const withTax = this.calculator.applyTax(discounted, tax);
    return this.calculator.round(withTax);
  }
}

// Replace conditional with polymorphism
export interface ShippingStrategy {
  calculate(weight: number): number;
}

export class StandardShipping implements ShippingStrategy {
  calculate(weight: number): number {
    return weight * 1.5;
  }
}

export class ExpressShipping implements ShippingStrategy {
  calculate(weight: number): number {
    return weight * 3.0 + 10;
  }
}

export class FreeShipping implements ShippingStrategy {
  calculate(_weight: number): number {
    return 0;
  }
}
