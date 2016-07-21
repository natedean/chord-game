import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ChordGameAppComponent } from '../app/chord-game.component';

beforeEachProviders(() => [ChordGameAppComponent]);

describe('App: ChordGame', () => {
  it('should create the app',
      inject([ChordGameAppComponent], (app: ChordGameAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'chord-game works!\'',
      inject([ChordGameAppComponent], (app: ChordGameAppComponent) => {
    expect(app.title).toEqual('chord-game works!');
  }));
});
