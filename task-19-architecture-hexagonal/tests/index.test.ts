import { describe, it, expect, vi } from 'vitest';
import {
  UserRegistrationService,
  InMemoryUserRepository,
  type NotificationPort,
  type User
} from '../src/index.js';

describe('task-19 - Hexagonal Architecture', () => {
  it('UserRegistrationService registers new user', async () => {
    const repo = new InMemoryUserRepository();
    const notifications: NotificationPort = { sendWelcome: vi.fn().mockResolvedValue(undefined) };
    const service = new UserRegistrationService(repo, notifications);

    const user = await service.register('test@example.com', 'Test User');

    expect(user.email).toBe('test@example.com');
    expect(notifications.sendWelcome).toHaveBeenCalled();
  });

  it('UserRegistrationService rejects duplicate email', async () => {
    const repo = new InMemoryUserRepository();
    const notifications: NotificationPort = { sendWelcome: vi.fn().mockResolvedValue(undefined) };
    const service = new UserRegistrationService(repo, notifications);

    await service.register('test@example.com', 'User 1');

    await expect(
      service.register('test@example.com', 'User 2')
    ).rejects.toThrow('Email already registered');
  });

  it('InMemoryUserRepository stores and retrieves users', async () => {
    const repo = new InMemoryUserRepository();
    const user = { id: '1', email: 'test@test.com', name: 'Test' } as User;

    await repo.save(user);
    const found = await repo.findById('1');

    expect(found?.name).toBe('Test');
  });
});
