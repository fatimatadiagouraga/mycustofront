import { TestBed } from '@angular/core/testing';

import { IngredientsListeService } from './ingredients-liste.service';

describe('IngredientsListeService', () => {
  let service: IngredientsListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
