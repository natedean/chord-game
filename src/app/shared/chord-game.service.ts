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
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/observable/bindCallback';

import { ChordMap, Chord } from  './chord-map';

const PageStates = { play: 'play', study: 'study' };

const ChordMapArray = ChordMap.toArray();

// const socket = io.connect('https://gtsockets-zijlijoygm.now.sh');
const socket = io.connect('localhost:3001');

const GameState = {};

@Injectable()
export class ChordGameService {
  public whatever$ = new Subject();

  public changePageState$ = new Subject<string>();

  public answerHandler$ = new Subject<boolean>();

  private socketState$ = new Subject<any>();

  private socketStateReducer$ = this.socketState$
    .map(x => state => {
      state = x;

      console.log('server state changed!', x);

      return state;
    });

  private answerReducer$ = this.answerHandler$
    .map(x => state => {
      state.me.answers.push(x);

      return state;
    })
    .do(x => {
      // not sure how to handle this side effect at the moment
      socket.emit('answerEvent', { isCorrect: true });

    });

  public randomChordAfterAnswerReducer$ = this.answerHandler$
      .map(() => this.randChordReducer);
       
  public pageState$ = this.changePageState$.startWith(PageStates.play);

  public selectedChordReducer$ = new Subject()
    .do(x => console.dir(x))
    .map((x: string) => (state: Chord) => state = ChordMap.get(x));

  public selectRandomChordReducer$ = new Subject()
    .map(() => this.randChordReducer);

  private randChordReducer = (state) => {
      const rand: number = Math.floor(Math.random() * ChordMap.size);

      return ChordMapArray[rand];
  }
 
  public chordList$ = Observable.of(ChordMapArray);

  public chordListReducer$ = 
    this.chordList$.map(xs => state => state = xs[0]);

  public gameState$ = Observable.merge(
    this.answerReducer$,
    this.socketStateReducer$
  ).scan((acc, fn: any) => fn(acc), GameState);

  public selected$ = Observable.merge(
    this.selectedChordReducer$,
    this.chordListReducer$,
    this.selectRandomChordReducer$,
    this.randomChordAfterAnswerReducer$
  ).scan((acc: Chord, fn: any) => fn(acc), ChordMap.first());


  constructor() {
    // testing

    socket.on('stateChange', (x) => {
      this.socketState$.next(x);
    });


  }

}
