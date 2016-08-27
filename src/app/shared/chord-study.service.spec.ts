/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ChordStudyService } from './chord-study.service';

describe('Service: ChordStudy', () => {
  beforeEach(() => {
    addProviders([ChordStudyService]);
  });

  it('should ...',
    inject([ChordStudyService],
      (service: ChordStudyService) => {
        expect(service).toBeTruthy();
      }));
});
