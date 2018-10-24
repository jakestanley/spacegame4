import { TestBed, inject } from '@angular/core/testing';

import { GameclientService } from './gameclient.service';

describe('GameclientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameclientService]
    });
  });

  it('should be created', inject([GameclientService], (service: GameclientService) => {
    expect(service).toBeTruthy();
  }));
});
