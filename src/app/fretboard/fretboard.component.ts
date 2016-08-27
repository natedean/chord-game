import { Component, OnInit, Input } from '@angular/core';

import { Chord } from '../shared/models';

@Component({
  selector: 'fretboard',
  templateUrl: 'fretboard.component.html',
  styleUrls: ['fretboard.component.css'],
})
export class FretboardComponent implements OnInit {
  @Input() chord: Chord;

  constructor() { }

  public calcNoteHeight(fret: number): string {
    return `${(fret - 1) * 40 + 5}px`;
  }

  ngOnInit() {
  }

}
