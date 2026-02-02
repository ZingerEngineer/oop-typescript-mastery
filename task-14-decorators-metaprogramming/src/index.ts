/**
 * TASK 14: Decorators & Metaprogramming
 *
 * PROBLEM:
 * Implement TypeScript decorators that modify class/method behavior:
 * - Method decorator: Log method calls and returns
 * - Property decorator: Mark properties as required
 * - Class decorator: Freeze instances after construction
 *
 * EXPECTED OUTCOMES:
 * 1. @Log decorator logs method name, arguments, and return value
 * 2. @Required decorator stores validation metadata
 * 3. @Frozen decorator makes class instances immutable
 * 4. Calculator class demonstrates @Log on add() and multiply()
 *
 * LEARNING GOALS:
 * - Understand decorator factory functions
 * - Modify behavior via PropertyDescriptor
 * - Store metadata for runtime validation
 */

// Method decorator - logs calls and results
export function Log(
  _target: unknown,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value;

  descriptor.value = function (...args: unknown[]) {
    // TODO: 1. Log `Calling ${propertyKey} with:` and args
    // TODO: 2. Call original.apply(this, args) and store result
    // TODO: 3. Log `${propertyKey} returned:` and result
    // TODO: 4. Return the result
    throw new Error('Not implemented');
  };

  return descriptor;
}

// Property decorator - marks property as required (stores metadata)
const validationRules = new Map<object, Map<string, string[]>>();

export function Required(target: object, propertyKey: string): void {
  // TODO: 1. Get existing rules for target, or create new Map
  // TODO: 2. Get existing property rules, or create new array
  // TODO: 3. Add 'required' to the property rules
  // TODO: 4. Store back in the Maps
}

// Class decorator - freezes instances after construction
export function Frozen<T extends new (...args: unknown[]) => object>(
  constructor: T
): T {
  return class extends constructor {
    constructor(...args: unknown[]) {
      super(...args);
      // TODO: Freeze this instance using Object.freeze()
    }
  };
}

// Example class using decorators
export class Calculator {
  @Log
  add(a: number, b: number): number {
    // TODO: Return sum of a and b
    throw new Error('Not implemented');
  }

  @Log
  multiply(a: number, b: number): number {
    // TODO: Return product of a and b
    throw new Error('Not implemented');
  }
}
