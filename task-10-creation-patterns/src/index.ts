/**
 * TASK 10: Creational Patterns
 *
 * PROBLEM:
 * Implement three creational design patterns:
 * - Factory: Create objects without specifying exact class
 * - Builder: Construct complex objects step by step
 * - Singleton: Ensure only one instance exists
 *
 * EXPECTED OUTCOMES:
 * 1. ButtonFactory.create('primary'|'secondary') returns appropriate Button
 * 2. HttpRequestBuilder has chainable methods returning `this`
 * 3. HttpRequestBuilder.build() creates HttpRequest with all configured values
 * 4. ConfigManager.getInstance() always returns the same instance
 * 5. ConfigManager has get/set methods for configuration values
 *
 * LEARNING GOALS:
 * - Factory pattern for flexible object creation
 * - Builder pattern for step-by-step construction
 * - Singleton pattern for global shared state
 */

// ==================== FACTORY PATTERN ====================

export interface Button {
  render(): string;
}

export class PrimaryButton implements Button {
  render(): string {
    // TODO: Return '<button class="primary">Primary</button>'
    throw new Error('Not implemented');
  }
}

export class SecondaryButton implements Button {
  render(): string {
    // TODO: Return '<button class="secondary">Secondary</button>'
    throw new Error('Not implemented');
  }
}

export class ButtonFactory {
  create(type: 'primary' | 'secondary'): Button {
    // TODO: Return PrimaryButton for 'primary', SecondaryButton for 'secondary'
    // Hint: Use a switch statement
    throw new Error('Not implemented');
  }
}

// ==================== BUILDER PATTERN ====================

export class HttpRequest {
  constructor(
    public method: string,
    public url: string,
    public headers: Record<string, string>,
    public body?: string
  ) {}
}

export class HttpRequestBuilder {
  private method = 'GET';
  private url = '';
  private headers: Record<string, string> = {};
  private body?: string;

  setMethod(method: string): this {
    // TODO: Set this.method and return this (for chaining)
    throw new Error('Not implemented');
  }

  setUrl(url: string): this {
    // TODO: Set this.url and return this
    throw new Error('Not implemented');
  }

  addHeader(key: string, value: string): this {
    // TODO: Add header to this.headers and return this
    throw new Error('Not implemented');
  }

  setBody(body: string): this {
    // TODO: Set this.body and return this
    throw new Error('Not implemented');
  }

  build(): HttpRequest {
    // TODO: Create and return new HttpRequest with all configured values
    throw new Error('Not implemented');
  }
}

// ==================== SINGLETON PATTERN ====================

export class ConfigManager {
  private static instance: ConfigManager | null = null;
  private config: Record<string, string> = {};

  // Private constructor prevents direct instantiation
  private constructor() {}

  static getInstance(): ConfigManager {
    // TODO: If instance is null, create new ConfigManager
    // TODO: Return the instance
    throw new Error('Not implemented');
  }

  set(key: string, value: string): void {
    // TODO: Store value in this.config with given key
  }

  get(key: string): string | undefined {
    // TODO: Return value from this.config, or undefined if not found
    throw new Error('Not implemented');
  }
}
