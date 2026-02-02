/**
 * TASK 04: Polymorphism
 *
 * PROBLEM:
 * Implement shapes that share a common interface, demonstrating runtime
 * polymorphism where different objects respond to the same method call.
 *
 * EXPECTED OUTCOMES:
 * 1. Drawable interface with draw() method returning string
 * 2. Circle implements Drawable, has radius, draw() returns "Drawing circle with radius {r}"
 * 3. Rectangle implements Drawable, has width/height, draw() returns "Drawing rectangle {w}x{h}"
 * 4. Both shapes have area() method (Circle: πr², Rectangle: w×h)
 * 5. renderAll() takes array of Drawable and returns array of draw() results
 *
 * LEARNING GOALS:
 * - Define and implement interfaces
 * - Understand polymorphism (same interface, different behaviors)
 * - Write functions that accept interface types
 */

export interface Drawable {
  draw(): string;
}

export class Circle implements Drawable {
  constructor(public radius: number) {}

  draw(): string {
    // TODO: Return "Drawing circle with radius {radius}"
    throw new Error('Not implemented');
  }

  area(): number {
    // TODO: Return the area (π × radius²)
    // Hint: Use Math.PI and ** operator
    throw new Error('Not implemented');
  }
}

export class Rectangle implements Drawable {
  constructor(public width: number, public height: number) {}

  draw(): string {
    // TODO: Return "Drawing rectangle {width}x{height}"
    throw new Error('Not implemented');
  }

  area(): number {
    // TODO: Return the area (width × height)
    throw new Error('Not implemented');
  }
}

// Polymorphic function - works with any Drawable
export function renderAll(shapes: Drawable[]): string[] {
  // TODO: Return an array of draw() results for each shape
  // Hint: Use map()
  throw new Error('Not implemented');
}
