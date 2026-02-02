import { describe, it, expect, vi } from 'vitest';
import { PaymentService, FakePaymentGateway, type PaymentGateway } from '../src/index.js';

describe('task-20 - Testing OOP Code', () => {
  describe('with fake implementation', () => {
    it('processPayment succeeds with valid amount', async () => {
      const gateway = new FakePaymentGateway();
      const service = new PaymentService(gateway);

      const txId = await service.processPayment(100, 'card-token');

      expect(txId).toContain('tx-');
      expect(gateway.getTransactionCount()).toBe(1);
    });

    it('processPayment fails when gateway declines', async () => {
      const gateway = new FakePaymentGateway();
      gateway.setShouldSucceed(false);
      const service = new PaymentService(gateway);

      await expect(
        service.processPayment(100, 'card-token')
      ).rejects.toThrow('Card declined');
    });
  });

  describe('with mock', () => {
    it('processPayment calls gateway.charge', async () => {
      const mockGateway: PaymentGateway = {
        charge: vi.fn().mockResolvedValue({ success: true, transactionId: 'mock-tx' }),
        refund: vi.fn(),
      };
      const service = new PaymentService(mockGateway);

      await service.processPayment(50, 'token');

      expect(mockGateway.charge).toHaveBeenCalledWith(50, 'token');
    });
  });

  it('processPayment validates amount', async () => {
    const service = new PaymentService(new FakePaymentGateway());

    await expect(service.processPayment(-10, 'token')).rejects.toThrow('Amount must be positive');
  });
});
