import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChordGameService } from './shared/chord-game.service';
import { Difficulties } from './shared/chord-map';
import { HelpersService } from './shared/helpers.service';

@Component({
  moduleId: module.id,
  selector: 'chord-game-app',
  templateUrl: 'chord-game.component.html',
  styleUrls: ['chord-game.component.css'],
  providers: [ChordGameService, HelpersService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChordGameAppComponent {
  title = 'Guitar Chord Game';
  difficulties = Difficulties.toArray();
  selectedChord = {};
  pageState: string;

  public calcNoteHeight(fret: number): string {
    return `${(fret - 1) * 40 + 5}px`;
  }

  test(e) {
    console.log(e.target.value)
  }

  constructor(private chordGameService: ChordGameService,
              private helpersService: HelpersService) {
    chordGameService.selected$.subscribe(x => {
      this.selectedChord = x;
    });

    chordGameService.pageState$.subscribe(x => {
      this.pageState = x;
    });

  }

}
