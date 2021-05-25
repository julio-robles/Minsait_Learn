import { TestBed } from '@angular/core/testing';

import { RequestExampleService } from './request-example.service';

describe('RequestExampleService', () => {
  let service: RequestExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
