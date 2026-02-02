/**
 * TASK 11: Structural Patterns
 *
 * PROBLEM:
 * Implement three structural design patterns:
 * - Adapter: Convert one interface to another
 * - Decorator: Add behavior without modifying original class
 * - Facade: Simplify complex subsystems with unified interface
 *
 * EXPECTED OUTCOMES:
 * 1. LoggerAdapter wraps LegacyLogger to implement ModernLogger interface
 * 2. EncryptedDataSource wraps DataSource, encrypts on write, decrypts on read
 * 3. OrderFacade.placeOrder() hides complexity of inventory/payment checks
 *
 * LEARNING GOALS:
 * - Adapter: Make incompatible interfaces work together
 * - Decorator: Extend functionality dynamically
 * - Facade: Provide simple interface to complex systems
 */

// ==================== ADAPTER PATTERN ====================

export interface ModernLogger {
  info(message: string): void;
  error(message: string): void;
}

// Legacy class with different interface
export class LegacyLogger {
  writeLog(level: string, msg: string): void {
    console.log(`[${level}] ${msg}`);
  }
}

// Adapter makes LegacyLogger work as ModernLogger
export class LoggerAdapter implements ModernLogger {
  constructor(private legacy: LegacyLogger) {}

  info(message: string): void {
    // TODO: Call legacy.writeLog with 'INFO' level
  }

  error(message: string): void {
    // TODO: Call legacy.writeLog with 'ERROR' level
  }
}

// ==================== DECORATOR PATTERN ====================

export interface DataSource {
  read(): string;
  write(data: string): void;
}

export class FileDataSource implements DataSource {
  private data = '';

  read(): string {
    // TODO: Return stored data
    throw new Error('Not implemented');
  }

  write(data: string): void {
    // TODO: Store the data
  }
}

// Decorator adds encryption without modifying FileDataSource
export class EncryptedDataSource implements DataSource {
  constructor(private source: DataSource) {}

  read(): string {
    // TODO: 1. Read from source
    // TODO: 2. Decrypt and return
    throw new Error('Not implemented');
  }

  write(data: string): void {
    // TODO: 1. Encrypt data
    // TODO: 2. Write to source
  }

  private encrypt(data: string): string {
    // TODO: Return base64 encoded string
    // Hint: Buffer.from(data).toString('base64')
    throw new Error('Not implemented');
  }

  private decrypt(data: string): string {
    // TODO: Return decoded string from base64
    // Hint: Buffer.from(data, 'base64').toString('utf-8')
    throw new Error('Not implemented');
  }
}

// ==================== FACADE PATTERN ====================

export class OrderFacade {
  placeOrder(productId: string, quantity: number): string {
    // TODO: 1. Check inventory using checkInventory()
    // TODO: 2. If no inventory, return 'Out of stock'
    // TODO: 3. Process payment using processPayment()
    // TODO: 4. If payment fails, return 'Payment failed'
    // TODO: 5. Return 'Order placed: {quantity}x {productId}'
    throw new Error('Not implemented');
  }

  private checkInventory(_id: string, _qty: number): boolean {
    // Simulated inventory check - always returns true
    return true;
  }

  private processPayment(_id: string, _qty: number): boolean {
    // Simulated payment - always returns true
    return true;
  }
}
