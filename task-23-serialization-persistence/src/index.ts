// task-23-serialization-persistence - JSON, class revival, repositories

// Serializable interface
export interface Serializable<T> {
  toJSON(): object;
}

// Entity with serialization support
export class Task implements Serializable<Task> {
  constructor(
    public id: string,
    public title: string,
    public completed: boolean,
    public dueDate: Date | null
  ) {}

  toJSON(): object {
    return {
      id: this.id,
      title: this.title,
      completed: this.completed,
      dueDate: this.dueDate?.toISOString() ?? null,
    };
  }

  static fromJSON(data: {
    id: string;
    title: string;
    completed: boolean;
    dueDate: string | null;
  }): Task {
    return new Task(
      data.id,
      data.title,
      data.completed,
      data.dueDate ? new Date(data.dueDate) : null
    );
  }
}

// Generic JSON serializer with class revival
export class Serializer<T extends Serializable<T>> {
  constructor(private reviver: (data: object) => T) {}

  serialize(entity: T): string {
    return JSON.stringify(entity.toJSON());
  }

  deserialize(json: string): T {
    const data = JSON.parse(json);
    return this.reviver(data);
  }

  serializeMany(entities: T[]): string {
    return JSON.stringify(entities.map(e => e.toJSON()));
  }

  deserializeMany(json: string): T[] {
    const data = JSON.parse(json) as object[];
    return data.map(d => this.reviver(d));
  }
}

// Simple file-like repository
export class JsonRepository<T extends Serializable<T> & { id: string }> {
  private storage = new Map<string, string>();

  constructor(private serializer: Serializer<T>) {}

  save(entity: T): void {
    this.storage.set(entity.id, this.serializer.serialize(entity));
  }

  findById(id: string): T | null {
    const json = this.storage.get(id);
    return json ? this.serializer.deserialize(json) : null;
  }

  findAll(): T[] {
    return Array.from(this.storage.values()).map(json =>
      this.serializer.deserialize(json)
    );
  }

  delete(id: string): boolean {
    return this.storage.delete(id);
  }
}
