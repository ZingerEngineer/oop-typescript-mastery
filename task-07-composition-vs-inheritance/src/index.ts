// task-07-composition-vs-inheritance - Favoring composition over inheritance
export interface Logger {
  log(message: string): void;
}

export interface Validator<T> {
  validate(data: T): boolean;
}

// Composition: inject dependencies
export class OrderService {
  constructor(
    private logger: Logger,
    private validator: Validator<Order>
  ) {}

  processOrder(order: Order): boolean {
    this.logger.log(`Processing order ${order.id}`);

    if (!this.validator.validate(order)) {
      this.logger.log(`Order ${order.id} validation failed`);
      return false;
    }

    this.logger.log(`Order ${order.id} processed successfully`);
    return true;
  }
}

export interface Order {
  id: string;
  items: string[];
  total: number;
}

// Composable components
export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}

export class OrderValidator implements Validator<Order> {
  validate(order: Order): boolean {
    return order.items.length > 0 && order.total > 0;
  }
}
