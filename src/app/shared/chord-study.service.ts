import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ChordMap } from  './chord-map';
import { Chord } from './models';

import { shuffle } from './helpers';

const ChordMapArray = ChordMap.toArray();

@Injectable()
export class ChordStudyService {

  constructor() { }

  public selectedChordReducer$ = new Subject()
    .do(x => console.dir(x))
    .map((x: string) => (state: Chord) => state = ChordMap.get(x));

  public selectRandomChordReducer$ = new Subject()
    .map(() => this.randChordReducer);

  private randChordReducer = (state) => {
    const rand: number = Math.floor(Math.random() * ChordMap.size);

    let result: Chord = ChordMapArray[rand];

    result.answers = shuffle(result.answers);

    return ChordMapArray[rand];
  };

  public chordList$ = Observable.of(ChordMapArray);

  public chordListReducer$ =
    this.chordList$.map(xs => state => state = xs[0]);

  public selected$ = Observable.merge(
    this.selectedChordReducer$,
    this.chordListReducer$,
    this.selectRandomChordReducer$
  ).scan((acc: Chord, fn: any) => fn(acc), ChordMap.first());

}
