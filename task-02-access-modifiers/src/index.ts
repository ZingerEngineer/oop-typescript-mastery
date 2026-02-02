/**
 * TASK 02: Access Modifiers
 *
 * PROBLEM:
 * Implement a BankAccount class that demonstrates encapsulation using
 * TypeScript's access modifiers: private, protected, public, and readonly.
 *
 * EXPECTED OUTCOMES:
 * 1. balance should be private (only accessible within the class)
 * 2. accountNumber should be protected (accessible in subclasses)
 * 3. owner should be public and readonly (can't be changed after construction)
 * 4. deposit() should only add positive amounts
 * 5. withdraw() should return false if amount > balance or amount <= 0
 * 6. getBalance() should return the current balance
 *
 * LEARNING GOALS:
 * - Understand private, protected, public, readonly modifiers
 * - Learn why encapsulation matters for data integrity
 * - Practice defensive programming in methods
 */

export class BankAccount {
  private balance: number;
  protected accountNumber: string;
  public readonly owner: string;

  constructor(owner: string, initialBalance: number = 0) {
    this.owner = owner;
    // TODO: Initialize balance with initialBalance
    // TODO: Generate account number using generateAccountNumber()
  }

  private generateAccountNumber(): string {
    // TODO: Return a string like "ACC-{timestamp}"
    // Hint: Use Date.now() for the timestamp
    throw new Error('Not implemented');
  }

  public deposit(amount: number): void {
    // TODO: Add amount to balance, but only if amount > 0
  }

  public withdraw(amount: number): boolean {
    // TODO: Subtract amount from balance if:
    // - amount is positive AND
    // - amount does not exceed current balance
    // Return true if withdrawal succeeded, false otherwise
    throw new Error('Not implemented');
  }

  public getBalance(): number {
    // TODO: Return the current balance
    throw new Error('Not implemented');
  }
}
