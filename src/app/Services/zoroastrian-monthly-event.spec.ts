import { TestBed } from '@angular/core/testing';

import { ZoroastrianMonthlyEvent } from './zoroastrian-monthly-event';

describe('ZoroastrianMonthlyEvent', () => {
  let service: ZoroastrianMonthlyEvent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoroastrianMonthlyEvent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
