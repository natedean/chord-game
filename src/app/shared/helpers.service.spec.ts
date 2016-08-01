import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { HelpersService } from './helpers.service';

describe('Helpers Service', () => {
  beforeEachProviders(() => [HelpersService]);

  it('should ...',
      inject([HelpersService], (service: HelpersService) => {
    expect(service).toBeTruthy();
  }));
});
