import { TestBed, inject } from '@angular/core/testing';

import { MedbuddyAPIService } from './medbuddy-api.service';

describe('MedbuddyAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedbuddyAPIService]
    });
  });

  it('should be created', inject([MedbuddyAPIService], (service: MedbuddyAPIService) => {
    expect(service).toBeTruthy();
  }));
});
