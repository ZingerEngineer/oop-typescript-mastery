// task-02-access-modifiers - Encapsulation with access modifiers
export class BankAccount {
  private balance: number;
  protected accountNumber: string;
  public readonly owner: string;

  constructor(owner: string, initialBalance: number = 0) {
    this.owner = owner;
    this.balance = initialBalance;
    this.accountNumber = this.generateAccountNumber();
  }

  private generateAccountNumber(): string {
    return `ACC-${Date.now()}`;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  }

  public getBalance(): number {
    return this.balance;
  }
}
