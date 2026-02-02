/**
 * TASK 15: Immutability & Value Objects
 *
 * PROBLEM:
 * Implement immutable value objects that are compared by value, not reference.
 * Operations return new instances instead of modifying existing ones.
 *
 * EXPECTED OUTCOMES:
 * 1. Money uses private constructor, created via Money.of() factory
 * 2. Money.of() throws if amount is negative
 * 3. Money.add() returns new Money instance, validates same currency
 * 4. Money.equals() compares by value (amount and currency)
 * 5. ImmutableList operations (add, remove, map) return new instances
 *
 * LEARNING GOALS:
 * - Understand value object semantics
 * - Use Object.freeze() for runtime immutability
 * - Implement fluent APIs that return new instances
 */

// Value Object - immutable, compared by value
export class Money {
  private constructor(
    readonly amount: number,
    readonly currency: string
  ) {
    Object.freeze(this);
  }

  static of(amount: number, currency: string): Money {
    // TODO: Throw Error if amount < 0 ('Amount cannot be negative')
    // TODO: Return new Money instance
    throw new Error('Not implemented');
  }

  add(other: Money): Money {
    // TODO: Throw Error if currencies don't match ('Currency mismatch')
    // TODO: Return new Money with sum of amounts
    throw new Error('Not implemented');
  }

  equals(other: Money): boolean {
    // TODO: Return true if amount AND currency are equal
    throw new Error('Not implemented');
  }

  toString(): string {
    // TODO: Return "{currency} {amount}" with 2 decimal places
    // Example: "USD 10.50"
    throw new Error('Not implemented');
  }
}

// Immutable collection wrapper
export class ImmutableList<T> {
  private constructor(private readonly items: readonly T[]) {
    Object.freeze(this);
  }

  static of<T>(...items: T[]): ImmutableList<T> {
    // TODO: Return new ImmutableList with frozen copy of items
    throw new Error('Not implemented');
  }

  static empty<T>(): ImmutableList<T> {
    // TODO: Return new empty ImmutableList
    throw new Error('Not implemented');
  }

  add(item: T): ImmutableList<T> {
    // TODO: Return NEW ImmutableList with item added
    // Don't modify this.items!
    throw new Error('Not implemented');
  }

  remove(predicate: (item: T) => boolean): ImmutableList<T> {
    // TODO: Return NEW ImmutableList without items matching predicate
    throw new Error('Not implemented');
  }

  map<U>(fn: (item: T) => U): ImmutableList<U> {
    // TODO: Return NEW ImmutableList with transformed items
    throw new Error('Not implemented');
  }

  toArray(): T[] {
    // TODO: Return copy of items as regular array
    throw new Error('Not implemented');
  }

  get size(): number {
    // TODO: Return number of items
    throw new Error('Not implemented');
  }
}
