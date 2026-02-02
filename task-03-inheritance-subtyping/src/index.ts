/**
 * TASK 03: Inheritance & Subtyping
 *
 * PROBLEM:
 * Create an Animal class hierarchy demonstrating inheritance, the super keyword,
 * and method overriding using the `override` keyword.
 *
 * EXPECTED OUTCOMES:
 * 1. Animal base class with name property, speak() and move() methods
 * 2. Dog extends Animal, adds breed property, overrides speak() to return "{name} barks!"
 * 3. Cat extends Animal, adds indoor property, overrides speak() to return "{name} meows."
 * 4. Dog has unique fetch() method returning "{name} fetches the ball."
 * 5. Animal.move() returns "{name} moved {distance} meters."
 *
 * LEARNING GOALS:
 * - Use `extends` to create subclasses
 * - Call parent constructor with `super()`
 * - Override methods with the `override` keyword
 * - Add subclass-specific properties and methods
 */

export class Animal {
  constructor(public name: string) {}

  speak(): string {
    // TODO: Return "{name} makes a sound."
    throw new Error('Not implemented');
  }

  move(distance: number): string {
    // TODO: Return "{name} moved {distance} meters."
    throw new Error('Not implemented');
  }
}

export class Dog extends Animal {
  constructor(name: string, public breed: string) {
    // TODO: Call the parent constructor with super()
    super(''); // Fix this
  }

  override speak(): string {
    // TODO: Return "{name} barks!"
    throw new Error('Not implemented');
  }

  fetch(): string {
    // TODO: Return "{name} fetches the ball."
    throw new Error('Not implemented');
  }
}

export class Cat extends Animal {
  constructor(name: string, public indoor: boolean = true) {
    // TODO: Call the parent constructor with super()
    super(''); // Fix this
  }

  override speak(): string {
    // TODO: Return "{name} meows."
    throw new Error('Not implemented');
  }
}
