import { describe, it, expect } from 'vitest';
import {
  distanceFromOrigin2D,
  petSound,
  createUserId,
  createOrderId,
  getUserById,
  type Point3D,
  type Dog,
  type Cat,
} from '../src/index.js';

describe('task-24 - TypeScript Subtleties', () => {
  it('structural typing allows Point3D where Point2D expected', () => {
    const point3d: Point3D = { x: 3, y: 4, z: 5 };
    // Point3D works as Point2D due to structural typing
    expect(distanceFromOrigin2D(point3d)).toBe(5);
  });

  it('type guard narrows Pet to Dog or Cat', () => {
    const dog: Dog = { kind: 'dog', bark: () => 'woof' };
    const cat: Cat = { kind: 'cat', meow: () => 'meow' };

    expect(petSound(dog)).toBe('woof');
    expect(petSound(cat)).toBe('meow');
  });

  it('branded types provide compile-time safety', () => {
    const userId = createUserId('user-123');
    const orderId = createOrderId('order-456');

    // These work - correct type
    expect(getUserById(userId).id).toBe('user-123');

    // This would be a compile error:
    // getUserById(orderId); // Error: OrderId not assignable to UserId

    // At runtime, both are just strings
    expect(typeof userId).toBe('string');
    expect(typeof orderId).toBe('string');
  });
});
