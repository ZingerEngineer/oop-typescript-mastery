// task-12-behavioral-patterns - Strategy, Observer, Command, State

// Strategy Pattern
export interface SortStrategy<T> {
  sort(items: T[]): T[];
}

export class QuickSort<T> implements SortStrategy<T> {
  sort(items: T[]): T[] {
    return [...items].sort();
  }
}

export class Sorter<T> {
  constructor(private strategy: SortStrategy<T>) {}

  setStrategy(strategy: SortStrategy<T>): void {
    this.strategy = strategy;
  }

  sort(items: T[]): T[] {
    return this.strategy.sort(items);
  }
}

// Observer Pattern
export interface Observer<T> {
  update(data: T): void;
}

export class Subject<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer<T>): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(data: T): void {
    this.observers.forEach(o => o.update(data));
  }
}

// Command Pattern
export interface Command {
  execute(): void;
  undo(): void;
}

export class CommandHistory {
  private history: Command[] = [];

  execute(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undo(): void {
    const command = this.history.pop();
    command?.undo();
  }
}

// State Pattern
export interface State {
  handle(context: Context): void;
}

export class Context {
  constructor(private state: State) {}

  setState(state: State): void {
    this.state = state;
  }

  request(): void {
    this.state.handle(this);
  }
}
