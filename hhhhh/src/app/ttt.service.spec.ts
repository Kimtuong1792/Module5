import { TestBed } from '@angular/core/testing';

import { TttService } from './ttt.service';

describe('TttService', () => {
  let service: TttService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
