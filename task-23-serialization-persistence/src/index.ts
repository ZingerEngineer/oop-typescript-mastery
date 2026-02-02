/**
 * TASK 23: Serialization & Persistence
 *
 * PROBLEM:
 * Implement serialization patterns for converting objects to/from JSON:
 * - Serializable interface with toJSON method
 * - Static fromJSON for class revival (recreating class instances)
 * - Generic Serializer for any Serializable type
 * - JsonRepository for CRUD operations
 *
 * EXPECTED OUTCOMES:
 * 1. Task.toJSON() converts to plain object with ISO date string
 * 2. Task.fromJSON() revives Date objects from ISO strings
 * 3. Serializer handles serialize/deserialize with custom reviver
 * 4. JsonRepository provides save/findById/findAll/delete
 *
 * LEARNING GOALS:
 * - Handle Date serialization properly
 * - Implement class revival pattern
 * - Build generic repository abstraction
 */

// Serializable interface
export interface Serializable<T> {
  toJSON(): object;
}

// Entity with serialization support
export class Task implements Serializable<Task> {
  constructor(
    public id: string,
    public title: string,
    public completed: boolean,
    public dueDate: Date | null
  ) {}

  toJSON(): object {
    // TODO: Return { id, title, completed, dueDate }
    // TODO: Convert dueDate to ISO string (or null)
    // Hint: dueDate?.toISOString() ?? null
    throw new Error('Not implemented');
  }

  static fromJSON(data: {
    id: string;
    title: string;
    completed: boolean;
    dueDate: string | null;
  }): Task {
    // TODO: Create new Task from data
    // TODO: Convert dueDate string back to Date (or null)
    throw new Error('Not implemented');
  }
}

// Generic JSON serializer with class revival
export class Serializer<T extends Serializable<T>> {
  constructor(private reviver: (data: object) => T) {}

  serialize(entity: T): string {
    // TODO: Return JSON.stringify of entity.toJSON()
    throw new Error('Not implemented');
  }

  deserialize(json: string): T {
    // TODO: Parse JSON and pass to reviver
    throw new Error('Not implemented');
  }

  serializeMany(entities: T[]): string {
    // TODO: Map entities to toJSON() and stringify
    throw new Error('Not implemented');
  }

  deserializeMany(json: string): T[] {
    // TODO: Parse JSON array and map through reviver
    throw new Error('Not implemented');
  }
}

// Simple repository using JSON serialization
export class JsonRepository<T extends Serializable<T> & { id: string }> {
  private storage = new Map<string, string>();

  constructor(private serializer: Serializer<T>) {}

  save(entity: T): void {
    // TODO: Serialize entity and store by id
  }

  findById(id: string): T | null {
    // TODO: Get JSON from storage, deserialize, or return null
    throw new Error('Not implemented');
  }

  findAll(): T[] {
    // TODO: Return array of all deserialized entities
    throw new Error('Not implemented');
  }

  delete(id: string): boolean {
    // TODO: Remove from storage, return whether it existed
    throw new Error('Not implemented');
  }
}
