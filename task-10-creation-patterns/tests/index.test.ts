import { describe, it, expect } from 'vitest';
import { ButtonFactory, HttpRequestBuilder, ConfigManager } from '../src/index.js';

describe('task-10 - Creational Patterns', () => {
  it('ButtonFactory creates correct button types', () => {
    const factory = new ButtonFactory();
    const primary = factory.create('primary');
    expect(primary.render()).toContain('primary');
  });

  it('HttpRequestBuilder builds request step by step', () => {
    const request = new HttpRequestBuilder()
      .setMethod('POST')
      .setUrl('/api/users')
      .addHeader('Content-Type', 'application/json')
      .setBody('{"name":"test"}')
      .build();

    expect(request.method).toBe('POST');
    expect(request.url).toBe('/api/users');
  });

  it('ConfigManager returns same instance', () => {
    const config1 = ConfigManager.getInstance();
    const config2 = ConfigManager.getInstance();
    expect(config1).toBe(config2);
  });

  it('ConfigManager stores and retrieves values', () => {
    const config = ConfigManager.getInstance();
    config.set('apiUrl', 'http://localhost');
    expect(config.get('apiUrl')).toBe('http://localhost');
  });
});
