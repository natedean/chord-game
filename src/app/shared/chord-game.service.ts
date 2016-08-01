import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import * as Immutable from 'immutable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeUntil';

import { ChordMap, Chord } from  './chord-map';

const PageStates = { play: 'play', study: 'study' };

const ChordMapArray = ChordMap.toArray();

const GameState = {
  'myAnswers': [],
  'opponentAnswers': [] 
};

@Injectable()
export class ChordGameService {

  public whatever$ = new Subject();

  public changePageState$ = new Subject<string>();

  public answerHandler$ = new Subject<boolean>();

  private answerReducer$ = this.answerHandler$
    .map(x => state => {
      state.myAnswers.push(x);

      return state;
    });
       
  public pageState$ = this.changePageState$.startWith(PageStates.play);

  public selectedChordReducer$ = new Subject()
    .do(x => console.dir(x))
    .map((x: string) => (state: Chord) => state = ChordMap.get(x));

  public selectRandomChordReducer$ = new Subject()
    .map(() => state => {
      const rand: number = Math.floor(Math.random() * ChordMap.size);

      console.log('rand: ', rand);

      return ChordMapArray[rand]; 
    });
 
  public chordList$ = Observable.of(ChordMapArray);

  public chordListReducer$ = 
    this.chordList$.map(xs => state => state = xs[0]);

  public gameState$ = Observable.merge(
    this.answerReducer$
  ).scan((acc, fn: any) => fn(acc), GameState)
  .do(x => console.log(x));

  public selected$ = Observable.merge(
    this.selectedChordReducer$,
    this.chordListReducer$,
    this.selectRandomChordReducer$
  ).scan((acc: Chord, fn: any) => fn(acc), ChordMap.first())
  .do(x => console.log(x));
    
  constructor() {}

}
