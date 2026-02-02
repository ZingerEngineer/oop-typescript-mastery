// task-11-structural-patterns - Adapter, Decorator, Facade, Proxy

// Adapter Pattern
export interface ModernLogger {
  info(message: string): void;
  error(message: string): void;
}

export class LegacyLogger {
  writeLog(level: string, msg: string): void {
    console.log(`[${level}] ${msg}`);
  }
}

export class LoggerAdapter implements ModernLogger {
  constructor(private legacy: LegacyLogger) {}

  info(message: string): void {
    this.legacy.writeLog('INFO', message);
  }

  error(message: string): void {
    this.legacy.writeLog('ERROR', message);
  }
}

// Decorator Pattern
export interface DataSource {
  read(): string;
  write(data: string): void;
}

export class FileDataSource implements DataSource {
  private data = '';
  read(): string { return this.data; }
  write(data: string): void { this.data = data; }
}

export class EncryptedDataSource implements DataSource {
  constructor(private source: DataSource) {}

  read(): string {
    const data = this.source.read();
    return this.decrypt(data);
  }

  write(data: string): void {
    this.source.write(this.encrypt(data));
  }

  private encrypt(data: string): string {
    return Buffer.from(data).toString('base64');
  }

  private decrypt(data: string): string {
    return Buffer.from(data, 'base64').toString('utf-8');
  }
}

// Facade Pattern
export class OrderFacade {
  placeOrder(productId: string, quantity: number): string {
    // Simplified interface hiding complex subsystems
    const inventory = this.checkInventory(productId, quantity);
    if (!inventory) return 'Out of stock';

    const payment = this.processPayment(productId, quantity);
    if (!payment) return 'Payment failed';

    return `Order placed: ${quantity}x ${productId}`;
  }

  private checkInventory(_id: string, _qty: number): boolean { return true; }
  private processPayment(_id: string, _qty: number): boolean { return true; }
}
