// task-24-typescript-subtleties - Structural typing, type guards, branded types

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
  return Math.sqrt(point.x ** 2 + point.y ** 2);
}

// Type guards
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
  return pet.kind === 'dog';
}

export function petSound(pet: Pet): string {
  if (isDog(pet)) {
    return pet.bark();
  }
  return pet.meow();
}

// Branded types for type safety
declare const brandSymbol: unique symbol;

export type Brand<T, B> = T & { [brandSymbol]: B };

export type UserId = Brand<string, 'UserId'>;
export type OrderId = Brand<string, 'OrderId'>;

export function createUserId(id: string): UserId {
  return id as UserId;
}

export function createOrderId(id: string): OrderId {
  return id as OrderId;
}

// Functions that only accept specific branded types
export function getUserById(id: UserId): { id: UserId; name: string } {
  return { id, name: 'User' };
}

export function getOrderById(id: OrderId): { id: OrderId; total: number } {
  return { id, total: 100 };
}

// Conditional types
export type NonNullableProperties<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
