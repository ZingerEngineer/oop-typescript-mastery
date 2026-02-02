// task-25-advanced-patterns - Combining patterns, real-world applications

// Specification Pattern
export interface Specification<T> {
  isSatisfiedBy(candidate: T): boolean;
  and(other: Specification<T>): Specification<T>;
  or(other: Specification<T>): Specification<T>;
  not(): Specification<T>;
}

export abstract class CompositeSpecification<T> implements Specification<T> {
  abstract isSatisfiedBy(candidate: T): boolean;

  and(other: Specification<T>): Specification<T> {
    return new AndSpecification(this, other);
  }

  or(other: Specification<T>): Specification<T> {
    return new OrSpecification(this, other);
  }

  not(): Specification<T> {
    return new NotSpecification(this);
  }
}

class AndSpecification<T> extends CompositeSpecification<T> {
  constructor(private left: Specification<T>, private right: Specification<T>) { super(); }
  isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
  }
}

class OrSpecification<T> extends CompositeSpecification<T> {
  constructor(private left: Specification<T>, private right: Specification<T>) { super(); }
  isSatisfiedBy(candidate: T): boolean {
    return this.left.isSatisfiedBy(candidate) || this.right.isSatisfiedBy(candidate);
  }
}

class NotSpecification<T> extends CompositeSpecification<T> {
  constructor(private spec: Specification<T>) { super(); }
  isSatisfiedBy(candidate: T): boolean {
    return !this.spec.isSatisfiedBy(candidate);
  }
}

// Example: Product specifications
export interface Product {
  name: string;
  price: number;
  inStock: boolean;
  category: string;
}

export class PriceRangeSpec extends CompositeSpecification<Product> {
  constructor(private min: number, private max: number) { super(); }
  isSatisfiedBy(product: Product): boolean {
    return product.price >= this.min && product.price <= this.max;
  }
}

export class InStockSpec extends CompositeSpecification<Product> {
  isSatisfiedBy(product: Product): boolean {
    return product.inStock;
  }
}

export class CategorySpec extends CompositeSpecification<Product> {
  constructor(private category: string) { super(); }
  isSatisfiedBy(product: Product): boolean {
    return product.category === this.category;
  }
}

// Unit of Work Pattern
export interface UnitOfWork {
  registerNew<T extends { id: string }>(entity: T): void;
  registerDirty<T extends { id: string }>(entity: T): void;
  registerDeleted<T extends { id: string }>(entity: T): void;
  commit(): Promise<void>;
  rollback(): void;
}

export class SimpleUnitOfWork implements UnitOfWork {
  private newEntities: Map<string, object> = new Map();
  private dirtyEntities: Map<string, object> = new Map();
  private deletedIds: Set<string> = new Set();

  registerNew<T extends { id: string }>(entity: T): void {
    this.newEntities.set(entity.id, entity);
  }

  registerDirty<T extends { id: string }>(entity: T): void {
    if (!this.newEntities.has(entity.id)) {
      this.dirtyEntities.set(entity.id, entity);
    }
  }

  registerDeleted<T extends { id: string }>(entity: T): void {
    this.newEntities.delete(entity.id);
    this.dirtyEntities.delete(entity.id);
    this.deletedIds.add(entity.id);
  }

  async commit(): Promise<void> {
    // In real impl: persist to database
    console.log(`Inserting ${this.newEntities.size} entities`);
    console.log(`Updating ${this.dirtyEntities.size} entities`);
    console.log(`Deleting ${this.deletedIds.size} entities`);
    this.clear();
  }

  rollback(): void {
    this.clear();
  }

  private clear(): void {
    this.newEntities.clear();
    this.dirtyEntities.clear();
    this.deletedIds.clear();
  }
}
