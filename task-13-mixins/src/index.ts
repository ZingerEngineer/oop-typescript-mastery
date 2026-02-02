// task-13-mixins - Mixin patterns in TypeScript

// Constructor type for mixins
type Constructor<T = object> = new (...args: unknown[]) => T;

// Timestamped mixin
export function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = new Date();
    updatedAt = new Date();

    touch(): void {
      this.updatedAt = new Date();
    }
  };
}

// Taggable mixin
export function Taggable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    tags: string[] = [];

    addTag(tag: string): void {
      if (!this.tags.includes(tag)) {
        this.tags.push(tag);
      }
    }

    removeTag(tag: string): void {
      this.tags = this.tags.filter(t => t !== tag);
    }

    hasTag(tag: string): boolean {
      return this.tags.includes(tag);
    }
  };
}

// Base class
export class Entity {
  constructor(public id: string) {}
}

// Composed class using mixins
export class Document extends Taggable(Timestamped(Entity)) {
  constructor(id: string, public title: string) {
    super(id);
  }
}
