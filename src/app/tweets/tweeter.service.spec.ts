import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TweeterService } from './tweeter.service';

describe('TweeterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule]
  }));

  it('should be created', () => {
    const service: TweeterService = TestBed.get(TweeterService);
    expect(service).toBeTruthy();
  });
});
