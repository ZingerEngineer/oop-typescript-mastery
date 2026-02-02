/**
 * TASK 18: Domain-Driven Design
 *
 * PROBLEM:
 * Implement DDD building blocks:
 * - Value Object: Immutable, compared by value (EmailAddress)
 * - Entity: Has identity, compared by ID
 * - Aggregate Root: Controls access to child entities (Order)
 *
 * EXPECTED OUTCOMES:
 * 1. EmailAddress validates format, normalizes to lowercase
 * 2. Entity compares by ID, not by properties
 * 3. Order is aggregate root, controls OrderItems
 * 4. Order.addItem() only works when status is 'pending'
 * 5. Order.confirm() fails if no items
 *
 * LEARNING GOALS:
 * - Distinguish Value Objects vs Entities
 * - Understand aggregate boundaries
 * - Enforce invariants through domain logic
 */

// Value Object - immutable, compared by value
export class EmailAddress {
  private constructor(readonly value: string) {
    Object.freeze(this);
  }

  static create(email: string): EmailAddress {
    // TODO: Throw Error('Invalid email address') if no '@'
    // TODO: Return new EmailAddress with lowercase email
    throw new Error('Not implemented');
  }

  equals(other: EmailAddress): boolean {
    // TODO: Compare by value
    throw new Error('Not implemented');
  }
}

// Entity base class - has identity
export abstract class Entity<Id> {
  constructor(readonly id: Id) {}

  equals(other: Entity<Id>): boolean {
    // TODO: Compare by ID only
    throw new Error('Not implemented');
  }
}

// Aggregate Root - Order controls OrderItems
export class Order extends Entity<string> {
  private items: OrderItem[] = [];
  private _status: OrderStatus = 'pending';

  constructor(id: string, readonly customerId: string) {
    super(id);
  }

  get status(): OrderStatus {
    return this._status;
  }

  addItem(productId: string, quantity: number, price: number): void {
    // TODO: Throw Error('Cannot modify non-pending order') if not pending
    // TODO: Add new OrderItem to items array
  }

  confirm(): void {
    // TODO: Throw Error('Cannot confirm empty order') if no items
    // TODO: Set status to 'confirmed'
  }

  get total(): number {
    // TODO: Sum all item subtotals
    throw new Error('Not implemented');
  }

  getItems(): readonly OrderItem[] {
    // TODO: Return copy of items array
    throw new Error('Not implemented');
  }
}

export class OrderItem {
  constructor(
    readonly productId: string,
    readonly quantity: number,
    readonly price: number
  ) {}

  get subtotal(): number {
    // TODO: Return quantity * price
    throw new Error('Not implemented');
  }
}

export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered';
