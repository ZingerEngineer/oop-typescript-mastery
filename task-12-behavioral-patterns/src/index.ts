/**
 * TASK 12: Behavioral Patterns
 *
 * PROBLEM:
 * Implement four behavioral design patterns:
 * - Strategy: Swap algorithms at runtime
 * - Observer: Notify subscribers of changes
 * - Command: Encapsulate actions with undo support
 * - State: Change behavior based on internal state
 *
 * EXPECTED OUTCOMES:
 * 1. Sorter uses interchangeable SortStrategy
 * 2. Subject notifies all subscribed Observers on notify()
 * 3. CommandHistory executes commands and supports undo
 * 4. Context delegates to current State object
 *
 * LEARNING GOALS:
 * - Strategy: Encapsulate algorithms
 * - Observer: Implement pub/sub pattern
 * - Command: Support undo/redo operations
 * - State: Manage state-dependent behavior
 */

// ==================== STRATEGY PATTERN ====================

export interface SortStrategy<T> {
  sort(items: T[]): T[];
}

export class QuickSort<T> implements SortStrategy<T> {
  sort(items: T[]): T[] {
    // TODO: Return sorted copy of items
    // Hint: [...items].sort()
    throw new Error('Not implemented');
  }
}

export class Sorter<T> {
  constructor(private strategy: SortStrategy<T>) {}

  setStrategy(strategy: SortStrategy<T>): void {
    // TODO: Update the strategy
  }

  sort(items: T[]): T[] {
    // TODO: Delegate to strategy.sort()
    throw new Error('Not implemented');
  }
}

// ==================== OBSERVER PATTERN ====================

export interface Observer<T> {
  update(data: T): void;
}

export class Subject<T> {
  private observers: Observer<T>[] = [];

  subscribe(observer: Observer<T>): void {
    // TODO: Add observer to the list
  }

  unsubscribe(observer: Observer<T>): void {
    // TODO: Remove observer from the list
    // Hint: Use filter()
  }

  notify(data: T): void {
    // TODO: Call update(data) on each observer
  }
}

// ==================== COMMAND PATTERN ====================

export interface Command {
  execute(): void;
  undo(): void;
}

export class CommandHistory {
  private history: Command[] = [];

  execute(command: Command): void {
    // TODO: 1. Call command.execute()
    // TODO: 2. Push command to history
  }

  undo(): void {
    // TODO: 1. Pop last command from history
    // TODO: 2. Call undo() on it (if exists)
    // Hint: Use optional chaining ?.
  }
}

// ==================== STATE PATTERN ====================

export interface State {
  handle(context: Context): void;
}

export class Context {
  constructor(private state: State) {}

  setState(state: State): void {
    // TODO: Update the current state
  }

  request(): void {
    // TODO: Delegate to state.handle(this)
  }
}
