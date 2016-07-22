import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChordGameService } from './shared/chord-game.service';
import { Difficulties } from './shared/chord-map';

@Component({
  moduleId: module.id,
  selector: 'chord-game-app',
  templateUrl: 'chord-game.component.html',
  styleUrls: ['chord-game.component.css'],
  providers: [ChordGameService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChordGameAppComponent {
  title = 'testing the game!';
  difficulties = Difficulties.toArray();
  selectedChord = {};

  constructor(private chordGameService: ChordGameService) {
    chordGameService.selectedChord$.subscribe(x => {
      this.selectedChord = x;
    });

  }

}
