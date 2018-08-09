import { TestBed, inject } from '@angular/core/testing';

import { NgenRestfulCrudService } from './ngen-restful-crud.service';

describe('NgenRestfulCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgenRestfulCrudService]
    });
  });

  it('should be created', inject([NgenRestfulCrudService], (service: NgenRestfulCrudService) => {
    expect(service).toBeTruthy();
  }));
});
