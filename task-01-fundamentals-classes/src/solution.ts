export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  introduce(): string {
    if (!this.name || !this.age) {
      throw new Error("Name or age is not defined.")
    }
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
  }
}

export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public currency: string
  ) { }

  format(): string {
    if (!this.name || !this.price) {
      throw new Error('Name or price is not defined.');
    }
    return `Product id: ${this.id}, ${this.name}: ${this.price.toFixed(2)}$`
  }
}

const ahmed = new Person("Ahmed", 20)

const ramy = new Person("Ramy", 25)

const mona = new Person("Mona", 40)

const goatCheese = new Product("20", "Goat Cheese", 20.2345, "$")
const waterBottle = new Product("e9221", "Aquafina Water Bottle", 9.500, "EGP")

console.log(ahmed.introduce())
console.log(ramy.introduce())
console.log(mona.introduce())
console.log(goatCheese.format())
console.log(waterBottle.format())