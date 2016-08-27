import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import * as Immutable from 'immutable';
import { shuffle } from './helpers';

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

const PageStates = { play: 'play', study: 'study', choose: 'choose' };

// const socket = io.connect('https://gtsockets-zijlijoygm.now.sh');
const socket = io.connect('localhost:3001');

@Injectable()
export class ChordGameService {
  public changePageState$ = new Subject<string>();

  public answerHandler$ = new Subject<boolean>();

  private socketState$ = new Subject<any>();

  private socketStateReducer$ = this.socketState$
    .map(x => state => {

      state = state.merge(x);

      return state;
    });

  private answerReducer$ = this.answerHandler$
    .map(x => state => {

      let list = state.getIn(['me', 'answers']);
      list = list.push(x);

      state = state.setIn(['me', 'answers'], list);

      // ergg, horrible side effect here
      socket.emit('answerEvent', { isCorrect: state.getIn(['me', 'answers']).last() });
      // end horribleness

      return state;
    });

  public pageState$ = this.changePageState$.startWith(PageStates.choose);

  public gameState$ = Observable.merge(
    this.answerReducer$,
    this.socketStateReducer$
  ).scan((acc, fn: any) => fn(acc), Immutable.Map());

  constructor() {
    // testing

    // incoming socket stage changes // couldn't get fromCallback to work...
    socket.on('stateChange', (x) => {
      this.socketState$.next(x);
    });

    this.pageState$.subscribe((x) => {
      if (x === PageStates.play) {
        socket.emit('join');
      }
    });
  }

}
