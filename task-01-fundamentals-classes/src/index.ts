/**
 * TASK 01: Fundamentals & Classes
 *
 * PROBLEM:
 * Learn the basics of TypeScript classes including constructors, properties,
 * and methods. Understand both verbose and shorthand constructor syntax.
 *
 * EXPECTED OUTCOMES:
 * 1. Person class should store name and age, with an introduce() method
 *    that returns "Hi, I'm {name} and I'm {age} years old."
 * 2. Product class should use shorthand constructor syntax (public params)
 *    and have a format() method returning "{name}: ${price}" with 2 decimal places
 *
 * LEARNING GOALS:
 * - Understand class property declaration
 * - Learn constructor patterns (verbose vs shorthand)
 * - Implement instance methods that use `this`
 */

export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    // TODO: Initialize the name and age properties
  }

  introduce(): string {
    // TODO: Return a greeting string using name and age
    // Format: "Hi, I'm {name} and I'm {age} years old."
    throw new Error('Not implemented');
  }
}

// Shorthand constructor syntax - properties declared in constructor params
export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number
  ) { }

  format(): string {
    // TODO: Return formatted string "{name}: ${price}"
    // Price should have exactly 2 decimal places (use toFixed)
    throw new Error('Not implemented');
  }
}
