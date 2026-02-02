// task-05-abstraction-interfaces - Abstract classes and interfaces
export interface Serializable {
  serialize(): string;
  deserialize(data: string): void;
}

export abstract class Entity {
  abstract readonly id: string;
  abstract validate(): boolean;

  toString(): string {
    return `Entity(${this.id})`;
  }
}

export class User extends Entity implements Serializable {
  readonly id: string;

  constructor(
    id: string,
    public username: string,
    public email: string
  ) {
    super();
    this.id = id;
  }

  validate(): boolean {
    return this.username.length > 0 && this.email.includes('@');
  }

  serialize(): string {
    return JSON.stringify({ id: this.id, username: this.username, email: this.email });
  }

  deserialize(data: string): void {
    const parsed = JSON.parse(data);
    this.username = parsed.username;
    this.email = parsed.email;
  }
}
