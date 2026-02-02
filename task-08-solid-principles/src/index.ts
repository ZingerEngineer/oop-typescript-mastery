/**
 * TASK 08: SOLID Principles
 *
 * PROBLEM:
 * Implement classes demonstrating SOLID principles:
 * - Single Responsibility: UserRepository (storage) vs UserValidator (validation)
 * - Open/Closed: DiscountStrategy interface with multiple implementations
 * - Interface Segregation: Separate Readable and Writable interfaces
 *
 * EXPECTED OUTCOMES:
 * 1. UserRepository has save() and findById() - only handles storage
 * 2. UserValidator has validate() returning array of error strings
 * 3. Validation: email must contain '@', name must be >= 2 chars
 * 4. PercentageDiscount calculates price * (1 - percent/100)
 * 5. FixedDiscount calculates max(0, price - amount)
 *
 * LEARNING GOALS:
 * - Single Responsibility: One class, one reason to change
 * - Open/Closed: Open for extension, closed for modification
 * - Interface Segregation: Small, focused interfaces
 */

export interface User {
  id: string;
  name: string;
  email: string;
}

// Single Responsibility Principle (SRP)
// UserRepository ONLY handles data storage
export class UserRepository {
  private users: Map<string, User> = new Map();

  save(user: User): void {
    // TODO: Store user in the Map using user.id as key
  }

  findById(id: string): User | undefined {
    // TODO: Return user with given id, or undefined
    throw new Error('Not implemented');
  }
}

// UserValidator ONLY handles validation logic
export class UserValidator {
  validate(user: User): string[] {
    // TODO: Return array of error messages
    // Check 1: If email doesn't contain '@', add "Invalid email"
    // Check 2: If name.length < 2, add "Name too short"
    // Return empty array if no errors
    throw new Error('Not implemented');
  }
}

// Open/Closed Principle (OCP)
// Open for extension (new discount types), closed for modification
export interface DiscountStrategy {
  calculate(price: number): number;
}

export class PercentageDiscount implements DiscountStrategy {
  constructor(private percent: number) {}

  calculate(price: number): number {
    // TODO: Return price with percentage discount applied
    // Formula: price * (1 - percent / 100)
    throw new Error('Not implemented');
  }
}

export class FixedDiscount implements DiscountStrategy {
  constructor(private amount: number) {}

  calculate(price: number): number {
    // TODO: Return price minus fixed amount (minimum 0)
    // Formula: Math.max(0, price - amount)
    throw new Error('Not implemented');
  }
}

// Interface Segregation Principle (ISP)
// Small, focused interfaces instead of one large interface
export interface Readable {
  read(): string;
}

export interface Writable {
  write(data: string): void;
}
