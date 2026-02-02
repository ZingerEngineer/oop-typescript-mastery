/**
 * TASK 19: Hexagonal Architecture
 *
 * PROBLEM:
 * Implement Ports & Adapters (Hexagonal) architecture:
 * - Domain: User entity (core business logic)
 * - Ports: Interfaces for external dependencies
 * - Adapters: Concrete implementations of ports
 * - Application Service: Orchestrates use cases
 *
 * EXPECTED OUTCOMES:
 * 1. UserRepository port defines data access interface
 * 2. NotificationPort defines external notification interface
 * 3. UserRegistrationService orchestrates registration
 * 4. InMemoryUserRepository implements UserRepository
 * 5. Registration fails if email already exists
 *
 * LEARNING GOALS:
 * - Separate domain from infrastructure
 * - Define ports (interfaces) for external dependencies
 * - Implement adapters for specific technologies
 */

// Domain Entity (core)
export class User {
  constructor(
    readonly id: string,
    public email: string,
    public name: string
  ) {}
}

// Port: Repository interface (driven/secondary)
export interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}

// Port: Notification interface (driven/secondary)
export interface NotificationPort {
  sendWelcome(user: User): Promise<void>;
}

// Application Service (use case)
export class UserRegistrationService {
  constructor(
    private userRepo: UserRepository,
    private notifications: NotificationPort
  ) {}

  async register(email: string, name: string): Promise<User> {
    // TODO: 1. Check if email exists using findByEmail
    // TODO: 2. If exists, throw Error('Email already registered')
    // TODO: 3. Create new User with crypto.randomUUID() as id
    // TODO: 4. Save user via userRepo
    // TODO: 5. Send welcome notification
    // TODO: 6. Return user
    throw new Error('Not implemented');
  }
}

// Adapter: In-memory repository implementation
export class InMemoryUserRepository implements UserRepository {
  private users = new Map<string, User>();

  async findById(id: string): Promise<User | null> {
    // TODO: Return user from Map or null
    throw new Error('Not implemented');
  }

  async save(user: User): Promise<void> {
    // TODO: Store user in Map by id
  }

  async findByEmail(email: string): Promise<User | null> {
    // TODO: Search users by email, return match or null
    throw new Error('Not implemented');
  }
}

// Adapter: Console notification implementation
export class ConsoleNotificationAdapter implements NotificationPort {
  async sendWelcome(user: User): Promise<void> {
    // TODO: Log welcome message to console
  }
}
