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

import { ChordMap, Chord } from  './chord-map';

@Injectable()
export class ChordGameService {

  public selectCategory$ = new Subject();
  public selectedChord$ = new Subject()
    .map((x: string) => ChordMap.get(x));
 
  public chordList$ = 
    this.selectCategory$
       .startWith('easy')
       .map((difficulty: string) => {
          return ChordMap.toList().filter((x: Chord) => x.difficulty === difficulty)
      });

      

  constructor() {}

}
