import { describe, it, expect } from 'vitest';
import { LoggerAdapter, LegacyLogger, FileDataSource, EncryptedDataSource, OrderFacade } from '../src/index.js';

describe('task-11 - Structural Patterns', () => {
  it('LoggerAdapter adapts legacy interface', () => {
    const legacy = new LegacyLogger();
    const adapter = new LoggerAdapter(legacy);
    expect(() => adapter.info('test')).not.toThrow();
  });

  it('EncryptedDataSource decorates FileDataSource', () => {
    const file = new FileDataSource();
    const encrypted = new EncryptedDataSource(file);

    encrypted.write('secret');
    // Data should be encrypted in underlying source
    expect(file.read()).not.toBe('secret');
    // But decrypted when read through decorator
    expect(encrypted.read()).toBe('secret');
  });

  it('OrderFacade provides simple interface', () => {
    const facade = new OrderFacade();
    const result = facade.placeOrder('PROD-1', 2);
    expect(result).toContain('Order placed');
  });
});
