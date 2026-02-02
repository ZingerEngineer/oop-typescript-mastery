/**
 * TASK 05: Abstraction & Interfaces
 *
 * PROBLEM:
 * Create an abstract Entity class and Serializable interface, then implement
 * a User class that extends Entity and implements Serializable.
 *
 * EXPECTED OUTCOMES:
 * 1. Serializable interface with serialize() and deserialize() methods
 * 2. Abstract Entity class with abstract id and validate(), concrete toString()
 * 3. User extends Entity, implements Serializable
 * 4. User.validate() returns true if username is non-empty AND email contains '@'
 * 5. User.serialize() returns JSON string of {id, username, email}
 * 6. User.deserialize() parses JSON and updates username/email
 *
 * LEARNING GOALS:
 * - Define interfaces as contracts
 * - Create abstract classes with abstract and concrete members
 * - Implement multiple abstractions (extends + implements)
 */

export interface Serializable {
  serialize(): string;
  deserialize(data: string): void;
}

export abstract class Entity {
  abstract readonly id: string;
  abstract validate(): boolean;

  toString(): string {
    // This is implemented for you
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
    // TODO: Return true if:
    // - username has length > 0 AND
    // - email contains '@'
    throw new Error('Not implemented');
  }

  serialize(): string {
    // TODO: Return JSON string of { id, username, email }
    // Hint: Use JSON.stringify()
    throw new Error('Not implemented');
  }

  deserialize(data: string): void {
    // TODO: Parse JSON data and update username and email
    // Hint: Use JSON.parse()
  }
}
