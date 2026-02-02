/**
 * TASK 24: TypeScript Subtleties
 *
 * PROBLEM:
 * Master TypeScript-specific concepts that differ from traditional OOP:
 * - Structural typing: Types compatible by shape, not name
 * - Type guards: Narrow union types with custom predicates
 * - Branded types: Add compile-time type safety to primitives
 *
 * EXPECTED OUTCOMES:
 * 1. Point3D is assignable to Point2D (structural typing)
 * 2. isDog type guard narrows Pet union to Dog
 * 3. petSound uses type guard to call correct method
 * 4. UserId and OrderId are distinct at compile time
 * 5. getUserById only accepts UserId, not OrderId
 *
 * LEARNING GOALS:
 * - Understand structural vs nominal typing
 * - Write custom type guards with `is` keyword
 * - Use branded types for type-safe IDs
 */

// Structural typing demonstration
export interface Point2D {
  x: number;
  y: number;
}

export interface Point3D {
  x: number;
  y: number;
  z: number;
}

// Point3D is assignable to Point2D due to structural typing
export function distanceFromOrigin2D(point: Point2D): number {
  // TODO: Return distance using Pythagorean theorem
  // Formula: Math.sqrt(x² + y²)
  throw new Error('Not implemented');
}

// Type guards for discriminated unions
export interface Dog {
  kind: 'dog';
  bark(): string;
}

export interface Cat {
  kind: 'cat';
  meow(): string;
}

export type Pet = Dog | Cat;

export function isDog(pet: Pet): pet is Dog {
  // TODO: Return true if pet.kind is 'dog'
  throw new Error('Not implemented');
}

export function petSound(pet: Pet): string {
  // TODO: Use isDog guard to call bark() or meow()
  throw new Error('Not implemented');
}

// Branded types for type safety
declare const brandSymbol: unique symbol;

export type Brand<T, B> = T & { [brandSymbol]: B };

export type UserId = Brand<string, 'UserId'>;
export type OrderId = Brand<string, 'OrderId'>;

export function createUserId(id: string): UserId {
  // TODO: Cast id to UserId
  throw new Error('Not implemented');
}

export function createOrderId(id: string): OrderId {
  // TODO: Cast id to OrderId
  throw new Error('Not implemented');
}

// Functions that only accept specific branded types
export function getUserById(id: UserId): { id: UserId; name: string } {
  // TODO: Return object with id and name 'User'
  throw new Error('Not implemented');
}

export function getOrderById(id: OrderId): { id: OrderId; total: number } {
  // TODO: Return object with id and total 100
  throw new Error('Not implemented');
}

// Utility types
export type NonNullableProperties<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
