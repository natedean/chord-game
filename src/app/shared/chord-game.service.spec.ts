import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ChordGameService } from './chord-game.service';

describe('ChordGame Service', () => {
  beforeEachProviders(() => [ChordGameService]);

  it('should ...',
      inject([ChordGameService], (service: ChordGameService) => {
    expect(service).toBeTruthy();
  }));
});
