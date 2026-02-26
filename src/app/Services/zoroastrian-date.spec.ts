import { TestBed } from '@angular/core/testing';

import { ZoroastrianDate } from './zoroastrian-date';

describe('ZoroastrianDate', () => {
  let service: ZoroastrianDate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoroastrianDate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
