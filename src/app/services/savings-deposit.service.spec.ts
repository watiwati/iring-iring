import { TestBed } from '@angular/core/testing';

import { SavingsDepositService } from './savings-deposit.service';

describe('SavingsDepositService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavingsDepositService = TestBed.get(SavingsDepositService);
    expect(service).toBeTruthy();
  });
});
