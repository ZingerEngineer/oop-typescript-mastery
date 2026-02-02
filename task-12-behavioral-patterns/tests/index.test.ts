import { describe, it, expect, vi } from 'vitest';
import { Sorter, QuickSort, Subject, CommandHistory, type Command, type Observer } from '../src/index.js';

describe('task-12 - Behavioral Patterns', () => {
  it('Sorter uses strategy pattern', () => {
    const sorter = new Sorter(new QuickSort<number>());
    expect(sorter.sort([3, 1, 2])).toEqual([1, 2, 3]);
  });

  it('Subject notifies observers', () => {
    const subject = new Subject<string>();
    const observer: Observer<string> = { update: vi.fn() };

    subject.subscribe(observer);
    subject.notify('test');

    expect(observer.update).toHaveBeenCalledWith('test');
  });

  it('CommandHistory executes and undoes commands', () => {
    const history = new CommandHistory();
    let value = 0;

    const command: Command = {
      execute: () => { value = 1; },
      undo: () => { value = 0; }
    };

    history.execute(command);
    expect(value).toBe(1);

    history.undo();
    expect(value).toBe(0);
  });
});
