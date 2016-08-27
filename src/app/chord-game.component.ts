import { Component, NgZone } from '@angular/core';
import { ChordGameService } from './shared/chord-game.service';
import { FretboardComponent } from './fretboard/fretboard.component';
import * as Immutable from 'immutable';

@Component({
  moduleId: module.id,
  selector: 'chord-game-app',
  templateUrl: 'chord-game.component.html',
  styleUrls: ['chord-game.component.css'],
  directives: [FretboardComponent],
  providers: [ChordGameService]
})
export class ChordGameAppComponent {
  title = 'Guitar Chord Game';
  pageState: string;
  gameState = Immutable.Map();

  constructor(private chordGameService: ChordGameService,
              private zone: NgZone) {

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
