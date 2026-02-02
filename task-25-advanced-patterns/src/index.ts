/**
 * TASK 25: Advanced Patterns
 *
 * PROBLEM:
 * Implement advanced enterprise patterns:
 * - Specification: Encapsulate business rules as composable objects
 * - Unit of Work: Track changes for batch persistence
 *
 * EXPECTED OUTCOMES:
 * 1. Specifications can be combined with and(), or(), not()
 * 2. PriceRangeSpec checks if price is within min-max
 * 3. InStockSpec checks if product is in stock
 * 4. CategorySpec checks product category
 * 5. SimpleUnitOfWork tracks new, dirty, and deleted entities
 *
 * LEARNING GOALS:
 * - Compose business rules with Specification pattern
 * - Track entity state changes with Unit of Work
 * - Build reusable domain logic
 */

// Specification Pattern - composable business rules
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
    // TODO: Return true if BOTH left AND right are satisfied
    throw new Error('Not implemented');
  }
}

class OrSpecification<T> extends CompositeSpecification<T> {
  constructor(private left: Specification<T>, private right: Specification<T>) { super(); }

  isSatisfiedBy(candidate: T): boolean {
    // TODO: Return true if left OR right is satisfied
    throw new Error('Not implemented');
  }
}

class NotSpecification<T> extends CompositeSpecification<T> {
  constructor(private spec: Specification<T>) { super(); }

  isSatisfiedBy(candidate: T): boolean {
    // TODO: Return opposite of spec.isSatisfiedBy
    throw new Error('Not implemented');
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
    // TODO: Return true if price is >= min AND <= max
    throw new Error('Not implemented');
  }
}

export class InStockSpec extends CompositeSpecification<Product> {
  isSatisfiedBy(product: Product): boolean {
    // TODO: Return true if product.inStock is true
    throw new Error('Not implemented');
  }
}

export class CategorySpec extends CompositeSpecification<Product> {
  constructor(private category: string) { super(); }

  isSatisfiedBy(product: Product): boolean {
    // TODO: Return true if product.category matches
    throw new Error('Not implemented');
  }
}

// Unit of Work Pattern - track changes for batch commit
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
    // TODO: Add entity to newEntities Map by id
  }

  registerDirty<T extends { id: string }>(entity: T): void {
    // TODO: Only add to dirtyEntities if NOT in newEntities
    // (new entities don't need to be marked dirty)
  }

  registerDeleted<T extends { id: string }>(entity: T): void {
    // TODO: Remove from newEntities and dirtyEntities
    // TODO: Add id to deletedIds Set
  }

  async commit(): Promise<void> {
    // TODO: Log counts of new, dirty, deleted entities
    // TODO: Clear all tracking collections
    console.log(`Inserting ${this.newEntities.size} entities`);
    console.log(`Updating ${this.dirtyEntities.size} entities`);
    console.log(`Deleting ${this.deletedIds.size} entities`);
    this.clear();
  }

  rollback(): void {
    // TODO: Clear all tracking collections
  }

  private clear(): void {
    // TODO: Clear newEntities, dirtyEntities, deletedIds
  }
}
