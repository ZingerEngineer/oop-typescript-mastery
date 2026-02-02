// task-15-immutability-value-objects - Readonly patterns, value semantics

// Value Object - immutable, compared by value
export class Money {
  private constructor(
    readonly amount: number,
    readonly currency: string
  ) {
    Object.freeze(this);
  }

  static of(amount: number, currency: string): Money {
    if (amount < 0) throw new Error('Amount cannot be negative');
    return new Money(amount, currency);
  }

  add(other: Money): Money {
    if (this.currency !== other.currency) {
      throw new Error('Currency mismatch');
    }
    return Money.of(this.amount + other.amount, this.currency);
  }

  equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }

  toString(): string {
    return `${this.currency} ${this.amount.toFixed(2)}`;
  }
}

// Immutable collection wrapper
export class ImmutableList<T> {
  private constructor(private readonly items: readonly T[]) {
    Object.freeze(this);
  }

  static of<T>(...items: T[]): ImmutableList<T> {
    return new ImmutableList(Object.freeze([...items]));
  }

  static empty<T>(): ImmutableList<T> {
    return new ImmutableList<T>([]);
  }

  add(item: T): ImmutableList<T> {
    return new ImmutableList([...this.items, item]);
  }

  remove(predicate: (item: T) => boolean): ImmutableList<T> {
    return new ImmutableList(this.items.filter(i => !predicate(i)));
  }

  map<U>(fn: (item: T) => U): ImmutableList<U> {
    return new ImmutableList(this.items.map(fn));
  }

  toArray(): T[] {
    return [...this.items];
  }

  get size(): number {
    return this.items.length;
  }
}
