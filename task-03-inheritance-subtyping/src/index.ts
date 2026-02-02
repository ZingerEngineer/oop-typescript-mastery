// task-03-inheritance-subtyping - Inheritance and method overriding
export class Animal {
  constructor(public name: string) {}

  speak(): string {
    return `${this.name} makes a sound.`;
  }

  move(distance: number): string {
    return `${this.name} moved ${distance} meters.`;
  }
}

export class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  override speak(): string {
    return `${this.name} barks!`;
  }

  fetch(): string {
    return `${this.name} fetches the ball.`;
  }
}

export class Cat extends Animal {
  constructor(name: string, public indoor: boolean = true) {
    super(name);
  }

  override speak(): string {
    return `${this.name} meows.`;
  }
}
