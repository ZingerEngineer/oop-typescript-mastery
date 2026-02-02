/**
 * TASK 09: Dependency Injection
 *
 * PROBLEM:
 * Implement a NotificationService that depends on EmailService and UserStore,
 * plus a simple DI Container for registering and resolving dependencies.
 *
 * EXPECTED OUTCOMES:
 * 1. NotificationService receives dependencies via constructor
 * 2. notifyUser() fetches user, sends email, returns true on success
 * 3. notifyUser() returns false if user not found
 * 4. Container.register() stores services by key
 * 5. Container.resolve() retrieves services, throws if not found
 *
 * LEARNING GOALS:
 * - Understand Inversion of Control (IoC)
 * - Implement constructor injection
 * - Build a simple service container
 */

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
    // TODO: 1. Get user from userStore using userId
    // TODO: 2. If user is null, return false
    // TODO: 3. Send email using emailService.send(user.email, 'Notification', message)
    // TODO: 4. Return true
    throw new Error('Not implemented');
  }
}

// Simple DI container
export class Container {
  private services = new Map<string, unknown>();

  register<T>(key: string, instance: T): void {
    // TODO: Store the instance in the services Map with the given key
  }

  resolve<T>(key: string): T {
    // TODO: Get the service from the Map
    // TODO: If not found, throw Error(`Service ${key} not found`)
    // TODO: Return the service cast as T
    throw new Error('Not implemented');
  }
}
