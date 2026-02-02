/**
 * TASK 07: Composition vs Inheritance
 *
 * PROBLEM:
 * Build a flexible OrderService using composition (injecting dependencies)
 * instead of inheritance. This allows swapping implementations easily.
 *
 * EXPECTED OUTCOMES:
 * 1. Logger interface with log(message) method
 * 2. Validator<T> interface with validate(data) returning boolean
 * 3. OrderService receives Logger and Validator via constructor
 * 4. processOrder() logs processing, validates, logs result, returns success
 * 5. ConsoleLogger implements Logger, prefixes messages with "[LOG]"
 * 6. OrderValidator returns true if order has items AND total > 0
 *
 * LEARNING GOALS:
 * - Favor composition over inheritance
 * - Program to interfaces, not implementations
 * - Enable easy testing through dependency injection
 */

export interface Logger {
  log(message: string): void;
}

export interface Validator<T> {
  validate(data: T): boolean;
}

export interface Order {
  id: string;
  items: string[];
  total: number;
}

// Composition: inject dependencies through constructor
export class OrderService {
  constructor(
    private logger: Logger,
    private validator: Validator<Order>
  ) {}

  processOrder(order: Order): boolean {
    // TODO: 1. Log "Processing order {order.id}"
    // TODO: 2. Call validator.validate(order)
    // TODO: 3. If invalid, log "Order {order.id} validation failed" and return false
    // TODO: 4. If valid, log "Order {order.id} processed successfully" and return true
    throw new Error('Not implemented');
  }
}

// Composable components that can be swapped
export class ConsoleLogger implements Logger {
  log(message: string): void {
    // TODO: Log message to console with "[LOG] " prefix
  }
}

export class OrderValidator implements Validator<Order> {
  validate(order: Order): boolean {
    // TODO: Return true if order.items.length > 0 AND order.total > 0
    throw new Error('Not implemented');
  }
}
