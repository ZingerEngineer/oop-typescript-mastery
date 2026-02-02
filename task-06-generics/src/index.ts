/**
 * TASK 06: Generics
 *
 * PROBLEM:
 * Implement generic classes and functions that work with any type while
 * maintaining type safety. Learn about type parameters and constraints.
 *
 * EXPECTED OUTCOMES:
 * 1. Container<T> stores items of type T with add(), get(), getAll() methods
 * 2. Repository<T extends Identifiable> only accepts objects with `id` property
 * 3. Repository has save(), findById(), findAll() methods using a Map
 * 4. merge<T, U>() combines two objects into one with type T & U
 *
 * LEARNING GOALS:
 * - Understand generic type parameters <T>
 * - Apply constraints with `extends`
 * - Create reusable, type-safe data structures
 */

export class Container<T> {
  private items: T[] = [];

  add(item: T): void {
    // TODO: Add the item to the items array
  }

  get(index: number): T | undefined {
    // TODO: Return the item at the given index, or undefined if out of bounds
    throw new Error('Not implemented');
  }

  getAll(): T[] {
    // TODO: Return a copy of all items (don't return the original array)
    // Hint: Use spread operator [...array]
    throw new Error('Not implemented');
  }
}

// Generic with constraints - T must have an 'id' property
export interface Identifiable {
  id: string;
}

export class Repository<T extends Identifiable> {
  private store = new Map<string, T>();

  save(entity: T): void {
    // TODO: Store the entity in the Map using entity.id as the key
  }

  findById(id: string): T | undefined {
    // TODO: Return the entity with the given id, or undefined
    throw new Error('Not implemented');
  }

  findAll(): T[] {
    // TODO: Return all entities as an array
    // Hint: Use Array.from(map.values())
    throw new Error('Not implemented');
  }
}

// Generic function that merges two objects
export function merge<T, U>(obj1: T, obj2: U): T & U {
  // TODO: Return a new object combining all properties from obj1 and obj2
  // Hint: Use spread operator { ...obj1, ...obj2 }
  throw new Error('Not implemented');
}
