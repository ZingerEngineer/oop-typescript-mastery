// task-17-event-driven-reactive - EventEmitter, Observables, reactive patterns

type EventHandler<T> = (data: T) => void;

// Type-safe event emitter
export class TypedEventEmitter<Events extends Record<string, unknown>> {
  private handlers = new Map<keyof Events, Set<EventHandler<unknown>>>();

  on<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>): () => void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, new Set());
    }
    this.handlers.get(event)!.add(handler as EventHandler<unknown>);

    return () => this.off(event, handler);
  }

  off<K extends keyof Events>(event: K, handler: EventHandler<Events[K]>): void {
    this.handlers.get(event)?.delete(handler as EventHandler<unknown>);
  }

  emit<K extends keyof Events>(event: K, data: Events[K]): void {
    this.handlers.get(event)?.forEach(handler => handler(data));
  }
}

// Simple Observable implementation
export class Observable<T> {
  constructor(private subscribe: (observer: Observer<T>) => () => void) {}

  static of<T>(...values: T[]): Observable<T> {
    return new Observable(observer => {
      values.forEach(v => observer.next(v));
      observer.complete();
      return () => {};
    });
  }

  map<U>(fn: (value: T) => U): Observable<U> {
    return new Observable(observer => {
      return this.subscribe({
        next: value => observer.next(fn(value)),
        error: err => observer.error(err),
        complete: () => observer.complete(),
      });
    });
  }

  filter(predicate: (value: T) => boolean): Observable<T> {
    return new Observable(observer => {
      return this.subscribe({
        next: value => { if (predicate(value)) observer.next(value); },
        error: err => observer.error(err),
        complete: () => observer.complete(),
      });
    });
  }

  run(observer: Partial<Observer<T>>): () => void {
    return this.subscribe({
      next: observer.next ?? (() => {}),
      error: observer.error ?? (() => {}),
      complete: observer.complete ?? (() => {}),
    });
  }
}

export interface Observer<T> {
  next(value: T): void;
  error(err: Error): void;
  complete(): void;
}
