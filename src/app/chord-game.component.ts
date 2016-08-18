import { Component, NgZone } from '@angular/core';
import { ChordGameService } from './shared/chord-game.service';
import { HelpersService } from './shared/helpers.service';
import * as Immutable from 'immutable';

@Component({
  moduleId: module.id,
  selector: 'chord-game-app',
  templateUrl: 'chord-game.component.html',
  styleUrls: ['chord-game.component.css'],
  providers: [ChordGameService, HelpersService]
})
export class ChordGameAppComponent {
  title = 'Guitar Chord Game';
  selectedChord = {};
  pageState: string;
  gameState = Immutable.Map();

  public calcNoteHeight(fret: number): string {
    return `${(fret - 1) * 40 + 5}px`;
  }

  constructor(private chordGameService: ChordGameService,
              private helpersService: HelpersService,
              private zone: NgZone) {

    chordGameService.selected$.subscribe(x => {
      this.selectedChord = x;
    });

    chordGameService.pageState$.subscribe(x => {
      this.pageState = x;
    });

    chordGameService.gameState$.subscribe(x => {
        this.zone.run(() => {
          this.gameState = x;

          console.log('state');
          console.dir(this.gameState.toJS());
        });
    });

  }

}
