import { describe, it, expect, vi } from 'vitest';
import { OrderService, ConsoleLogger, OrderValidator, type Order } from '../src/index.js';

describe('task-07 - Composition vs Inheritance', () => {
  it('exports OrderService class', () => {
    expect(typeof OrderService).toBe('function');
  });

  it('OrderService uses injected logger', () => {
    const mockLogger = { log: vi.fn() };
    const validator = new OrderValidator();
    const service = new OrderService(mockLogger, validator);

    const order: Order = { id: '1', items: ['item1'], total: 100 };
    service.processOrder(order);

    expect(mockLogger.log).toHaveBeenCalled();
  });

  it('OrderValidator rejects empty orders', () => {
    const validator = new OrderValidator();
    const emptyOrder: Order = { id: '1', items: [], total: 0 };
    expect(validator.validate(emptyOrder)).toBe(false);
  });
});
