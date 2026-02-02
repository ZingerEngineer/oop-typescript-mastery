// task-14-decorators-metaprogramming - Class/method/property decorators

// Method decorator - logging
export function Log(
  _target: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    console.log(`Calling ${propertyKey} with:`, args);
    const result = original.apply(this, args);
    console.log(`${propertyKey} returned:`, result);
    return result;
  };

  return descriptor;
}

// Property decorator - validation metadata
const validationRules = new Map<object, Map<string, string[]>>();

export function Required(target: object, propertyKey: string): void {
  const rules = validationRules.get(target) ?? new Map();
  const propertyRules = rules.get(propertyKey) ?? [];
  propertyRules.push('required');
  rules.set(propertyKey, propertyRules);
  validationRules.set(target, rules);
}

// Class decorator
export function Frozen<T extends new (...args: unknown[]) => object>(constructor: T): T {
  return class extends constructor {
    constructor(...args: unknown[]) {
      super(...args);
      Object.freeze(this);
    }
  };
}

// Example class using decorators
export class Calculator {
  @Log
  add(a: number, b: number): number {
    return a + b;
  }

  @Log
  multiply(a: number, b: number): number {
    return a * b;
  }
}
