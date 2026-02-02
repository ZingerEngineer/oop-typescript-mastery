/**
 * TASK 17: Event-Driven & Reactive
 *
 * PROBLEM:
 * Implement event-driven patterns:
 * - TypedEventEmitter: Type-safe event publishing/subscribing
 * - Observable: Lazy push-based data streams with operators
 *
 * EXPECTED OUTCOMES:
 * 1. TypedEventEmitter.on() subscribes and returns unsubscribe function
 * 2. TypedEventEmitter.emit() notifies all handlers for that event
 * 3. Observable.of() creates observable from values
 * 4. Observable.map() transforms values
 * 5. Observable.filter() filters values by predicate
 *
 * LEARNING GOALS:
 * - Implement publish/subscribe pattern
 * - Understand lazy evaluation with Observables
 * - Chain operators for data transformation
 */

type EventHandler<T> = (data: T) => void;

// Type-safe event emitter
export class TypedEventEmitter<Events extends Record<string, unknown>> {
  private handlers = new Map<keyof Events, Set<EventHandler<unknown>>>();

  on<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>): () => void {
    // TODO: 1. If no handlers Set for event, create one
    // TODO: 2. Add handler to the Set
    // TODO: 3. Return unsubscribe function that calls off()
    throw new Error('Not implemented');
  }

  off<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>): void {
    // TODO: Remove handler from the Set for this event
    // Hint: Use optional chaining ?.delete()
  }

  emit<K extends keyof Events>(event: K, data: Events[K]): void {
    // TODO: Call each handler for this event with data
    // Hint: Use optional chaining ?.forEach()
  }
}

// Observer interface
export interface Observer<T> {
  next(value: T): void;
  error(err: Error): void;
  complete(): void;
}

// Simple Observable implementation
export class Observable<T> {
  constructor(private subscribeFn: (observer: Observer<T>) => () => void) {}

  static of<T>(...values: T[]): Observable<T> {
    // TODO: Return Observable that emits each value then completes
    throw new Error('Not implemented');
  }

  map<U>(fn: (value: T) => U): Observable<U> {
    // TODO: Return new Observable that transforms values with fn
    throw new Error('Not implemented');
  }

  filter(predicate: (value: T) => boolean): Observable<T> {
    // TODO: Return new Observable that only emits values passing predicate
    throw new Error('Not implemented');
  }

  run(observer: Partial<Observer<T>>): () => void {
    // TODO: Subscribe with provided observer (use defaults for missing callbacks)
    throw new Error('Not implemented');
  }
}
