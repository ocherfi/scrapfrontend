import { TestBed } from '@angular/core/testing';

import { GetdatascraperService } from './getdatascraper.service';

describe('GetdatascraperService', () => {
  let service: GetdatascraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdatascraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
