import { describe, it, expect } from 'vitest';
import { Circle, Rectangle, renderAll } from '../src/index.js';

describe('task-04 - Polymorphism', () => {
  it('exports Circle class', () => {
    expect(typeof Circle).toBe('function');
  });

  it('exports Rectangle class', () => {
    expect(typeof Rectangle).toBe('function');
  });

  it('renderAll works with mixed shapes', () => {
    const shapes = [new Circle(5), new Rectangle(10, 20)];
    const results = renderAll(shapes);
    expect(results).toHaveLength(2);
    expect(results[0]).toContain('circle');
    expect(results[1]).toContain('rectangle');
  });

  it('Circle.area calculates correctly', () => {
    const circle = new Circle(1);
    expect(circle.area()).toBeCloseTo(Math.PI);
  });
});
