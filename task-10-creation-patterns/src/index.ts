// task-10-creation-patterns - Factory, Builder, Singleton patterns

// Factory Pattern
export interface Button {
  render(): string;
}

export class PrimaryButton implements Button {
  render(): string { return '<button class="primary">Primary</button>'; }
}

export class SecondaryButton implements Button {
  render(): string { return '<button class="secondary">Secondary</button>'; }
}

export class ButtonFactory {
  create(type: 'primary' | 'secondary'): Button {
    switch (type) {
      case 'primary': return new PrimaryButton();
      case 'secondary': return new SecondaryButton();
    }
  }
}

// Builder Pattern
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

  setMethod(method: string): this { this.method = method; return this; }
  setUrl(url: string): this { this.url = url; return this; }
  addHeader(key: string, value: string): this { this.headers[key] = value; return this; }
  setBody(body: string): this { this.body = body; return this; }

  build(): HttpRequest {
    return new HttpRequest(this.method, this.url, this.headers, this.body);
  }
}

// Singleton Pattern
export class ConfigManager {
  private static instance: ConfigManager | null = null;
  private config: Record<string, string> = {};

  private constructor() {}

  static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager();
    }
    return ConfigManager.instance;
  }

  set(key: string, value: string): void { this.config[key] = value; }
  get(key: string): string | undefined { return this.config[key]; }
}
