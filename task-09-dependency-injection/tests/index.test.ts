import { describe, it, expect, vi } from 'vitest';
import { NotificationService, Container, type EmailService, type UserStore } from '../src/index.js';

describe('task-09 - Dependency Injection', () => {
  it('NotificationService uses injected dependencies', async () => {
    const mockEmail: EmailService = { send: vi.fn().mockResolvedValue(undefined) };
    const mockStore: UserStore = {
      getUser: vi.fn().mockResolvedValue({ id: '1', email: 'test@test.com', name: 'Test' })
    };

    const service = new NotificationService(mockEmail, mockStore);
    const result = await service.notifyUser('1', 'Hello');

    expect(result).toBe(true);
    expect(mockEmail.send).toHaveBeenCalled();
  });

  it('Container registers and resolves services', () => {
    const container = new Container();
    container.register('logger', { log: () => {} });

    const logger = container.resolve<{ log: () => void }>('logger');
    expect(logger).toBeDefined();
  });

  it('Container throws for missing service', () => {
    const container = new Container();
    expect(() => container.resolve('missing')).toThrow();
  });
});
