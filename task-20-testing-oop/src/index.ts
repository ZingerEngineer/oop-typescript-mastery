/**
 * TASK 20: Testing OOP Code
 *
 * PROBLEM:
 * Implement testable code with dependency injection and create test doubles:
 * - Interface-based dependencies for easy mocking
 * - Fake implementation for behavior testing
 * - Service that validates input and delegates to dependencies
 *
 * EXPECTED OUTCOMES:
 * 1. PaymentService validates amount > 0
 * 2. PaymentService.processPayment() returns transactionId on success
 * 3. PaymentService throws on payment failure
 * 4. FakePaymentGateway can simulate success/failure
 * 5. FakePaymentGateway tracks transaction count for assertions
 *
 * LEARNING GOALS:
 * - Design for testability with interfaces
 * - Create Fake implementations for testing
 * - Understand difference between Mocks and Fakes
 */

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
    // TODO: 1. Throw Error('Amount must be positive') if amount <= 0
    // TODO: 2. Call gateway.charge()
    // TODO: 3. If not success, throw Error with result.error or 'Payment failed'
    // TODO: 4. Return transactionId
    throw new Error('Not implemented');
  }

  async refundPayment(transactionId: string): Promise<boolean> {
    // TODO: Delegate to gateway.refund()
    throw new Error('Not implemented');
  }
}

// Fake implementation for testing
export class FakePaymentGateway implements PaymentGateway {
  private shouldSucceed = true;
  private transactions: string[] = [];

  setShouldSucceed(value: boolean): void {
    // TODO: Set shouldSucceed flag
  }

  async charge(_amount: number, _cardToken: string): Promise<PaymentResult> {
    // TODO: If shouldSucceed is false, return failure with 'Card declined'
    // TODO: Otherwise generate txId like `tx-${Date.now()}`
    // TODO: Add txId to transactions array
    // TODO: Return success with transactionId
    throw new Error('Not implemented');
  }

  async refund(transactionId: string): Promise<boolean> {
    // TODO: Find transactionId in transactions array
    // TODO: If found, remove it and return true
    // TODO: Otherwise return false
    throw new Error('Not implemented');
  }

  getTransactionCount(): number {
    // TODO: Return number of transactions
    throw new Error('Not implemented');
  }
}
