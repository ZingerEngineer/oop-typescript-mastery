import { describe, it, expect } from 'vitest';
import { Task, Serializer, JsonRepository } from '../src/index.js';

describe('task-23 - Serialization & Persistence', () => {
  it('Task.toJSON serializes correctly', () => {
    const task = new Task('1', 'Test', false, new Date('2024-01-01'));
    const json = task.toJSON();

    expect(json).toHaveProperty('id', '1');
    expect(json).toHaveProperty('dueDate', '2024-01-01T00:00:00.000Z');
  });

  it('Task.fromJSON deserializes correctly', () => {
    const data = {
      id: '1',
      title: 'Test',
      completed: true,
      dueDate: '2024-01-01T00:00:00.000Z',
    };

    const task = Task.fromJSON(data);

    expect(task.id).toBe('1');
    expect(task.dueDate).toBeInstanceOf(Date);
  });

  it('Serializer roundtrips entities', () => {
    const serializer = new Serializer<Task>(Task.fromJSON);
    const task = new Task('1', 'Test', false, null);

    const json = serializer.serialize(task);
    const restored = serializer.deserialize(json);

    expect(restored.id).toBe(task.id);
    expect(restored.title).toBe(task.title);
  });

  it('JsonRepository stores and retrieves entities', () => {
    const repo = new JsonRepository<Task>(new Serializer(Task.fromJSON));
    const task = new Task('1', 'Test', false, null);

    repo.save(task);
    const found = repo.findById('1');

    expect(found?.title).toBe('Test');
  });
});
