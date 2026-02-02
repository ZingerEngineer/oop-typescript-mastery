// task-18-domain-driven-design - Entities, Value Objects, Aggregates

// Value Object
export class EmailAddress {
  private constructor(readonly value: string) {
    Object.freeze(this);
  }

  static create(email: string): EmailAddress {
    if (!email.includes('@')) {
      throw new Error('Invalid email address');
    }
    return new EmailAddress(email.toLowerCase());
  }

  equals(other: EmailAddress): boolean {
    return this.value === other.value;
  }
}

// Entity
export abstract class Entity<Id> {
  constructor(readonly id: Id) {}

  equals(other: Entity<Id>): boolean {
    return this.id === other.id;
  }
}

// Aggregate Root
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
    if (this._status !== 'pending') {
      throw new Error('Cannot modify non-pending order');
    }
    this.items.push(new OrderItem(productId, quantity, price));
  }

  confirm(): void {
    if (this.items.length === 0) {
      throw new Error('Cannot confirm empty order');
    }
    this._status = 'confirmed';
  }

  get total(): number {
    return this.items.reduce((sum, item) => sum + item.subtotal, 0);
  }

  getItems(): readonly OrderItem[] {
    return [...this.items];
  }
}

export class OrderItem {
  constructor(
    readonly productId: string,
    readonly quantity: number,
    readonly price: number
  ) {}

  get subtotal(): number {
    return this.quantity * this.price;
  }
}

export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered';
