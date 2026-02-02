import { describe, it, expect } from 'vitest';
import {
  PriceRangeSpec,
  InStockSpec,
  CategorySpec,
  SimpleUnitOfWork,
  type Product,
} from '../src/index.js';

describe('task-25 - Advanced Patterns', () => {
  const products: Product[] = [
    { name: 'Laptop', price: 1000, inStock: true, category: 'electronics' },
    { name: 'Book', price: 20, inStock: true, category: 'books' },
    { name: 'Phone', price: 500, inStock: false, category: 'electronics' },
  ];

  it('Specification pattern filters with single spec', () => {
    const inStock = new InStockSpec();
    const result = products.filter(p => inStock.isSatisfiedBy(p));
    expect(result).toHaveLength(2);
  });

  it('Specification pattern composes with AND', () => {
    const spec = new InStockSpec()
      .and(new CategorySpec('electronics'))
      .and(new PriceRangeSpec(0, 800));

    const result = products.filter(p => spec.isSatisfiedBy(p));
    expect(result).toHaveLength(0); // Laptop is >800, Phone is out of stock
  });

  it('Specification pattern composes with OR', () => {
    const spec = new CategorySpec('books').or(new PriceRangeSpec(900, 1100));
    const result = products.filter(p => spec.isSatisfiedBy(p));
    expect(result).toHaveLength(2); // Book + Laptop
  });

  it('Specification pattern supports NOT', () => {
    const spec = new InStockSpec().not();
    const result = products.filter(p => spec.isSatisfiedBy(p));
    expect(result).toHaveLength(1); // Only Phone
  });

  it('UnitOfWork tracks changes', async () => {
    const uow = new SimpleUnitOfWork();

    uow.registerNew({ id: '1', name: 'New Item' });
    uow.registerDirty({ id: '2', name: 'Updated Item' });
    uow.registerDeleted({ id: '3', name: 'Deleted Item' });

    await expect(uow.commit()).resolves.toBeUndefined();
  });
});
