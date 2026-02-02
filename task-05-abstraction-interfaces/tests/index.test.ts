import { describe, it, expect } from 'vitest';
import { Entity, User } from '../src/index.js';

describe('task-05 - Abstraction & Interfaces', () => {
  it('exports Entity class', () => {
    expect(typeof Entity).toBe('function');
  });

  it('User extends Entity', () => {
    const user = new User('1', 'alice', 'alice@example.com');
    expect(user instanceof Entity).toBe(true);
  });

  it('User.validate returns true for valid data', () => {
    const user = new User('1', 'alice', 'alice@example.com');
    expect(user.validate()).toBe(true);
  });

  it('User.serialize produces JSON string', () => {
    const user = new User('1', 'bob', 'bob@test.com');
    const json = user.serialize();
    expect(JSON.parse(json)).toHaveProperty('username', 'bob');
  });
});
