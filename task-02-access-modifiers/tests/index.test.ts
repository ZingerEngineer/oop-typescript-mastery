import { describe, it, expect } from 'vitest';
import { BankAccount } from '../src/index.js';

describe('task-02 - Access Modifiers', () => {
  it('exports BankAccount class', () => {
    expect(typeof BankAccount).toBe('function');
  });

  it('BankAccount has public owner', () => {
    const account = new BankAccount('Alice', 100);
    expect(account.owner).toBe('Alice');
  });

  it('BankAccount.deposit increases balance', () => {
    const account = new BankAccount('Bob', 50);
    account.deposit(25);
    expect(account.getBalance()).toBe(75);
  });

  it('BankAccount.withdraw returns false for insufficient funds', () => {
    const account = new BankAccount('Charlie', 10);
    expect(account.withdraw(100)).toBe(false);
  });
});
