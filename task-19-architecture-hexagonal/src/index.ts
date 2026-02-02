// task-19-architecture-hexagonal - Ports & Adapters, clean architecture

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
    const existing = await this.userRepo.findByEmail(email);
    if (existing) {
      throw new Error('Email already registered');
    }

    const user = new User(crypto.randomUUID(), email, name);
    await this.userRepo.save(user);
    await this.notifications.sendWelcome(user);

    return user;
  }
}

// Adapter: In-memory repository implementation
export class InMemoryUserRepository implements UserRepository {
  private users = new Map<string, User>();

  async findById(id: string): Promise<User | null> {
    return this.users.get(id) ?? null;
  }

  async save(user: User): Promise<void> {
    this.users.set(user.id, user);
  }

  async findByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) return user;
    }
    return null;
  }
}

// Adapter: Console notification implementation
export class ConsoleNotificationAdapter implements NotificationPort {
  async sendWelcome(user: User): Promise<void> {
    console.log(`Welcome ${user.name}! Email sent to ${user.email}`);
  }
}
