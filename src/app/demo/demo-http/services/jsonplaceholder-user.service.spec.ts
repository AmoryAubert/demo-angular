import { TestBed } from '@angular/core/testing';

import { JsonplaceholderUserService } from './jsonplaceholder-user.service';

describe('JsonplaceholderUserService', () => {
  let service: JsonplaceholderUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonplaceholderUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
