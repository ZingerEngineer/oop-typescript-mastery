// task-20-testing-oop - Mocking, test doubles, testable design

// Interface for dependency
export interface PaymentGateway {
  charge(amount: number, cardToken: string): Promise<PaymentResult>;
  refund(transactionId: string): Promise<boolean>;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

// Service designed for testability
export class PaymentService {
  constructor(private gateway: PaymentGateway) {}

  async processPayment(amount: number, cardToken: string): Promise<string> {
    if (amount <= 0) {
      throw new Error('Amount must be positive');
    }

    const result = await this.gateway.charge(amount, cardToken);

    if (!result.success) {
      throw new Error(result.error ?? 'Payment failed');
    }

    return result.transactionId!;
  }

  async refundPayment(transactionId: string): Promise<boolean> {
    return this.gateway.refund(transactionId);
  }
}

// Fake implementation for testing
export class FakePaymentGateway implements PaymentGateway {
  private shouldSucceed = true;
  private transactions: string[] = [];

  setShouldSucceed(value: boolean): void {
    this.shouldSucceed = value;
  }

  async charge(amount: number, _cardToken: string): Promise<PaymentResult> {
    if (!this.shouldSucceed) {
      return { success: false, error: 'Card declined' };
    }
    const txId = `tx-${Date.now()}`;
    this.transactions.push(txId);
    return { success: true, transactionId: txId };
  }

  async refund(transactionId: string): Promise<boolean> {
    const index = this.transactions.indexOf(transactionId);
    if (index >= 0) {
      this.transactions.splice(index, 1);
      return true;
    }
    return false;
  }

  getTransactionCount(): number {
    return this.transactions.length;
  }
}
