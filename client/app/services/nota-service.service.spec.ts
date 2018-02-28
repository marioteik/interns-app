import { TestBed, inject } from '@angular/core/testing';

import { NotaService } from './nota-service.service';

describe('NotaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotaService]
    });
  });

  it('should be created', inject([NotaService], (service: NotaService) => {
    expect(service).toBeTruthy();
  }));
});
