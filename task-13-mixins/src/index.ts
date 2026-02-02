/**
 * TASK 13: Mixins
 *
 * PROBLEM:
 * Implement mixin functions that add reusable functionality to classes.
 * Mixins provide multiple inheritance-like behavior in TypeScript.
 *
 * EXPECTED OUTCOMES:
 * 1. Timestamped mixin adds createdAt, updatedAt, and touch() method
 * 2. Taggable mixin adds tags array with addTag/removeTag/hasTag methods
 * 3. Document class combines both mixins with Entity base class
 * 4. addTag() should not add duplicates
 *
 * LEARNING GOALS:
 * - Understand mixin pattern for code reuse
 * - Use generic constraints with Constructor type
 * - Compose multiple behaviors into a single class
 */

// Constructor type for mixins - allows any class constructor
type Constructor<T = object> = new (...args: unknown[]) => T;

// Timestamped mixin - adds timestamp tracking
export function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = new Date();
    updatedAt = new Date();

    touch(): void {
      // TODO: Update updatedAt to current time
    }
  };
}

// Taggable mixin - adds tagging functionality
export function Taggable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    tags: string[] = [];

    addTag(tag: string): void {
      // TODO: Add tag only if it doesn't already exist
      // Hint: Check with includes() first
    }

    removeTag(tag: string): void {
      // TODO: Remove the tag from the array
      // Hint: Use filter()
    }

    hasTag(tag: string): boolean {
      // TODO: Return true if tag exists in array
      throw new Error('Not implemented');
    }
  };
}

// Base class
export class Entity {
  constructor(public id: string) {}
}

// Composed class using mixins
// Document has: id (from Entity), timestamps (from Timestamped), tags (from Taggable)
export class Document extends Taggable(Timestamped(Entity)) {
  constructor(id: string, public title: string) {
    super(id);
  }
}
