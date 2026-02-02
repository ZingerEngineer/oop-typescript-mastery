// task-09-dependency-injection - Inversion of Control and DI

// Interfaces for dependencies
export interface EmailService {
  send(to: string, subject: string, body: string): Promise<void>;
}

export interface UserStore {
  getUser(id: string): Promise<User | null>;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

// Service with constructor injection
export class NotificationService {
  constructor(
    private emailService: EmailService,
    private userStore: UserStore
  ) {}

  async notifyUser(userId: string, message: string): Promise<boolean> {
    const user = await this.userStore.getUser(userId);
    if (!user) return false;

    await this.emailService.send(user.email, 'Notification', message);
    return true;
  }
}

// Simple DI container
export class Container {
  private services = new Map<string, unknown>();

  register<T>(key: string, instance: T): void {
    this.services.set(key, instance);
  }

  resolve<T>(key: string): T {
    const service = this.services.get(key);
    if (!service) throw new Error(`Service ${key} not found`);
    return service as T;
  }
}
