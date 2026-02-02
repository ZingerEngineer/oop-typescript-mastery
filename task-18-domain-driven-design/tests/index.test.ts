import { describe, it, expect } from 'vitest';
import { EmailAddress, Order } from '../src/index.js';

describe('task-18 - Domain-Driven Design', () => {
  it('EmailAddress validates format', () => {
    expect(() => EmailAddress.create('invalid')).toThrow();
    expect(EmailAddress.create('test@example.com').value).toBe('test@example.com');
  });

  it('EmailAddress normalizes to lowercase', () => {
    const email = EmailAddress.create('Test@Example.COM');
    expect(email.value).toBe('test@example.com');
  });

  it('Order aggregate manages items', () => {
    const order = new Order('order-1', 'customer-1');
    order.addItem('prod-1', 2, 10);
    order.addItem('prod-2', 1, 25);

    expect(order.total).toBe(45);
    expect(order.getItems()).toHaveLength(2);
  });

  it('Order.confirm requires items', () => {
    const order = new Order('order-1', 'customer-1');
    expect(() => order.confirm()).toThrow();
  });

  it('Order prevents modification after confirmation', () => {
    const order = new Order('order-1', 'customer-1');
    order.addItem('prod-1', 1, 10);
    order.confirm();

    expect(() => order.addItem('prod-2', 1, 20)).toThrow();
  });
});
