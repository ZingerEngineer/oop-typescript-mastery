import { describe, it, expect } from 'vitest';
import { Animal, Dog, Cat } from '../src/index.js';

describe('task-03 - Inheritance & Subtyping', () => {
  it('exports Animal class', () => {
    expect(typeof Animal).toBe('function');
  });

  it('Dog extends Animal', () => {
    const dog = new Dog('Rex', 'German Shepherd');
    expect(dog instanceof Animal).toBe(true);
  });

  it('Dog.speak overrides Animal.speak', () => {
    const dog = new Dog('Buddy', 'Labrador');
    expect(dog.speak()).toContain('barks');
  });

  it('Cat.speak overrides Animal.speak', () => {
    const cat = new Cat('Whiskers');
    expect(cat.speak()).toContain('meows');
  });
});
