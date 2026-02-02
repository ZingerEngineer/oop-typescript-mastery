// task-08-solid-principles - SOLID design principles

// Single Responsibility Principle (SRP)
export class UserRepository {
  private users: Map<string, User> = new Map();

  save(user: User): void {
    this.users.set(user.id, user);
  }

  findById(id: string): User | undefined {
    return this.users.get(id);
  }
}

export class UserValidator {
  validate(user: User): string[] {
    const errors: string[] = [];
    if (!user.email.includes('@')) errors.push('Invalid email');
    if (user.name.length < 2) errors.push('Name too short');
    return errors;
  }
}

// Open/Closed Principle (OCP)
export interface DiscountStrategy {
  calculate(price: number): number;
}

export class PercentageDiscount implements DiscountStrategy {
  constructor(private percent: number) {}
  calculate(price: number): number {
    return price * (1 - this.percent / 100);
  }
}

export class FixedDiscount implements DiscountStrategy {
  constructor(private amount: number) {}
  calculate(price: number): number {
    return Math.max(0, price - this.amount);
  }
}

// Interface Segregation Principle (ISP)
export interface Readable {
  read(): string;
}

export interface Writable {
  write(data: string): void;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
