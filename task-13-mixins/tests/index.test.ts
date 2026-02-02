import { describe, it, expect } from 'vitest';
import { Document, Entity, Timestamped, Taggable } from '../src/index.js';

describe('task-13 - Mixins', () => {
  it('Document has timestamp properties from mixin', () => {
    const doc = new Document('1', 'Test Doc');
    expect(doc.createdAt).toBeInstanceOf(Date);
    expect(doc.updatedAt).toBeInstanceOf(Date);
  });

  it('Document has tag methods from mixin', () => {
    const doc = new Document('1', 'Test Doc');
    doc.addTag('important');
    expect(doc.hasTag('important')).toBe(true);
  });

  it('Mixins can be composed', () => {
    const doc = new Document('1', 'Test');
    doc.addTag('test');
    doc.touch();
    expect(doc.tags).toContain('test');
  });

  it('Document extends Entity', () => {
    const doc = new Document('1', 'Test');
    expect(doc.id).toBe('1');
  });
});
