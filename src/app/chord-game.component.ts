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
  title = 'Guitar Chord Game';
  difficulties = Difficulties.toArray();
  selectedChord = {};

  public calcNoteHeight(fret: number): string {
    return `${(fret - 1) * 35 + 3}px`;
  }

  constructor(private chordGameService: ChordGameService) {
    chordGameService.selected$.subscribe(x => {
      this.selectedChord = x;
    });

  }

}
