import * as Immutable from 'immutable';

export const Difficulties = Immutable.Map({
    easy: 'easy', 
    medium: 'medium',
    hard: 'hard'
});

export interface Chord {
    id?: number;
    name: string;
    difficulty: string;
    notes: any;
    answers: any;
    scaleTones?: any;
    noteLetters?: any;
}

export const ChordMap = Immutable.OrderedMap({
    '1': {id: '1', name: "C Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "C Major", correct: true},{answer: "G Major",correct: false},{answer: "F Major",correct: false},{answer: "E Major",correct: false}],
      scaleTones: ["x",1,3,5,1,3], noteLetters: ["x","C","E","G","C","E"]
    },
    '2': {id: '2', name: "C Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 5,finger: 2},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1}],
      answers: [{answer: "C Major", correct: true},{answer: "G Major",correct: false},{answer: "F Major",correct: false},{answer: "E Major",correct: false}],
      scaleTones: ["x",1,5,1,3,5], noteLetters: ["x","C","G","C","E","G"]
    },
    '3': {id: '3', name: "G Major", difficulty: "easy", notes: [{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 3, finger: 4}],
      answers: [{answer: "G Major", correct: true},{answer: "C Major",correct: false},{answer: "F Major",correct: false},{answer: "E Major",correct: false}],
      scaleTones: [1,3,5,1,5,1], noteLetters: ["G","B","D","G","D","G"]
    },
    '4': {id: '4', name: "G Major", difficulty: "easy", notes: [{fret: 3, finger: 1},{fret: 5, finger: 3},{fret: 5,finger: 4},{fret: 4, finger: 2},{fret: 3, finger: 1},{fret: 3, finger: 1}],
      answers: [{answer: "G Major", correct: true},{answer: "C Major",correct: false},{answer: "F Major",correct: false},{answer: "E Major",correct: false}],
      scaleTones: [1,5,1,3,5,1], noteLetters: ["G","D","G","B","D","G"]
    },
    '5': {id: '5', name: "D Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: 2, finger: 2}],
      answers: [{answer: "D Major", correct: true},{answer: "G Major",correct: false},{answer: "F Major",correct: false},{answer: "E Major",correct: false}]
    },
    '6': {name: "A Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 2},{fret: 2, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "A Major", correct: true},{answer: "G Major",correct: false},{answer: "D Major",correct: false},{answer: "E Major",correct: false}]
    },
    '7': {name: "E Major", difficulty: "easy", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2,finger: 3},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "E Major", correct: true},{answer: "A Major",correct: false},{answer: "F Major",correct: false},{answer: "C Major",correct: false}]
    },
    '8': {name: "B Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 2},{fret: 4, finger: 3},{fret: 4, finger: 4},{fret: 2, finger: 1}],
      answers: [{answer: "B Major", correct: true},{answer: "A Major",correct: false},{answer: "F# Major",correct: false},{answer: "E Major",correct: false}]
    },
    '9': {name: "F# Major", difficulty: "easy", notes: [{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 4,finger: 4},{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "F# Major", correct: true},{answer: "B Major",correct: false},{answer: "F Major",correct: false},{answer: "E Major",correct: false}]
    },
    '10': {name: "C# Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 4, finger: 1},{fret: 6,finger: 2},{fret: 6, finger: 3},{fret: 6, finger: 4},{fret: 4, finger: 1}],
      answers: [{answer: "C# Major", correct: true},{answer: "C Major",correct: false},{answer: "F# Major",correct: false},{answer: "B Major",correct: false}]
    },
    '11': {name: "F Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "F Major", correct: true},{answer: "G Major",correct: false},{answer: "F# Major",correct: false},{answer: "Bb Major",correct: false}]
    },
    '12': {name: "F Major", difficulty: "easy", notes: [{fret: 1, finger: 1},{fret: 3, finger: 3},{fret: 3,finger: 4},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "F Major", correct: true},{answer: "G Major",correct: false},{answer: "F# Major",correct: false},{answer: "Bb Major",correct: false}]
    },
    '13': {name: "Bb Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 2},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "Bb Major", correct: true},{answer: "F Major",correct: false},{answer: "B Major",correct: false},{answer: "E Major",correct: false}]
    },
    '14': {name: "C minor", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 5,finger: 3},{fret: 5, finger: 4},{fret: 4, finger: 2},{fret: 3, finger: 1}],
      answers: [{answer: "C minor", correct: true},{answer: "G minor",correct: false},{answer: "B minor",correct: false},{answer: "F# minor",correct: false}]
    },
    '15': {name: "G minor", difficulty: "easy", notes: [{fret: 3, finger: 1},{fret: 5, finger: 3},{fret: 5,finger: 4},{fret: 3, finger: 1},{fret: 3, finger: 1},{fret: 3, finger: 1}],
      answers: [{answer: "G minor", correct: true},{answer: "F# minor",correct: false},{answer: "B minor",correct: false},{answer: "C minor",correct: false}]
    },
    '16': {name: "D minor", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 3, finger: 3},{fret: 1, finger: 1}],
      answers: [{answer: "D minor", correct: true},{answer: "A minor",correct: false},{answer: "B minor",correct: false},{answer: "E minor",correct: false}]
    },
    '17': {name: "A minor", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "A minor", correct: true},{answer: "E minor",correct: false},{answer: "C minor",correct: false},{answer: "D minor",correct: false}]
    },
    '18': {name: "E minor", difficulty: "easy", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2,finger: 3},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "E minor", correct: true},{answer: "A minor",correct: false},{answer: "B minor",correct: false},{answer: "D minor",correct: false}]
    },
    '19': {name: "B minor", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 3},{fret: 4, finger: 4},{fret: 3, finger: 2},{fret: 2, finger: 1}],
      answers: [{answer: "B minor", correct: true},{answer: "E minor",correct: false},{answer: "F# minor",correct: false},{answer: "A minor",correct: false}]
    },
    '20': {name: "F# minor", difficulty: "easy", notes: [{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 4,finger: 4},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "F# minor", correct: true},{answer: "F minor",correct: false},{answer: "B minor",correct: false},{answer: "A minor",correct: false}]
    },
    '21': {name: "C# minor", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 4, finger: 1},{fret: 6,finger: 3},{fret: 6, finger: 4},{fret: 5, finger: 2},{fret: 4, finger: 1}],
      answers: [{answer: "C# minor", correct: true},{answer: "F# minor",correct: false},{answer: "B minor",correct: false},{answer: "G minor",correct: false}]
    },
    '22': {name: "F minor", difficulty: "easy", notes: [{fret: 1, finger: 1},{fret: 3, finger: 3},{fret: 3,finger: 4},{fret: 1, finger: 1},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "F minor", correct: true},{answer: "F# minor",correct: false},{answer: "B minor",correct: false},{answer: "A minor",correct: false}]
    },
    '23': {name: "C2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1},{fret: 3, finger: 1}],
      answers: [{answer: "C2", correct: true},{answer: "Csus",correct: false},{answer: "CMaj7",correct: false},{answer: "Caug",correct: false}]
    },
    '24': {name: "G2", difficulty: "medium", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4}],
      answers: [{answer: "G2", correct: true},{answer: "Gsus",correct: false},{answer: "GMaj7",correct: false},{answer: "Gaug",correct: false}]
    },
    '25': {name: "D2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "D2", correct: true},{answer: "Dsus",correct: false},{answer: "DMaj7",correct: false},{answer: "Ddim",correct: false}]
    },
    '26': {name: "A2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "A2", correct: true},{answer: "Asus",correct: false},{answer: "AMaj7",correct: false},{answer: "Adim",correct: false}]
    },
    '27': {name: "B2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 4, finger: 4},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "B2", correct: true},{answer: "Bsus",correct: false},{answer: "BMaj7",correct: false},{answer: "B7",correct: false}]
    },
    '28': {name: "F2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "F2", correct: true},{answer: "Fsus",correct: false},{answer: "FMaj7",correct: false},{answer: "F7",correct: false}]
    },
    '29': {name: "F2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 1},{fret: 5, finger: 3},{fret: 6, finger: 4},{fret: 3, finger: 1}],
      answers: [{answer: "F2", correct: true},{answer: "Fsus",correct: false},{answer: "FMaj7",correct: false},{answer: "F7",correct: false}]
    },
    '30': {name: "Bb2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Bb2", correct: true},{answer: "Bbsus",correct: false},{answer: "BbMaj7",correct: false},{answer: "Bb7",correct: false}]
    },
    '40': {name: "Eb2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 3, finger: 3},{fret: 4, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "Eb2", correct: true},{answer: "Ebsus",correct: false},{answer: "EbMaj7",correct: false},{answer: "Eb7",correct: false}]
    },
    '41': {name: "Cadd9", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 3, finger: 4}],
      answers: [{answer: "Cadd9", correct: true},{answer: "Csus",correct: false},{answer: "CMaj7",correct: false},{answer: "C7",correct: false}]
    },
    '42': {name: "Gadd9", difficulty: "medium", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0, finger: 0},{fret: 3, finger: 4}],
      answers: [{answer: "Gadd9", correct: true},{answer: "Gsus",correct: false},{answer: "GMaj7",correct: false},{answer: "G7",correct: false}]
    },
    '43': {name: "Dadd9", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 4},{fret: 4, finger: 3},{fret: 2, finger: 1},{fret: 3, finger: 2},{fret: 0, finger: 0}],
      answers: [{answer: "Dadd9", correct: true},{answer: "Dsus",correct: false},{answer: "DMaj7",correct: false},{answer: "Daug",correct: false}]
    },
    '44': {name: "Eadd9", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 2, finger: 4}],
      answers: [{answer: "Eadd9", correct: true},{answer: "Esus",correct: false},{answer: "EMaj7",correct: false},{answer: "E7",correct: false}]
    },
    '45': {name: "Fadd9", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 3, finger: 4}],
      answers: [{answer: "Fadd9", correct: true},{answer: "Fsus",correct: false},{answer: "FMaj7",correct: false},{answer: "F7",correct: false}]
    },
    '46': {name: "Csus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 5,finger: 2},{fret: 5, finger: 3},{fret: 6, finger: 4},{fret: 3, finger: 1}],
      answers: [{answer: "Csus", correct: true},{answer: "Cadd9",correct: false},{answer: "CMaj7",correct: false},{answer: "Cdim",correct: false}]
    },
    '47': {name: "Gsus", difficulty: "medium", notes: [{fret: 3, finger: 3},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 3, finger: 4}],
      answers: [{answer: "Gsus", correct: true},{answer: "G2",correct: false},{answer: "GMaj7",correct: false},{answer: "Gdim",correct: false}]
    },
    '48': {name: "Dsus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4}],
      answers: [{answer: "Dsus", correct: true},{answer: "D2",correct: false},{answer: "DMaj7",correct: false},{answer: "Daug",correct: false}]
    },
    '49': {name: "Asus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 2},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "Asus", correct: true},{answer: "A2",correct: false},{answer: "AMaj7",correct: false},{answer: "Aaug",correct: false}]
    },
    '50': {name: "Esus", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2,finger: 3},{fret: 2, finger: 4},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "Esus", correct: true},{answer: "Eadd9",correct: false},{answer: "EMaj7",correct: false},{answer: "Eadd9",correct: false}]
    },
    '51': {name: "Bsus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 2},{fret: 4, finger: 3},{fret: 5, finger: 4},{fret: 2, finger: 1}],
      answers: [{answer: "Bsus", correct: true},{answer: "B7",correct: false},{answer: "BMaj7",correct: false},{answer: "B2",correct: false}]
    },
    '52': {name: "F#sus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 4,finger: 3},{fret: 4, finger: 4},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "F#sus", correct: true},{answer: "F#2",correct: false},{answer: "F#Maj7",correct: false},{answer: "F#add9",correct: false}]
    },
    '53': {name: "Fsus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Fsus", correct: true},{answer: "F2",correct: false},{answer: "FMaj7",correct: false},{answer: "Fadd9",correct: false}]
    },
    '54': {name: "Bbsus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 2},{fret: 3, finger: 3},{fret: 4, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "Bbsus", correct: true},{answer: "Bb2",correct: false},{answer: "BbMaj7",correct: false},{answer: "Bb7",correct: false}]
    },
    '55': {name: "Ebsus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 3, finger: 2},{fret: 4, finger: 3},{fret: 4, finger: 4}],
      answers: [{answer: "Ebsus", correct: true},{answer: "Eb2",correct: false},{answer: "EbMaj7",correct: false},{answer: "Eb7",correct: false}]
    },
    '56': {name: "C7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 3, finger: 4},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "C7", correct: true},{answer: "Cdim",correct: false},{answer: "CMaj7",correct: false},{answer: "Caug",correct: false}]
    },
    '57': {name: "D7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 2, finger: 3}],
      answers: [{answer: "D7", correct: true},{answer: "Ddim",correct: false},{answer: "DMaj7",correct: false},{answer: "Daug",correct: false}]
    },
    '58': {name: "D7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 3},{fret: 4,finger: 2},{fret: 5, finger: 4},{fret: 3, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "D7", correct: true},{answer: "Dsus",correct: false},{answer: "DMaj7",correct: false},{answer: "Daug",correct: false}]
    },
    '59': {name: "A7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "A7", correct: true},{answer: "Adim",correct: false},{answer: "AMaj7",correct: false},{answer: "Aaug",correct: false}]
    },
    '60': {name: "A7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 3, finger: 2}],
      answers: [{answer: "A7", correct: true},{answer: "Adim",correct: false},{answer: "AMaj7",correct: false},{answer: "Aaug",correct: false}]
    },
    '61': {name: "E7", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "E7", correct: true},{answer: "Edim",correct: false},{answer: "EMaj7",correct: false},{answer: "Esus",correct: false}]
    },
    '62': {name: "B7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 3},{fret: 2, finger: 1},{fret: 4, finger: 4},{fret: 2, finger: 1}],
      answers: [{answer: "B7", correct: true},{answer: "B2",correct: false},{answer: "BMaj7",correct: false},{answer: "Baug",correct: false}]
    },
    '63': {name: "B7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 0, finger: 0},{fret: 2, finger: 4}],
      answers: [{answer: "B7", correct: true},{answer: "Bsus",correct: false},{answer: "BMaj7",correct: false},{answer: "B2",correct: false}]
    },
    '64': {name: "F#7", difficulty: "medium", notes: [{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 2,finger: 1},{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "F#7", correct: true},{answer: "F#dim",correct: false},{answer: "F#Maj7",correct: false},{answer: "F#sus",correct: false}]
    },
    '65': {name: "F7", difficulty: "medium", notes: [{fret: 1, finger: 1},{fret: -1, finger: "x"},{fret: 1,finger: 2},{fret: 2, finger: 4},{fret: 1, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "F7", correct: true},{answer: "F2",correct: false},{answer: "FMaj7",correct: false},{answer: "Fsus",correct: false}]
    },
    '66': {name: "Bb7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 3},{fret: 1, finger: 1},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "Bb7", correct: true},{answer: "Bb2",correct: false},{answer: "BbMaj7",correct: false},{answer: "Bbsus",correct: false}]
    },
    '67': {name: "Eb7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 3, finger: 3},{fret: 2, finger: 2},{fret: 3, finger: 4}],
      answers: [{answer: "Eb7", correct: true},{answer: "Eb2",correct: false},{answer: "Ebsus",correct: false},{answer: "EbMaj7",correct: false}]
    },
    '68': {name: "CMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "CMaj7", correct: true},{answer: "Cdim",correct: false},{answer: "C7",correct: false},{answer: "Csus",correct: false}]
    },
    '69': {name: "GMaj7", difficulty: "medium", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 2, finger: 1}],
      answers: [{answer: "GMaj7", correct: true},{answer: "Gdim",correct: false},{answer: "G7",correct: false},{answer: "Gsus",correct: false}]
    },
    '70': {name: "GMaj7", difficulty: "medium", notes: [{fret: 3, finger: 1},{fret: -1, finger: "x"},{fret: 4,finger: 3},{fret: 4, finger: 4},{fret: 3, finger: 2},{fret: -1, finger: "x"}],
      answers: [{answer: "GMaj7", correct: true},{answer: "Gaug",correct: false},{answer: "G7",correct: false},{answer: "Gsus",correct: false}]
    },
    '71': {name: "GMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 5,finger: 4},{fret: 4, finger: 3},{fret: 3, finger: 2},{fret: 2, finger: 1}],
      answers: [{answer: "GMaj7", correct: true},{answer: "Gmin7",correct: false},{answer: "G7",correct: false},{answer: "Gsus",correct: false}]
    },
    '72': {name: "DMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "DMaj7", correct: true},{answer: "Daug",correct: false},{answer: "D7",correct: false},{answer: "Dsus",correct: false}]
    },
    '73': {name: "DMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 4},{fret: 4,finger: 3},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "DMaj7", correct: true},{answer: "Dadd9",correct: false},{answer: "D7",correct: false},{answer: "Dsus",correct: false}]
    },
    '74': {name: "AMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 1, finger: 1},{fret: 2, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "AMaj7", correct: true},{answer: "Adim",correct: false},{answer: "A7",correct: false},{answer: "A2",correct: false}]
    },
    '75': {name: "EMaj7", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 1,finger: 1},{fret: 1, finger: 2},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "EMaj7", correct: true},{answer: "Edim",correct: false},{answer: "E7",correct: false},{answer: "Esus",correct: false}]
    },
    '76': {name: "BMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 3},{fret: 3, finger: 2},{fret: 4, finger: 4},{fret: 2, finger: 1}],
      answers: [{answer: "BMaj7", correct: true},{answer: "Bdim",correct: false},{answer: "B7",correct: false},{answer: "Baug",correct: false}]
    },
    '77': {name: "F#Maj7", difficulty: "medium", notes: [{fret: 2, finger: 1},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: 2, finger: 2},{fret: -1, finger: "x"}],
      answers: [{answer: "F#Maj7", correct: true},{answer: "F#dim",correct: false},{answer: "F#7",correct: false},{answer: "F#sus",correct: false}]
    },
    '78': {name: "FMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "FMaj7", correct: true},{answer: "F2",correct: false},{answer: "F7",correct: false},{answer: "Fsus",correct: false}]
    },
    '79': {name: "FMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 3},{fret: 5, finger: 3}],
      answers: [{answer: "FMaj7", correct: true},{answer: "F2",correct: false},{answer: "F7",correct: false},{answer: "Fsus",correct: false}]
    },
    '80': {name: "BbMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 3},{fret: 2, finger: 2},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "BbMaj7", correct: true},{answer: "Bb2",correct: false},{answer: "Bb7",correct: false},{answer: "Bbsus",correct: false}]
    },
    '81': {name: "EbMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 3},{fret: 3, finger: 3}],
      answers: [{answer: "EbMaj7", correct: true},{answer: "Eb2",correct: false},{answer: "Ebsus",correct: false},{answer: "Eb7",correct: false}]
    },
    '82': {name: "Cdim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 4,finger: 2},{fret: 5, finger: 4},{fret: 4, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "Cdim", correct: true},{answer: "Cmin7",correct: false},{answer: "C7",correct: false},{answer: "Caug",correct: false}]
    },
    '83': {name: "Gdim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 5,finger: 4},{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Gdim", correct: true},{answer: "G7",correct: false},{answer: "Gmin7",correct: false},{answer: "Gaug",correct: false}]
    },
    '84': {name: "Ddim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 3, finger: 3},{fret: 1, finger: 1}],
      answers: [{answer: "Ddim", correct: true},{answer: "Dmin7",correct: false},{answer: "D7",correct: false},{answer: "Daug",correct: false}]
    },
    '85': {name: "Adim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 1, finger: 2},{fret: -1, finger: "x"}],
      answers: [{answer: "Adim", correct: true},{answer: "Amin7",correct: false},{answer: "A7",correct: false},{answer: "Aaug",correct: false}]
    },
    '86': {name: "Edim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 2,finger: 1},{fret: 3, finger: 2},{fret: 5, finger: 4},{fret: 3, finger: 3}],
      answers: [{answer: "Edim", correct: true},{answer: "EMaj7",correct: false},{answer: "E7",correct: false},{answer: "Esus",correct: false}]
    },
    '87': {name: "Edim", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: -1, finger: "x"},{fret: -1, finger: "x"}],
      answers: [{answer: "Edim", correct: true},{answer: "EMaj7",correct: false},{answer: "E7",correct: false},{answer: "Esus",correct: false}]
    },
    '88': {name: "Bdim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 3,finger: 2},{fret: 4, finger: 4},{fret: 3, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "Bdim", correct: true},{answer: "Baug",correct: false},{answer: "B7",correct: false},{answer: "B2",correct: false}]
    },
    '89': {name: "F#dim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 4,finger: 4},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "F#dim", correct: true},{answer: "F#min7",correct: false},{answer: "F#7",correct: false},{answer: "F#sus",correct: false}]
    },
    '90': {name: "Caug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 1, finger: 1},{fret: 1, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Caug", correct: true},{answer: "C7",correct: false},{answer: "CMaj7",correct: false},{answer: "Cdim",correct: false}]
    },
    '91': {name: "Gaug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 4, finger: 1},{fret: 4, finger: 2},{fret: -1, finger: "x"}],
      answers: [{answer: "Gaug", correct: true},{answer: "Gsus",correct: false},{answer: "G7",correct: false},{answer: "Gdim",correct: false}]
    },
    '92': {name: "Gaug", difficulty: "medium", notes: [{fret: 3, finger: 3},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 4}],
      answers: [{answer: "Gaug", correct: true},{answer: "GMaj7",correct: false},{answer: "G7",correct: false},{answer: "Gdim",correct: false}]
    },
    '93': {name: "Daug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 3, finger: 2},{fret: 3, finger: 3},{fret: 2, finger: 1}],
      answers: [{answer: "Daug", correct: true},{answer: "Dsus",correct: false},{answer: "DMaj7",correct: false},{answer: "Ddim",correct: false}]
    },
    '94': {name: "Aaug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 3, finger: 4},{fret: 2, finger: 2},{fret: 2, finger: 3},{fret: 1, finger: 1}],
      answers: [{answer: "Aaug", correct: true},{answer: "Asus",correct: false},{answer: "A7",correct: false},{answer: "Adim",correct: false}]
    },
    '95': {name: "Eaug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 1, finger: 2},{fret: 0, finger: 0}],
      answers: [{answer: "Eaug", correct: true},{answer: "Esus",correct: false},{answer: "E7",correct: false},{answer: "Edim",correct: false}]
    },
    '96': {name: "Baug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 4}],
      answers: [{answer: "Baug", correct: true},{answer: "Bdim",correct: false},{answer: "B7",correct: false},{answer: "B2",correct: false}]
    },
    '97': {name: "Cmin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 1,finger: 1},{fret: 3, finger: 4},{fret: 1, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Cmin7", correct: true},{answer: "Cdim",correct: false},{answer: "CMaj7",correct: false},{answer: "Caug",correct: false}]
    },
    '98': {name: "Gmin7", difficulty: "medium", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 3, finger: 3},{fret: 3, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "Gmin7", correct: true},{answer: "GMaj7",correct: false},{answer: "G7",correct: false},{answer: "Gdim",correct: false}]
    },
    '99': {name: "Dmin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Dmin7", correct: true},{answer: "Ddim",correct: false},{answer: "DMaj7",correct: false},{answer: "Daug",correct: false}]
    },
    '100': {name: "Amin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "Amin7", correct: true},{answer: "Adim",correct: false},{answer: "AMaj7",correct: false},{answer: "Asus",correct: false}]
    },
    '101': {name: "Emin7", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "Emin7", correct: true},{answer: "Edim",correct: false},{answer: "EMaj7",correct: false},{answer: "Esus",correct: false}]
    },
    '102': {name: "Emin7", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 3, finger: 4}],
      answers: [{answer: "Emin7", correct: true},{answer: "Edim",correct: false},{answer: "EMaj7",correct: false},{answer: "Eaug",correct: false}]
    },
    '103': {name: "Bmin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 3},{fret: 2, finger: 1},{fret: 3, finger: 2},{fret: 2, finger: 1}],
      answers: [{answer: "Bmin7", correct: true},{answer: "Bdim",correct: false},{answer: "BMaj7",correct: false},{answer: "B2",correct: false}]
    },
    '104': {name: "Bmin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 2, finger: 3},{fret: 0, finger: 0},{fret: 2, finger: 4}],
      answers: [{answer: "Bmin7", correct: true},{answer: "B2",correct: false},{answer: "BMaj7",correct: false},{answer: "Bsus",correct: false}]
    },
    '105': {name: "F#min7", difficulty: "medium", notes: [{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 2,finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "F#min7", correct: true},{answer: "F#7",correct: false},{answer: "F#dim",correct: false},{answer: "F#sus",correct: false}]
    },
    '106': {name: "Fmin7", difficulty: "medium", notes: [{fret: 1, finger: 1},{fret: 3, finger: 3},{fret: 1,finger: 1},{fret: 1, finger: 1},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Fmin7", correct: true},{answer: "F2",correct: false},{answer: "FMaj7",correct: false},{answer: "Fsus",correct: false}]
    },
    '107': {name: "Bbmin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 3},{fret: 1, finger: 1},{fret: 2, finger: 2},{fret: 1, finger: 1}],
      answers: [{answer: "Bbmin7", correct: true},{answer: "Bb2",correct: false},{answer: "BbMaj7",correct: false},{answer: "Bbsus",correct: false}]
    },
    '108': {name: "G7sus", difficulty: "hard", notes: [{fret: 3, finger: 3},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "G7sus", correct: true},{answer: "GMaj9",correct: false},{answer: "G6",correct: false},{answer: "G9",correct: false}]
    },
    '109': {name: "A7sus", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "A7sus", correct: true},{answer: "A9",correct: false},{answer: "A6",correct: false},{answer: "Amin11",correct: false}]
    },
    '110': {name: "E7sus", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 2, finger: 3},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "E7sus", correct: true},{answer: "E6",correct: false},{answer: "EMaj9",correct: false},{answer: "E9",correct: false}]
    },
    '111': {name: "C7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 4,finger: 2},{fret: 3, finger: 1},{fret: 5, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "C7b5", correct: true},{answer: "C7b9",correct: false},{answer: "Cdim7",correct: false},{answer: "C9",correct: false}]
    },
    '112': {name: "G7b5", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 4, finger: 4},{fret: 2, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "G7b5", correct: true},{answer: "G7b9",correct: false},{answer: "G7#9",correct: false},{answer: "G7#5",correct: false}]
    },
    '113': {name: "D7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 1, finger: 2},{fret: 2, finger: 3}],
      answers: [{answer: "D7b5", correct: true},{answer: "D7b9",correct: false},{answer: "Ddim7",correct: false},{answer: "D7#5",correct: false}]
    },
    '114': {name: "A7b5", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 6, finger: 4},{fret: 4, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "A7b5", correct: true},{answer: "A11",correct: false},{answer: "A9",correct: false},{answer: "A7#5",correct: false}]
    },
    '115': {name: "F7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 1},{fret: 4, finger: 2},{fret: 4, finger: 3},{fret: 5, finger: 4}],
      answers: [{answer: "F7b5", correct: true},{answer: "F9",correct: false},{answer: "F7#9",correct: false},{answer: "F7#5",correct: false}]
    },
    '116': {name: "Bb7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 2,finger: 2},{fret: 1, finger: 1},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Bb7b5", correct: true},{answer: "Bb7b9",correct: false},{answer: "Bbdim7",correct: false},{answer: "Bb7#5",correct: false}]
    },
    '117': {name: "C7#5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: -1,finger: "x"},{fret: 3, finger: 2},{fret: 5, finger: 4},{fret: 4, finger: 3}],
      answers: [{answer: "C7#5", correct: true},{answer: "C7b9",correct: false},{answer: "Cdim7",correct: false},{answer: "C7b5",correct: false}]
    },
    '118': {name: "D7#5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 5, finger: 3},{fret: -1, finger: "x"},{fret: 6, finger: 4}],
      answers: [{answer: "D7#5", correct: true},{answer: "D7b9",correct: false},{answer: "Ddim7",correct: false},{answer: "D7b5",correct: false}]
    },
    '119': {name: "F7#5", difficulty: "hard", notes: [{fret: 1, finger: 1},{fret: -1, finger: "x"},{fret: 1,finger: 2},{fret: 2, finger: 3},{fret: 2, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "F7#5", correct: true},{answer: "F9",correct: false},{answer: "F7#9",correct: false},{answer: "FMaj9",correct: false}]
    },
    '120': {name: "G7#5", difficulty: "hard", notes: [{fret: 3, finger: 1},{fret: -1, finger: "x"},{fret: 3,finger: 2},{fret: 4, finger: 3},{fret: 4, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "G7#5", correct: true},{answer: "G7b9",correct: false},{answer: "G7#9",correct: false},{answer: "G7b5",correct: false}]
    },
    '121': {name: "A7#5", difficulty: "hard", notes: [{fret: 5, finger: 1},{fret: -1, finger: "x"},{fret: 5,finger: 2},{fret: 6, finger: 3},{fret: 6, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "A7#5", correct: true},{answer: "A11",correct: false},{answer: "A9",correct: false},{answer: "A7b5",correct: false}]
    },
    '122': {name: "A7#5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 3,finger: 2},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 3, finger: 3}],
      answers: [{answer: "A7#5", correct: true},{answer: "A6",correct: false},{answer: "A9",correct: false},{answer: "A7#9",correct: false}]
    },
    '123': {name: "A7#5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 5,finger: 1},{fret: 6, finger: 2},{fret: 6, finger: 3},{fret: 5, finger: 1}],
      answers: [{answer: "A7#5", correct: true},{answer: "A7sus",correct: false},{answer: "A9",correct: false},{answer: "A7b5",correct: false}]
    },
    '124': {name: "Bb7#5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: -1,finger: "x"},{fret: 1, finger: 2},{fret: 3, finger: 4},{fret: 2, finger: 3}],
      answers: [{answer: "Bb7#5", correct: true},{answer: "Bb7b9",correct: false},{answer: "Bbdim7",correct: false},{answer: "Bb7b5",correct: false}]
    },
    '125': {name: "C6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 4},{fret: 2,finger: 2},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "C6", correct: true},{answer: "C7b5",correct: false},{answer: "C7b9",correct: false},{answer: "C9",correct: false}]
    },
    '126': {name: "G6", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 2,finger: 1},{fret: 4, finger: 4},{fret: 3, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "G6", correct: true},{answer: "G7b9",correct: false},{answer: "G7#9",correct: false},{answer: "G7b5",correct: false}]
    },
    '127': {name: "G6", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "G6", correct: true},{answer: "G7b9",correct: false},{answer: "G7#9",correct: false},{answer: "G7b5",correct: false}]
    },
    '128': {name: "A6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "A6", correct: true},{answer: "A9",correct: false},{answer: "A7sus",correct: false},{answer: "A11",correct: false}]
    },
    '129': {name: "A6", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 4,finger: 1},{fret: 6, finger: 4},{fret: 5, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "A6", correct: true},{answer: "A9",correct: false},{answer: "A7#9",correct: false},{answer: "A11",correct: false}]
    },
    '130': {name: "E6", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2,finger: 3},{fret: 1, finger: 1},{fret: 2, finger: 4},{fret: 0, finger: 0}],
      answers: [{answer: "E6", correct: true},{answer: "E7sus",correct: false},{answer: "EMaj9",correct: false},{answer: "E9",correct: false}]
    },
    '131': {name: "F6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 1},{fret: 5, finger: 3},{fret: 3, finger: 1},{fret: 5, finger: 4}],
      answers: [{answer: "F6", correct: true},{answer: "F7#5",correct: false},{answer: "F11",correct: false},{answer: "F9",correct: false}]
    },
    '132': {name: "F6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 1},{fret: 2, finger: 2},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "F6", correct: true},{answer: "F7#5",correct: false},{answer: "F11",correct: false},{answer: "F9",correct: false}]
    },
    '133': {name: "C6/9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "C6/9", correct: true},{answer: "C9",correct: false},{answer: "C7b9",correct: false},{answer: "C11",correct: false}]
    },
    '134': {name: "G6/9", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 2,finger: 1},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "G6/9", correct: true},{answer: "G7b9",correct: false},{answer: "G7#9",correct: false},{answer: "G13",correct: false}]
    },
    '135': {name: "D6/9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 4, finger: 1},{fret: 5, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "D6/9", correct: true},{answer: "D7b5",correct: false},{answer: "D7b9",correct: false},{answer: "Dm7b5",correct: false}]
    },
    '136': {name: "A6/9", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 4,finger: 1},{fret: 4, finger: 1},{fret: 5, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "A6/9", correct: true},{answer: "AMaj9",correct: false},{answer: "A9",correct: false},{answer: "Amin11",correct: false}]
    },
    '137': {name: "C9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "C9", correct: true},{answer: "C7b5",correct: false},{answer: "C7b9",correct: false},{answer: "Cdim7",correct: false}]
    },
    '138': {name: "G9", difficulty: "hard", notes: [{fret: 3, finger: 3},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 1}],
      answers: [{answer: "G9", correct: true},{answer: "GMaj9",correct: false},{answer: "G11",correct: false},{answer: "G7sus",correct: false}]
    },
    '139': {name: "D9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "D9", correct: true},{answer: "D7b5",correct: false},{answer: "D7b9",correct: false},{answer: "Dm7b5",correct: false}]
    },
    '140': {name: "D9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "D9", correct: true},{answer: "D7b5",correct: false},{answer: "D7b9",correct: false},{answer: "Dm7b5",correct: false}]
    },
    '141': {name: "A9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 4, finger: 3},{fret: 2, finger: 1},{fret: 3, finger: 2}],
      answers: [{answer: "A9", correct: true},{answer: "A11",correct: false},{answer: "A6",correct: false},{answer: "Amin6",correct: false}]
    },
    '142': {name: "A9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "A9", correct: true},{answer: "A7sus",correct: false},{answer: "A6",correct: false},{answer: "Amin11",correct: false}]
    },
    '143': {name: "E9", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 2, finger: 4}],
      answers: [{answer: "E9", correct: true},{answer: "E7sus",correct: false},{answer: "EMaj9",correct: false},{answer: "E11",correct: false}]
    },
    '144': {name: "B9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 2, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "B9", correct: true},{answer: "B7#9",correct: false},{answer: "B7b9",correct: false},{answer: "BMaj9",correct: false}]
    },
    '145': {name: "F9", difficulty: "hard", notes: [{fret: 1, finger: 1},{fret: -1, finger: "x"},{fret: 1,finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 3},{fret: 1, finger: 4}],
      answers: [{answer: "F9", correct: true},{answer: "F7#5",correct: false},{answer: "F7#9",correct: false},{answer: "FMaj9",correct: false}]
    },
    '146': {name: "Eb9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 1, finger: 2}],
      answers: [{answer: "Eb9", correct: true},{answer: "Ebdim7",correct: false},{answer: "EbMaj9",correct: false},{answer: "Eb11",correct: false}]
    },
    '147': {name: "CMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 4, finger: 4},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "CMaj9", correct: true},{answer: "C7b5",correct: false},{answer: "C7b9",correct: false},{answer: "C9",correct: false}]
    },
    '148': {name: "GMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 2, finger: 1},{fret: 3, finger: 2},{fret: 2, finger: 1}],
      answers: [{answer: "GMaj9", correct: true},{answer: "G7sus",correct: false},{answer: "G7b9",correct: false},{answer: "G11",correct: false}]
    },
    '149': {name: "GMaj9", difficulty: "hard", notes: [{fret: 3, finger: 3},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 2, finger: 1}],
      answers: [{answer: "GMaj9", correct: true},{answer: "G9",correct: false},{answer: "G11",correct: false},{answer: "GMaj11",correct: false}]
    },
    '150': {name: "DMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 6, finger: 4},{fret: 5, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "DMaj9", correct: true},{answer: "D7b5",correct: false},{answer: "DMaj11",correct: false},{answer: "D9",correct: false}]
    },
    '151': {name: "AMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "AMaj9", correct: true},{answer: "A9",correct: false},{answer: "AMaj11",correct: false},{answer: "A11",correct: false}]
    },
    '152': {name: "EMaj9", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 1,finger: 1},{fret: 1, finger: 2},{fret: 0, finger: 0},{fret: 2, finger: 4}],
      answers: [{answer: "EMaj9", correct: true},{answer: "E9",correct: false},{answer: "E6",correct: false},{answer: "E11",correct: false}]
    },
    '153': {name: "BMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 3, finger: 4},{fret: 2, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "BMaj9", correct: true},{answer: "B7#9",correct: false},{answer: "B11",correct: false},{answer: "B9",correct: false}]
    },
    '154': {name: "FMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "FMaj9", correct: true},{answer: "F6",correct: false},{answer: "F11",correct: false},{answer: "F9",correct: false}]
    },
    '155': {name: "EbMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 0, finger: 0},{fret: 3, finger: 4},{fret: 1, finger: 2}],
      answers: [{answer: "EbMaj9", correct: true},{answer: "Ebdim7",correct: false},{answer: "Eb9",correct: false},{answer: "Eb11",correct: false}]
    },
    '156': {name: "Cmin9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 1,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Cmin9", correct: true},{answer: "Cm7b5",correct: false},{answer: "C7b9",correct: false},{answer: "C9",correct: false}]
    },
    '157': {name: "Dmin9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 3,finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Dmin9", correct: true},{answer: "Dm7b5",correct: false},{answer: "D7#9",correct: false},{answer: "Dmin11",correct: false}]
    },
    '158': {name: "Emin9", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 2, finger: 3}],
      answers: [{answer: "Emin9", correct: true},{answer: "E9",correct: false},{answer: "Emin11",correct: false},{answer: "Em7b5",correct: false}]
    },
    '159': {name: "Emin9", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 4,finger: 4},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "Emin9", correct: true},{answer: "Emin6",correct: false},{answer: "Emin11",correct: false},{answer: "Em7b5",correct: false}]
    },
    '160': {name: "C7b9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 2, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "C7b9", correct: true},{answer: "C7#5",correct: false},{answer: "C9",correct: false},{answer: "C7b5",correct: false}]
    },
    '161': {name: "G7b9", difficulty: "hard", notes: [{fret: 3, finger: 3},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "G7b9", correct: true},{answer: "G9",correct: false},{answer: "G11",correct: false},{answer: "Gdim7",correct: false}]
    },
    '162': {name: "D7b9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 5, finger: 3},{fret: 4, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "D7b9", correct: true},{answer: "D7#5",correct: false},{answer: "D9",correct: false},{answer: "Dm7b5",correct: false}]
    },
    '163': {name: "B7b9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "B7b9", correct: true},{answer: "B7#5",correct: false},{answer: "B9",correct: false},{answer: "B7b5",correct: false}]
    },
    '164': {name: "F7b9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 2},{fret: 2, finger: 1},{fret: 4, finger: 4},{fret: 2, finger: 1}],
      answers: [{answer: "F7b9", correct: true},{answer: "F9",correct: false},{answer: "F7#9",correct: false},{answer: "FMaj9",correct: false}]
    },
    '165': {name: "Bb7b9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 0,finger: 0},{fret: 1, finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 3}],
      answers: [{answer: "Bb7b9", correct: true},{answer: "Bb7#5",correct: false},{answer: "Bbm7b5",correct: false},{answer: "Bb7b5",correct: false}]
    },
    '166': {name: "C7#9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 4, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "C7#9", correct: true},{answer: "C7#5",correct: false},{answer: "C7b9",correct: false},{answer: "Cm7b5",correct: false}]
    },
    '167': {name: "G7#9", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"},{fret: -1, finger: "x"}],
      answers: [{answer: "G7#9", correct: true},{answer: "G9",correct: false},{answer: "G11",correct: false},{answer: "G7b9",correct: false}]
    },
    '168': {name: "D7#9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 5, finger: 3},{fret: 6, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "D7#9", correct: true},{answer: "D7#5",correct: false},{answer: "D7b9",correct: false},{answer: "Dm7b5",correct: false}]
    },
    '169': {name: "A7#9", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: 4, finger: 1},{fret: 5,finger: 3},{fret: 5, finger: 4},{fret: -1, finger: "x"},{fret: -1, finger: "x"}],
      answers: [{answer: "A7#9", correct: true},{answer: "A9",correct: false},{answer: "A6",correct: false},{answer: "Amin11",correct: false}]
    },
    '170': {name: "B7#9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "B7#9", correct: true},{answer: "B7b5",correct: false},{answer: "B7b9",correct: false},{answer: "Bdim7",correct: false}]
    },
    '171': {name: "F7#9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 2},{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 4, finger: 4}],
      answers: [{answer: "F7#9", correct: true},{answer: "F9",correct: false},{answer: "F7b9",correct: false},{answer: "FMaj9",correct: false}]
    },
    '172': {name: "Cm7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 4,finger: 3},{fret: 3, finger: 2},{fret: 4, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Cm7b5", correct: true},{answer: "C7b5",correct: false},{answer: "C9",correct: false},{answer: "Cdim7",correct: false}]
    },
    '173': {name: "Gm7b5", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: 2, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Gm7b5", correct: true},{answer: "G7b9",correct: false},{answer: "G7#9",correct: false},{answer: "Gdim7",correct: false}]
    },
    '174': {name: "Dm7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Dm7b5", correct: true},{answer: "D7#5",correct: false},{answer: "D7#9",correct: false},{answer: "Ddim7",correct: false}]
    },
    '175': {name: "Dm7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 1},{fret: 6,finger: 3},{fret: 5, finger: 2},{fret: 6, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Dm7b5", correct: true},{answer: "D7#5",correct: false},{answer: "D7#9",correct: false},{answer: "Ddim7",correct: false}]
    },
    '176': {name: "Am7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 1,finger: 1},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 3, finger: 4}],
      answers: [{answer: "Am7b5", correct: true},{answer: "A11",correct: false},{answer: "Amin6",correct: false},{answer: "A7sus",correct: false}]
    },
    '177': {name: "Am7b5", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 5, finger: 4},{fret: 4, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Am7b5", correct: true},{answer: "A9",correct: false},{answer: "Amin11",correct: false},{answer: "A7sus",correct: false}]
    },
    '178': {name: "Em7b5", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "Em7b5", correct: true},{answer: "Emin6",correct: false},{answer: "Emin11",correct: false},{answer: "Emin9",correct: false}]
    },
    '179': {name: "Bbm7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 2,finger: 3},{fret: 1, finger: 2},{fret: 2, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Bbm7b5", correct: true},{answer: "Bb7#5",correct: false},{answer: "Bb7b9",correct: false},{answer: "Bbdim7",correct: false}]
    },
    '180': {name: "Cdim7", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 4,finger: 3},{fret: 2, finger: 1},{fret: 4, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Cdim7", correct: true},{answer: "C7b5",correct: false},{answer: "C9",correct: false},{answer: "Cm7b5",correct: false}]
    },
    '181': {name: "Gdim7", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 2, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Gdim7", correct: true},{answer: "Gmin6",correct: false},{answer: "Gm7b5",correct: false},{answer: "Gmin11",correct: false}]
    },
    '182': {name: "Ddim7", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 6,finger: 3},{fret: 4, finger: 1},{fret: 6, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Ddim7", correct: true},{answer: "D7b5",correct: false},{answer: "D9",correct: false},{answer: "Dm7b5",correct: false}]
    },
    '183': {name: "Ddim7", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 1, finger: 2}],
      answers: [{answer: "Ddim7", correct: true},{answer: "Dmin9",correct: false},{answer: "D11",correct: false},{answer: "Dmin6",correct: false}]
    },
    '184': {name: "Bbdim7", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "Bbdim7", correct: true},{answer: "Bb7b9",correct: false},{answer: "Bbm7b5",correct: false},{answer: "Bb7#5",correct: false}]
    },
    '185': {name: "Ebdim7", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 1, finger: 2},{fret: 2, finger: 4}],
      answers: [{answer: "Ebdim7", correct: true},{answer: "Eb9",correct: false},{answer: "EbMaj9",correct: false},{answer: "Eb11",correct: false}]
    },
    '186': {name: "C11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: -1,finger: "x"},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "C11", correct: true},{answer: "CMaj9",correct: false},{answer: "CMaj11",correct: false},{answer: "C9",correct: false}]
    },
    '187': {name: "G11", difficulty: "hard", notes: [{fret: 3, finger: 4},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "G11", correct: true},{answer: "G9",correct: false},{answer: "GMaj9",correct: false},{answer: "GMaj11",correct: false}]
    },
    '188': {name: "D11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: -1,finger: "x"},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1}],
      answers: [{answer: "D11", correct: true},{answer: "DMaj9",correct: false},{answer: "DMaj11",correct: false},{answer: "D7#9",correct: false}]
    },
    '189': {name: "D11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 1},{fret: 5,finger: 1},{fret: 5, finger: 1},{fret: 5, finger: 1},{fret: 5, finger: 1}],
      answers: [{answer: "D11", correct: true},{answer: "DMaj9",correct: false},{answer: "D9",correct: false},{answer: "Dmin6",correct: false}]
    },
    '190': {name: "A11", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 6, finger: 4},{fret: 3, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "A11", correct: true},{answer: "AMaj9",correct: false},{answer: "A9",correct: false},{answer: "Amin11",correct: false}]
    },
    '191': {name: "E11", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 2, finger: 3}],
      answers: [{answer: "E11", correct: true},{answer: "E9",correct: false},{answer: "Emin9",correct: false},{answer: "Em7b5",correct: false}]
    },
    '192': {name: "B11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 2, finger: 4},{fret: 0, finger: 0}],
      answers: [{answer: "B11", correct: true},{answer: "BMaj9",correct: false},{answer: "BMaj11",correct: false},{answer: "B7#9",correct: false}]
    },
    '193': {name: "Eb11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 1, finger: 1},{fret: 2, finger: 2},{fret: 1, finger: 1}],
      answers: [{answer: "Eb11", correct: true},{answer: "Ebdim7",correct: false},{answer: "EbMaj9",correct: false},{answer: "Eb9",correct: false}]
    },
    '194': {name: "CMaj11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 1, finger: 1}],
      answers: [{answer: "CMaj11", correct: true},{answer: "CMaj9",correct: false},{answer: "C11",correct: false},{answer: "C9",correct: false}]
    },
    '195': {name: "GMaj11", difficulty: "hard", notes: [{fret: 3, finger: 4},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 2, finger: 2}],
      answers: [{answer: "GMaj11", correct: true},{answer: "G9",correct: false},{answer: "G11",correct: false},{answer: "GMaj9",correct: false}]
    },
    '196': {name: "DMaj11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 4},{fret: 4,finger: 3},{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "DMaj11", correct: true},{answer: "DMaj9",correct: false},{answer: "D11",correct: false},{answer: "D7#9",correct: false}]
    },
    '197': {name: "BMaj11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 4},{fret: 3, finger: 3},{fret: 2, finger: 2},{fret: 0, finger: 0}],
      answers: [{answer: "BMaj11", correct: true},{answer: "BMaj9",correct: false},{answer: "B11",correct: false},{answer: "B7#9",correct: false}]
    },
    '198': {name: "C13", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 3},{fret: 5, finger: 4}],
      answers: [{answer: "C13", correct: true},{answer: "C9",correct: false},{answer: "C7b9",correct: false},{answer: "Cdim7",correct: false}]
    },
    '199': {name: "G13", difficulty: "hard", notes: [{fret: 3, finger: 1},{fret: -1, finger: "x"},{fret: 3,finger: 2},{fret: 4, finger: 3},{fret: 5, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "G13", correct: true},{answer: "G9",correct: false},{answer: "G7sus",correct: false},{answer: "GMaj9",correct: false}]
    },
    '200': {name: "G13", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 2, finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "G13", correct: true},{answer: "G9",correct: false},{answer: "G7sus",correct: false},{answer: "GMaj9",correct: false}]
    },
    '201': {name: "F13", difficulty: "hard", notes: [{fret: 1, finger: 1},{fret: -1, finger: "x"},{fret: 1,finger: 2},{fret: 2, finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "F13", correct: true},{answer: "F9",correct: false},{answer: "F7#9",correct: false},{answer: "FMaj9",correct: false}]
    },
    '202': {name: "Cmin11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 1,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "Cmin11", correct: true},{answer: "Cmin9",correct: false},{answer: "CMaj11",correct: false},{answer: "C11",correct: false}]
    },
    '203': {name: "Gmin11", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Gmin11", correct: true},{answer: "Gdim7",correct: false},{answer: "Gm7b5",correct: false},{answer: "Gmin6",correct: false}]
    },
    '204': {name: "Dmin11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 3,finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1}],
      answers: [{answer: "Dmin11", correct: true},{answer: "Dmin9",correct: false},{answer: "DMaj11",correct: false},{answer: "D9",correct: false}]
    },
    '205': {name: "Amin11", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1},{fret: 3, finger: 1}],
      answers: [{answer: "Amin11", correct: true},{answer: "AMaj9",correct: false},{answer: "A9",correct: false},{answer: "A11",correct: false}]
    },
    '206': {name: "Emin11", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 3, finger: 4}],
      answers: [{answer: "Emin11", correct: true},{answer: "E9",correct: false},{answer: "Emin9",correct: false},{answer: "Em7b5",correct: false}]
    },
    '207': {name: "Gmin6", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Gmin6", correct: true},{answer: "Gdim7",correct: false},{answer: "Gm7b5",correct: false},{answer: "Gmin11",correct: false}]
    },
    '208': {name: "Gmin6", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: 1, finger: 1},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 4},{fret: 0, finger: 0}],
      answers: [{answer: "Gmin6", correct: true},{answer: "Gdim7",correct: false},{answer: "Gm7b5",correct: false},{answer: "GMaj9",correct: false}]
    },
    '209': {name: "Dmin6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 1}],
      answers: [{answer: "Dmin6", correct: true},{answer: "Dmin9",correct: false},{answer: "Dm7b5",correct: false},{answer: "Dmin11",correct: false}]
    },
    '210': {name: "Amin6", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 4,finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Amin6", correct: true},{answer: "A7sus",correct: false},{answer: "Am7b5",correct: false},{answer: "Amin11",correct: false}]
    },
    '211': {name: "Amin6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 2, finger: 4}],
      answers: [{answer: "Amin6", correct: true},{answer: "A7sus",correct: false},{answer: "Am7b5",correct: false},{answer: "A11",correct: false}]
    },
    '212': {name: "Emin6", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "Emin6", correct: true},{answer: "E9",correct: false},{answer: "Emin11",correct: false},{answer: "Em7b5",correct: false}]
    }
});