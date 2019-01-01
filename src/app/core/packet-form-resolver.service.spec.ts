import { TestBed } from '@angular/core/testing';

import { PacketFormResolverService } from './packet-form-resolver.service';

describe('PacketFormResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacketFormResolverService = TestBed.get(PacketFormResolverService);
    expect(service).toBeTruthy();
  });
});
