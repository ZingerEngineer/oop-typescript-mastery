// task-01-fundamentals-classes - Class fundamentals
export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

// Shorthand constructor syntax
export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number
  ) {}

  format(): string {
    return `${this.name}: $${this.price.toFixed(2)}`;
  }
}
