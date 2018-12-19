import { TestBed } from '@angular/core/testing';

import { ViewresolverService } from './viewresolver.service';

describe('ViewresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewresolverService = TestBed.get(ViewresolverService);
    expect(service).toBeTruthy();
  });
});
