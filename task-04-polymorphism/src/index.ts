// task-04-polymorphism - Runtime polymorphism and duck typing
export interface Drawable {
  draw(): string;
}

export class Circle implements Drawable {
  constructor(public radius: number) {}

  draw(): string {
    return `Drawing circle with radius ${this.radius}`;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle implements Drawable {
  constructor(public width: number, public height: number) {}

  draw(): string {
    return `Drawing rectangle ${this.width}x${this.height}`;
  }

  area(): number {
    return this.width * this.height;
  }
}

// Polymorphic function - works with any Drawable
export function renderAll(shapes: Drawable[]): string[] {
  return shapes.map(shape => shape.draw());
}
