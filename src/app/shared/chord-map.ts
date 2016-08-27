import * as Immutable from 'immutable';

export const Difficulties = Immutable.Map({
    easy: 'easy',
    medium: 'medium',
    hard: 'hard'
});

export const ChordMap = Immutable.OrderedMap({
    '1': {id: '1', name: "C Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "C Major", isCorrect: true},{answer: "G Major",isCorrect: false},{answer: "F Major",isCorrect: false},{answer: "E Major",isCorrect: false}],
      scaleTones: ["x",1,3,5,1,3], noteLetters: ["x","C","E","G","C","E"]
    },
    '2': {id: '2', name: "C Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 5,finger: 2},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1}],
      answers: [{answer: "C Major", isCorrect: true},{answer: "G Major",isCorrect: false},{answer: "F Major",isCorrect: false},{answer: "E Major",isCorrect: false}],
      scaleTones: ["x",1,5,1,3,5], noteLetters: ["x","C","G","C","E","G"]
    },
    '3': {id: '3', name: "G Major", difficulty: "easy", notes: [{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 3, finger: 4}],
      answers: [{answer: "G Major", isCorrect: true},{answer: "C Major",isCorrect: false},{answer: "F Major",isCorrect: false},{answer: "E Major",isCorrect: false}],
      scaleTones: [1,3,5,1,5,1], noteLetters: ["G","B","D","G","D","G"]
    },
    '4': {id: '4', name: "G Major", difficulty: "easy", notes: [{fret: 3, finger: 1},{fret: 5, finger: 3},{fret: 5,finger: 4},{fret: 4, finger: 2},{fret: 3, finger: 1},{fret: 3, finger: 1}],
      answers: [{answer: "G Major", isCorrect: true},{answer: "C Major",isCorrect: false},{answer: "F Major",isCorrect: false},{answer: "E Major",isCorrect: false}],
      scaleTones: [1,5,1,3,5,1], noteLetters: ["G","D","G","B","D","G"]
    },
    '5': {id: '5', name: "D Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: 2, finger: 2}],
      answers: [{answer: "D Major", isCorrect: true},{answer: "G Major",isCorrect: false},{answer: "F Major",isCorrect: false},{answer: "E Major",isCorrect: false}]
    },
    '6': {id: '6', name: "A Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 2},{fret: 2, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "A Major", isCorrect: true},{answer: "G Major",isCorrect: false},{answer: "D Major",isCorrect: false},{answer: "E Major",isCorrect: false}]
    },
    '7': {id: '7', name: "E Major", difficulty: "easy", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2,finger: 3},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "E Major", isCorrect: true},{answer: "A Major",isCorrect: false},{answer: "F Major",isCorrect: false},{answer: "C Major",isCorrect: false}]
    },
    '8': {id: '8', name: "B Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 2},{fret: 4, finger: 3},{fret: 4, finger: 4},{fret: 2, finger: 1}],
      answers: [{answer: "B Major", isCorrect: true},{answer: "A Major",isCorrect: false},{answer: "F# Major",isCorrect: false},{answer: "E Major",isCorrect: false}]
    },
    '9': {id: '9', name: "F# Major", difficulty: "easy", notes: [{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 4,finger: 4},{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "F# Major", isCorrect: true},{answer: "B Major",isCorrect: false},{answer: "F Major",isCorrect: false},{answer: "E Major",isCorrect: false}]
    },
    '10': {id: '10', name: "C# Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 4, finger: 1},{fret: 6,finger: 2},{fret: 6, finger: 3},{fret: 6, finger: 4},{fret: 4, finger: 1}],
      answers: [{answer: "C# Major", isCorrect: true},{answer: "C Major",isCorrect: false},{answer: "F# Major",isCorrect: false},{answer: "B Major",isCorrect: false}]
    },
    '11': {id: '11', name: "F Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "F Major", isCorrect: true},{answer: "G Major",isCorrect: false},{answer: "F# Major",isCorrect: false},{answer: "Bb Major",isCorrect: false}]
    },
    '12': {id: '12', name: "F Major", difficulty: "easy", notes: [{fret: 1, finger: 1},{fret: 3, finger: 3},{fret: 3,finger: 4},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "F Major", isCorrect: true},{answer: "G Major",isCorrect: false},{answer: "F# Major",isCorrect: false},{answer: "Bb Major",isCorrect: false}]
    },
    '13': {id: '13', name: "Bb Major", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 2},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "Bb Major", isCorrect: true},{answer: "F Major",isCorrect: false},{answer: "B Major",isCorrect: false},{answer: "E Major",isCorrect: false}]
    },
    '14': {id: '14', name: "C minor", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 5,finger: 3},{fret: 5, finger: 4},{fret: 4, finger: 2},{fret: 3, finger: 1}],
      answers: [{answer: "C minor", isCorrect: true},{answer: "G minor",isCorrect: false},{answer: "B minor",isCorrect: false},{answer: "F# minor",isCorrect: false}]
    },
    '15': {id: '15', name: "G minor", difficulty: "easy", notes: [{fret: 3, finger: 1},{fret: 5, finger: 3},{fret: 5,finger: 4},{fret: 3, finger: 1},{fret: 3, finger: 1},{fret: 3, finger: 1}],
      answers: [{answer: "G minor", isCorrect: true},{answer: "F# minor",isCorrect: false},{answer: "B minor",isCorrect: false},{answer: "C minor",isCorrect: false}]
    },
    '16': {id: '16', name: "D minor", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 3, finger: 3},{fret: 1, finger: 1}],
      answers: [{answer: "D minor", isCorrect: true},{answer: "A minor",isCorrect: false},{answer: "B minor",isCorrect: false},{answer: "E minor",isCorrect: false}]
    },
    '17': {id: '17', name: "A minor", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "A minor", isCorrect: true},{answer: "E minor",isCorrect: false},{answer: "C minor",isCorrect: false},{answer: "D minor",isCorrect: false}]
    },
    '18': {id: '18', name: "E minor", difficulty: "easy", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2,finger: 3},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "E minor", isCorrect: true},{answer: "A minor",isCorrect: false},{answer: "B minor",isCorrect: false},{answer: "D minor",isCorrect: false}]
    },
    '19': {id: '19', name: "B minor", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 3},{fret: 4, finger: 4},{fret: 3, finger: 2},{fret: 2, finger: 1}],
      answers: [{answer: "B minor", isCorrect: true},{answer: "E minor",isCorrect: false},{answer: "F# minor",isCorrect: false},{answer: "A minor",isCorrect: false}]
    },
    '20': {id: '20', name: "F# minor", difficulty: "easy", notes: [{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 4,finger: 4},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "F# minor", isCorrect: true},{answer: "F minor",isCorrect: false},{answer: "B minor",isCorrect: false},{answer: "A minor",isCorrect: false}]
    },
    '21': {id: '21', name: "C# minor", difficulty: "easy", notes: [{fret: -1, finger: "x"},{fret: 4, finger: 1},{fret: 6,finger: 3},{fret: 6, finger: 4},{fret: 5, finger: 2},{fret: 4, finger: 1}],
      answers: [{answer: "C# minor", isCorrect: true},{answer: "F# minor",isCorrect: false},{answer: "B minor",isCorrect: false},{answer: "G minor",isCorrect: false}]
    },
    '22': {id: '22', name: "F minor", difficulty: "easy", notes: [{fret: 1, finger: 1},{fret: 3, finger: 3},{fret: 3,finger: 4},{fret: 1, finger: 1},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "F minor", isCorrect: true},{answer: "F# minor",isCorrect: false},{answer: "B minor",isCorrect: false},{answer: "A minor",isCorrect: false}]
    },
    '23': {id: '23', name: "C2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1},{fret: 3, finger: 1}],
      answers: [{answer: "C2", isCorrect: true},{answer: "Csus",isCorrect: false},{answer: "CMaj7",isCorrect: false},{answer: "Caug",isCorrect: false}]
    },
    '24': {id: '24', name: "G2", difficulty: "medium", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4}],
      answers: [{answer: "G2", isCorrect: true},{answer: "Gsus",isCorrect: false},{answer: "GMaj7",isCorrect: false},{answer: "Gaug",isCorrect: false}]
    },
    '25': {id: '25', name: "D2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "D2", isCorrect: true},{answer: "Dsus",isCorrect: false},{answer: "DMaj7",isCorrect: false},{answer: "Ddim",isCorrect: false}]
    },
    '26': {id: '26', name: "A2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "A2", isCorrect: true},{answer: "Asus",isCorrect: false},{answer: "AMaj7",isCorrect: false},{answer: "Adim",isCorrect: false}]
    },
    '27': {id: '27', name: "B2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 4, finger: 4},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "B2", isCorrect: true},{answer: "Bsus",isCorrect: false},{answer: "BMaj7",isCorrect: false},{answer: "B7",isCorrect: false}]
    },
    '28': {id: '28', name: "F2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "F2", isCorrect: true},{answer: "Fsus",isCorrect: false},{answer: "FMaj7",isCorrect: false},{answer: "F7",isCorrect: false}]
    },
    '29': {id: '29', name: "F2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 1},{fret: 5, finger: 3},{fret: 6, finger: 4},{fret: 3, finger: 1}],
      answers: [{answer: "F2", isCorrect: true},{answer: "Fsus",isCorrect: false},{answer: "FMaj7",isCorrect: false},{answer: "F7",isCorrect: false}]
    },
    '30': {id: '30', name: "Bb2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Bb2", isCorrect: true},{answer: "Bbsus",isCorrect: false},{answer: "BbMaj7",isCorrect: false},{answer: "Bb7",isCorrect: false}]
    },
    '40': {id: '40', name: "Eb2", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 3, finger: 3},{fret: 4, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "Eb2", isCorrect: true},{answer: "Ebsus",isCorrect: false},{answer: "EbMaj7",isCorrect: false},{answer: "Eb7",isCorrect: false}]
    },
    '41': {id: '41', name: "Cadd9", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 3, finger: 4}],
      answers: [{answer: "Cadd9", isCorrect: true},{answer: "Csus",isCorrect: false},{answer: "CMaj7",isCorrect: false},{answer: "C7",isCorrect: false}]
    },
    '42': {id: '42', name: "Gadd9", difficulty: "medium", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0, finger: 0},{fret: 3, finger: 4}],
      answers: [{answer: "Gadd9", isCorrect: true},{answer: "Gsus",isCorrect: false},{answer: "GMaj7",isCorrect: false},{answer: "G7",isCorrect: false}]
    },
    '43': {id: '43', name: "Dadd9", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 4},{fret: 4, finger: 3},{fret: 2, finger: 1},{fret: 3, finger: 2},{fret: 0, finger: 0}],
      answers: [{answer: "Dadd9", isCorrect: true},{answer: "Dsus",isCorrect: false},{answer: "DMaj7",isCorrect: false},{answer: "Daug",isCorrect: false}]
    },
    '44': {id: '44', name: "Eadd9", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 2, finger: 4}],
      answers: [{answer: "Eadd9", isCorrect: true},{answer: "Esus",isCorrect: false},{answer: "EMaj7",isCorrect: false},{answer: "E7",isCorrect: false}]
    },
    '45': {id: '45', name: "Fadd9", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 3, finger: 4}],
      answers: [{answer: "Fadd9", isCorrect: true},{answer: "Fsus",isCorrect: false},{answer: "FMaj7",isCorrect: false},{answer: "F7",isCorrect: false}]
    },
    '46': {id: '46', name: "Csus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 5,finger: 2},{fret: 5, finger: 3},{fret: 6, finger: 4},{fret: 3, finger: 1}],
      answers: [{answer: "Csus", isCorrect: true},{answer: "Cadd9",isCorrect: false},{answer: "CMaj7",isCorrect: false},{answer: "Cdim",isCorrect: false}]
    },
    '47': {id: '47', name: "Gsus", difficulty: "medium", notes: [{fret: 3, finger: 3},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 3, finger: 4}],
      answers: [{answer: "Gsus", isCorrect: true},{answer: "G2",isCorrect: false},{answer: "GMaj7",isCorrect: false},{answer: "Gdim",isCorrect: false}]
    },
    '48': {id: '48', name: "Dsus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4}],
      answers: [{answer: "Dsus", isCorrect: true},{answer: "D2",isCorrect: false},{answer: "DMaj7",isCorrect: false},{answer: "Daug",isCorrect: false}]
    },
    '49': {id: '49', name: "Asus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 2},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "Asus", isCorrect: true},{answer: "A2",isCorrect: false},{answer: "AMaj7",isCorrect: false},{answer: "Aaug",isCorrect: false}]
    },
    '50': {id: '50', name: "Esus", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2,finger: 3},{fret: 2, finger: 4},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "Esus", isCorrect: true},{answer: "Eadd9",isCorrect: false},{answer: "EMaj7",isCorrect: false},{answer: "Eadd9",isCorrect: false}]
    },
    '51': {id: '51', name: "Bsus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 2},{fret: 4, finger: 3},{fret: 5, finger: 4},{fret: 2, finger: 1}],
      answers: [{answer: "Bsus", isCorrect: true},{answer: "B7",isCorrect: false},{answer: "BMaj7",isCorrect: false},{answer: "B2",isCorrect: false}]
    },
    '52': {id: '52', name: "F#sus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 4,finger: 3},{fret: 4, finger: 4},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "F#sus", isCorrect: true},{answer: "F#2",isCorrect: false},{answer: "F#Maj7",isCorrect: false},{answer: "F#add9",isCorrect: false}]
    },
    '53': {id: '53', name: "Fsus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Fsus", isCorrect: true},{answer: "F2",isCorrect: false},{answer: "FMaj7",isCorrect: false},{answer: "Fadd9",isCorrect: false}]
    },
    '54': {id: '54', name: "Bbsus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 2},{fret: 3, finger: 3},{fret: 4, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "Bbsus", isCorrect: true},{answer: "Bb2",isCorrect: false},{answer: "BbMaj7",isCorrect: false},{answer: "Bb7",isCorrect: false}]
    },
    '55': {id: '55', name: "Ebsus", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 3, finger: 2},{fret: 4, finger: 3},{fret: 4, finger: 4}],
      answers: [{answer: "Ebsus", isCorrect: true},{answer: "Eb2",isCorrect: false},{answer: "EbMaj7",isCorrect: false},{answer: "Eb7",isCorrect: false}]
    },
    '56': {id: '56', name: "C7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 3, finger: 4},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "C7", isCorrect: true},{answer: "Cdim",isCorrect: false},{answer: "CMaj7",isCorrect: false},{answer: "Caug",isCorrect: false}]
    },
    '57': {id: '57', name: "D7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 2, finger: 3}],
      answers: [{answer: "D7", isCorrect: true},{answer: "Ddim",isCorrect: false},{answer: "DMaj7",isCorrect: false},{answer: "Daug",isCorrect: false}]
    },
    '58': {id: '58', name: "D7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 3},{fret: 4,finger: 2},{fret: 5, finger: 4},{fret: 3, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "D7", isCorrect: true},{answer: "Dsus",isCorrect: false},{answer: "DMaj7",isCorrect: false},{answer: "Daug",isCorrect: false}]
    },
    '59': {id: '59', name: "A7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "A7", isCorrect: true},{answer: "Adim",isCorrect: false},{answer: "AMaj7",isCorrect: false},{answer: "Aaug",isCorrect: false}]
    },
    '60': {id: '60', name: "A7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 3, finger: 2}],
      answers: [{answer: "A7", isCorrect: true},{answer: "Adim",isCorrect: false},{answer: "AMaj7",isCorrect: false},{answer: "Aaug",isCorrect: false}]
    },
    '61': {id: '61', name: "E7", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "E7", isCorrect: true},{answer: "Edim",isCorrect: false},{answer: "EMaj7",isCorrect: false},{answer: "Esus",isCorrect: false}]
    },
    '62': {id: '62', name: "B7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 3},{fret: 2, finger: 1},{fret: 4, finger: 4},{fret: 2, finger: 1}],
      answers: [{answer: "B7", isCorrect: true},{answer: "B2",isCorrect: false},{answer: "BMaj7",isCorrect: false},{answer: "Baug",isCorrect: false}]
    },
    '63': {id: '63', name: "B7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 0, finger: 0},{fret: 2, finger: 4}],
      answers: [{answer: "B7", isCorrect: true},{answer: "Bsus",isCorrect: false},{answer: "BMaj7",isCorrect: false},{answer: "B2",isCorrect: false}]
    },
    '64': {id: '64', name: "F#7", difficulty: "medium", notes: [{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 2,finger: 1},{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "F#7", isCorrect: true},{answer: "F#dim",isCorrect: false},{answer: "F#Maj7",isCorrect: false},{answer: "F#sus",isCorrect: false}]
    },
    '65': {id: '65', name: "F7", difficulty: "medium", notes: [{fret: 1, finger: 1},{fret: -1, finger: "x"},{fret: 1,finger: 2},{fret: 2, finger: 4},{fret: 1, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "F7", isCorrect: true},{answer: "F2",isCorrect: false},{answer: "FMaj7",isCorrect: false},{answer: "Fsus",isCorrect: false}]
    },
    '66': {id: '66', name: "Bb7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 3},{fret: 1, finger: 1},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "Bb7", isCorrect: true},{answer: "Bb2",isCorrect: false},{answer: "BbMaj7",isCorrect: false},{answer: "Bbsus",isCorrect: false}]
    },
    '67': {id: '67', name: "Eb7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 3, finger: 3},{fret: 2, finger: 2},{fret: 3, finger: 4}],
      answers: [{answer: "Eb7", isCorrect: true},{answer: "Eb2",isCorrect: false},{answer: "Ebsus",isCorrect: false},{answer: "EbMaj7",isCorrect: false}]
    },
    '68': {id: '68', name: "CMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "CMaj7", isCorrect: true},{answer: "Cdim",isCorrect: false},{answer: "C7",isCorrect: false},{answer: "Csus",isCorrect: false}]
    },
    '69': {id: '69', name: "GMaj7", difficulty: "medium", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 2, finger: 1}],
      answers: [{answer: "GMaj7", isCorrect: true},{answer: "Gdim",isCorrect: false},{answer: "G7",isCorrect: false},{answer: "Gsus",isCorrect: false}]
    },
    '70': {id: '70', name: "GMaj7", difficulty: "medium", notes: [{fret: 3, finger: 1},{fret: -1, finger: "x"},{fret: 4,finger: 3},{fret: 4, finger: 4},{fret: 3, finger: 2},{fret: -1, finger: "x"}],
      answers: [{answer: "GMaj7", isCorrect: true},{answer: "Gaug",isCorrect: false},{answer: "G7",isCorrect: false},{answer: "Gsus",isCorrect: false}]
    },
    '71': {id: '71', name: "GMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 5,finger: 4},{fret: 4, finger: 3},{fret: 3, finger: 2},{fret: 2, finger: 1}],
      answers: [{answer: "GMaj7", isCorrect: true},{answer: "Gmin7",isCorrect: false},{answer: "G7",isCorrect: false},{answer: "Gsus",isCorrect: false}]
    },
    '72': {id: '72', name: "DMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "DMaj7", isCorrect: true},{answer: "Daug",isCorrect: false},{answer: "D7",isCorrect: false},{answer: "Dsus",isCorrect: false}]
    },
    '73': {id: '73', name: "DMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 4},{fret: 4,finger: 3},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "DMaj7", isCorrect: true},{answer: "Dadd9",isCorrect: false},{answer: "D7",isCorrect: false},{answer: "Dsus",isCorrect: false}]
    },
    '74': {id: '74', name: "AMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 1, finger: 1},{fret: 2, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "AMaj7", isCorrect: true},{answer: "Adim",isCorrect: false},{answer: "A7",isCorrect: false},{answer: "A2",isCorrect: false}]
    },
    '75': {id: '75', name: "EMaj7", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 1,finger: 1},{fret: 1, finger: 2},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "EMaj7", isCorrect: true},{answer: "Edim",isCorrect: false},{answer: "E7",isCorrect: false},{answer: "Esus",isCorrect: false}]
    },
    '76': {id: '76', name: "BMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 3},{fret: 3, finger: 2},{fret: 4, finger: 4},{fret: 2, finger: 1}],
      answers: [{answer: "BMaj7", isCorrect: true},{answer: "Bdim",isCorrect: false},{answer: "B7",isCorrect: false},{answer: "Baug",isCorrect: false}]
    },
    '77': {id: '77', name: "F#Maj7", difficulty: "medium", notes: [{fret: 2, finger: 1},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: 2, finger: 2},{fret: -1, finger: "x"}],
      answers: [{answer: "F#Maj7", isCorrect: true},{answer: "F#dim",isCorrect: false},{answer: "F#7",isCorrect: false},{answer: "F#sus",isCorrect: false}]
    },
    '78': {id: '78', name: "FMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "FMaj7", isCorrect: true},{answer: "F2",isCorrect: false},{answer: "F7",isCorrect: false},{answer: "Fsus",isCorrect: false}]
    },
    '79': {id: '79', name: "FMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 3},{fret: 5, finger: 3}],
      answers: [{answer: "FMaj7", isCorrect: true},{answer: "F2",isCorrect: false},{answer: "F7",isCorrect: false},{answer: "Fsus",isCorrect: false}]
    },
    '80': {id: '80', name: "BbMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 3},{fret: 2, finger: 2},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "BbMaj7", isCorrect: true},{answer: "Bb2",isCorrect: false},{answer: "Bb7",isCorrect: false},{answer: "Bbsus",isCorrect: false}]
    },
    '81': {id: '81', name: "EbMaj7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 3},{fret: 3, finger: 3}],
      answers: [{answer: "EbMaj7", isCorrect: true},{answer: "Eb2",isCorrect: false},{answer: "Ebsus",isCorrect: false},{answer: "Eb7",isCorrect: false}]
    },
    '82': {id: '82', name: "Cdim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 4,finger: 2},{fret: 5, finger: 4},{fret: 4, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "Cdim", isCorrect: true},{answer: "Cmin7",isCorrect: false},{answer: "C7",isCorrect: false},{answer: "Caug",isCorrect: false}]
    },
    '83': {id: '83', name: "Gdim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 5,finger: 4},{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Gdim", isCorrect: true},{answer: "G7",isCorrect: false},{answer: "Gmin7",isCorrect: false},{answer: "Gaug",isCorrect: false}]
    },
    '84': {id: '84', name: "Ddim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 3, finger: 3},{fret: 1, finger: 1}],
      answers: [{answer: "Ddim", isCorrect: true},{answer: "Dmin7",isCorrect: false},{answer: "D7",isCorrect: false},{answer: "Daug",isCorrect: false}]
    },
    '85': {id: '85', name: "Adim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 1, finger: 2},{fret: -1, finger: "x"}],
      answers: [{answer: "Adim", isCorrect: true},{answer: "Amin7",isCorrect: false},{answer: "A7",isCorrect: false},{answer: "Aaug",isCorrect: false}]
    },
    '86': {id: '86', name: "Edim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 2,finger: 1},{fret: 3, finger: 2},{fret: 5, finger: 4},{fret: 3, finger: 3}],
      answers: [{answer: "Edim", isCorrect: true},{answer: "EMaj7",isCorrect: false},{answer: "E7",isCorrect: false},{answer: "Esus",isCorrect: false}]
    },
    '87': {id: '87', name: "Edim", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: -1, finger: "x"},{fret: -1, finger: "x"}],
      answers: [{answer: "Edim", isCorrect: true},{answer: "EMaj7",isCorrect: false},{answer: "E7",isCorrect: false},{answer: "Esus",isCorrect: false}]
    },
    '88': {id: '88', name: "Bdim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 3,finger: 2},{fret: 4, finger: 4},{fret: 3, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "Bdim", isCorrect: true},{answer: "Baug",isCorrect: false},{answer: "B7",isCorrect: false},{answer: "B2",isCorrect: false}]
    },
    '89': {id: '89', name: "F#dim", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 4,finger: 4},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "F#dim", isCorrect: true},{answer: "F#min7",isCorrect: false},{answer: "F#7",isCorrect: false},{answer: "F#sus",isCorrect: false}]
    },
    '90': {id: '90', name: "Caug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 1, finger: 1},{fret: 1, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Caug", isCorrect: true},{answer: "C7",isCorrect: false},{answer: "CMaj7",isCorrect: false},{answer: "Cdim",isCorrect: false}]
    },
    '91': {id: '91', name: "Gaug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 4, finger: 1},{fret: 4, finger: 2},{fret: -1, finger: "x"}],
      answers: [{answer: "Gaug", isCorrect: true},{answer: "Gsus",isCorrect: false},{answer: "G7",isCorrect: false},{answer: "Gdim",isCorrect: false}]
    },
    '92': {id: '92', name: "Gaug", difficulty: "medium", notes: [{fret: 3, finger: 3},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 4}],
      answers: [{answer: "Gaug", isCorrect: true},{answer: "GMaj7",isCorrect: false},{answer: "G7",isCorrect: false},{answer: "Gdim",isCorrect: false}]
    },
    '93': {id: '93', name: "Daug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 3, finger: 2},{fret: 3, finger: 3},{fret: 2, finger: 1}],
      answers: [{answer: "Daug", isCorrect: true},{answer: "Dsus",isCorrect: false},{answer: "DMaj7",isCorrect: false},{answer: "Ddim",isCorrect: false}]
    },
    '94': {id: '94', name: "Aaug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 3, finger: 4},{fret: 2, finger: 2},{fret: 2, finger: 3},{fret: 1, finger: 1}],
      answers: [{answer: "Aaug", isCorrect: true},{answer: "Asus",isCorrect: false},{answer: "A7",isCorrect: false},{answer: "Adim",isCorrect: false}]
    },
    '95': {id: '95', name: "Eaug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 1, finger: 2},{fret: 0, finger: 0}],
      answers: [{answer: "Eaug", isCorrect: true},{answer: "Esus",isCorrect: false},{answer: "E7",isCorrect: false},{answer: "Edim",isCorrect: false}]
    },
    '96': {id: '96', name: "Baug", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 4}],
      answers: [{answer: "Baug", isCorrect: true},{answer: "Bdim",isCorrect: false},{answer: "B7",isCorrect: false},{answer: "B2",isCorrect: false}]
    },
    '97': {id: '97', name: "Cmin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 1,finger: 1},{fret: 3, finger: 4},{fret: 1, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Cmin7", isCorrect: true},{answer: "Cdim",isCorrect: false},{answer: "CMaj7",isCorrect: false},{answer: "Caug",isCorrect: false}]
    },
    '98': {id: '98', name: "Gmin7", difficulty: "medium", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 3, finger: 3},{fret: 3, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "Gmin7", isCorrect: true},{answer: "GMaj7",isCorrect: false},{answer: "G7",isCorrect: false},{answer: "Gdim",isCorrect: false}]
    },
    '99': {id: '99', name: "Dmin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Dmin7", isCorrect: true},{answer: "Ddim",isCorrect: false},{answer: "DMaj7",isCorrect: false},{answer: "Daug",isCorrect: false}]
    },
    '100': {id: '100', name: "Amin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "Amin7", isCorrect: true},{answer: "Adim",isCorrect: false},{answer: "AMaj7",isCorrect: false},{answer: "Asus",isCorrect: false}]
    },
    '101': {id: '101', name: "Emin7", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "Emin7", isCorrect: true},{answer: "Edim",isCorrect: false},{answer: "EMaj7",isCorrect: false},{answer: "Esus",isCorrect: false}]
    },
    '102': {id: '102', name: "Emin7", difficulty: "medium", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 3, finger: 4}],
      answers: [{answer: "Emin7", isCorrect: true},{answer: "Edim",isCorrect: false},{answer: "EMaj7",isCorrect: false},{answer: "Eaug",isCorrect: false}]
    },
    '103': {id: '103', name: "Bmin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 3},{fret: 2, finger: 1},{fret: 3, finger: 2},{fret: 2, finger: 1}],
      answers: [{answer: "Bmin7", isCorrect: true},{answer: "Bdim",isCorrect: false},{answer: "BMaj7",isCorrect: false},{answer: "B2",isCorrect: false}]
    },
    '104': {id: '104', name: "Bmin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 2, finger: 3},{fret: 0, finger: 0},{fret: 2, finger: 4}],
      answers: [{answer: "Bmin7", isCorrect: true},{answer: "B2",isCorrect: false},{answer: "BMaj7",isCorrect: false},{answer: "Bsus",isCorrect: false}]
    },
    '105': {id: '105', name: "F#min7", difficulty: "medium", notes: [{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 2,finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "F#min7", isCorrect: true},{answer: "F#7",isCorrect: false},{answer: "F#dim",isCorrect: false},{answer: "F#sus",isCorrect: false}]
    },
    '106': {id: '106', name: "Fmin7", difficulty: "medium", notes: [{fret: 1, finger: 1},{fret: 3, finger: 3},{fret: 1,finger: 1},{fret: 1, finger: 1},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Fmin7", isCorrect: true},{answer: "F2",isCorrect: false},{answer: "FMaj7",isCorrect: false},{answer: "Fsus",isCorrect: false}]
    },
    '107': {id: '107', name: "Bbmin7", difficulty: "medium", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 3,finger: 3},{fret: 1, finger: 1},{fret: 2, finger: 2},{fret: 1, finger: 1}],
      answers: [{answer: "Bbmin7", isCorrect: true},{answer: "Bb2",isCorrect: false},{answer: "BbMaj7",isCorrect: false},{answer: "Bbsus",isCorrect: false}]
    },
    '108': {id: '108', name: "G7sus", difficulty: "hard", notes: [{fret: 3, finger: 3},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "G7sus", isCorrect: true},{answer: "GMaj9",isCorrect: false},{answer: "G6",isCorrect: false},{answer: "G9",isCorrect: false}]
    },
    '109': {id: '109', name: "A7sus", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "A7sus", isCorrect: true},{answer: "A9",isCorrect: false},{answer: "A6",isCorrect: false},{answer: "Amin11",isCorrect: false}]
    },
    '110': {id: '110', name: "E7sus", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 2, finger: 3},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "E7sus", isCorrect: true},{answer: "E6",isCorrect: false},{answer: "EMaj9",isCorrect: false},{answer: "E9",isCorrect: false}]
    },
    '111': {id: '111', name: "C7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 4,finger: 2},{fret: 3, finger: 1},{fret: 5, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "C7b5", isCorrect: true},{answer: "C7b9",isCorrect: false},{answer: "Cdim7",isCorrect: false},{answer: "C9",isCorrect: false}]
    },
    '112': {id: '112', name: "G7b5", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 4, finger: 4},{fret: 2, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "G7b5", isCorrect: true},{answer: "G7b9",isCorrect: false},{answer: "G7#9",isCorrect: false},{answer: "G7#5",isCorrect: false}]
    },
    '113': {id: '113', name: "D7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 1, finger: 2},{fret: 2, finger: 3}],
      answers: [{answer: "D7b5", isCorrect: true},{answer: "D7b9",isCorrect: false},{answer: "Ddim7",isCorrect: false},{answer: "D7#5",isCorrect: false}]
    },
    '114': {id: '114', name: "A7b5", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 6, finger: 4},{fret: 4, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "A7b5", isCorrect: true},{answer: "A11",isCorrect: false},{answer: "A9",isCorrect: false},{answer: "A7#5",isCorrect: false}]
    },
    '115': {id: '115', name: "F7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 1},{fret: 4, finger: 2},{fret: 4, finger: 3},{fret: 5, finger: 4}],
      answers: [{answer: "F7b5", isCorrect: true},{answer: "F9",isCorrect: false},{answer: "F7#9",isCorrect: false},{answer: "F7#5",isCorrect: false}]
    },
    '116': {id: '116', name: "Bb7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 2,finger: 2},{fret: 1, finger: 1},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Bb7b5", isCorrect: true},{answer: "Bb7b9",isCorrect: false},{answer: "Bbdim7",isCorrect: false},{answer: "Bb7#5",isCorrect: false}]
    },
    '117': {id: '117', name: "C7#5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: -1,finger: "x"},{fret: 3, finger: 2},{fret: 5, finger: 4},{fret: 4, finger: 3}],
      answers: [{answer: "C7#5", isCorrect: true},{answer: "C7b9",isCorrect: false},{answer: "Cdim7",isCorrect: false},{answer: "C7b5",isCorrect: false}]
    },
    '118': {id: '118', name: "D7#5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 5, finger: 3},{fret: -1, finger: "x"},{fret: 6, finger: 4}],
      answers: [{answer: "D7#5", isCorrect: true},{answer: "D7b9",isCorrect: false},{answer: "Ddim7",isCorrect: false},{answer: "D7b5",isCorrect: false}]
    },
    '119': {id: '119', name: "F7#5", difficulty: "hard", notes: [{fret: 1, finger: 1},{fret: -1, finger: "x"},{fret: 1,finger: 2},{fret: 2, finger: 3},{fret: 2, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "F7#5", isCorrect: true},{answer: "F9",isCorrect: false},{answer: "F7#9",isCorrect: false},{answer: "FMaj9",isCorrect: false}]
    },
    '120': {id: '120', name: "G7#5", difficulty: "hard", notes: [{fret: 3, finger: 1},{fret: -1, finger: "x"},{fret: 3,finger: 2},{fret: 4, finger: 3},{fret: 4, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "G7#5", isCorrect: true},{answer: "G7b9",isCorrect: false},{answer: "G7#9",isCorrect: false},{answer: "G7b5",isCorrect: false}]
    },
    '121': {id: '121', name: "A7#5", difficulty: "hard", notes: [{fret: 5, finger: 1},{fret: -1, finger: "x"},{fret: 5,finger: 2},{fret: 6, finger: 3},{fret: 6, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "A7#5", isCorrect: true},{answer: "A11",isCorrect: false},{answer: "A9",isCorrect: false},{answer: "A7b5",isCorrect: false}]
    },
    '122': {id: '122', name: "A7#5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 3,finger: 2},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 3, finger: 3}],
      answers: [{answer: "A7#5", isCorrect: true},{answer: "A6",isCorrect: false},{answer: "A9",isCorrect: false},{answer: "A7#9",isCorrect: false}]
    },
    '123': {id: '123', name: "A7#5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 5,finger: 1},{fret: 6, finger: 2},{fret: 6, finger: 3},{fret: 5, finger: 1}],
      answers: [{answer: "A7#5", isCorrect: true},{answer: "A7sus",isCorrect: false},{answer: "A9",isCorrect: false},{answer: "A7b5",isCorrect: false}]
    },
    '124': {id: '124', name: "Bb7#5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: -1,finger: "x"},{fret: 1, finger: 2},{fret: 3, finger: 4},{fret: 2, finger: 3}],
      answers: [{answer: "Bb7#5", isCorrect: true},{answer: "Bb7b9",isCorrect: false},{answer: "Bbdim7",isCorrect: false},{answer: "Bb7b5",isCorrect: false}]
    },
    '125': {id: '125', name: "C6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 4},{fret: 2,finger: 2},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "C6", isCorrect: true},{answer: "C7b5",isCorrect: false},{answer: "C7b9",isCorrect: false},{answer: "C9",isCorrect: false}]
    },
    '126': {id: '126', name: "G6", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 2,finger: 1},{fret: 4, finger: 4},{fret: 3, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "G6", isCorrect: true},{answer: "G7b9",isCorrect: false},{answer: "G7#9",isCorrect: false},{answer: "G7b5",isCorrect: false}]
    },
    '127': {id: '127', name: "G6", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "G6", isCorrect: true},{answer: "G7b9",isCorrect: false},{answer: "G7#9",isCorrect: false},{answer: "G7b5",isCorrect: false}]
    },
    '128': {id: '128', name: "A6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1},{fret: 2, finger: 1}],
      answers: [{answer: "A6", isCorrect: true},{answer: "A9",isCorrect: false},{answer: "A7sus",isCorrect: false},{answer: "A11",isCorrect: false}]
    },
    '129': {id: '129', name: "A6", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 4,finger: 1},{fret: 6, finger: 4},{fret: 5, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "A6", isCorrect: true},{answer: "A9",isCorrect: false},{answer: "A7#9",isCorrect: false},{answer: "A11",isCorrect: false}]
    },
    '130': {id: '130', name: "E6", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 2,finger: 3},{fret: 1, finger: 1},{fret: 2, finger: 4},{fret: 0, finger: 0}],
      answers: [{answer: "E6", isCorrect: true},{answer: "E7sus",isCorrect: false},{answer: "EMaj9",isCorrect: false},{answer: "E9",isCorrect: false}]
    },
    '131': {id: '131', name: "F6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 1},{fret: 5, finger: 3},{fret: 3, finger: 1},{fret: 5, finger: 4}],
      answers: [{answer: "F6", isCorrect: true},{answer: "F7#5",isCorrect: false},{answer: "F11",isCorrect: false},{answer: "F9",isCorrect: false}]
    },
    '132': {id: '132', name: "F6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 1},{fret: 2, finger: 2},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "F6", isCorrect: true},{answer: "F7#5",isCorrect: false},{answer: "F11",isCorrect: false},{answer: "F9",isCorrect: false}]
    },
    '133': {id: '133', name: "C6/9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "C6/9", isCorrect: true},{answer: "C9",isCorrect: false},{answer: "C7b9",isCorrect: false},{answer: "C11",isCorrect: false}]
    },
    '134': {id: '134', name: "G6/9", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 2,finger: 1},{fret: 2, finger: 1},{fret: 3, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "G6/9", isCorrect: true},{answer: "G7b9",isCorrect: false},{answer: "G7#9",isCorrect: false},{answer: "G13",isCorrect: false}]
    },
    '135': {id: '135', name: "D6/9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 4, finger: 1},{fret: 5, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "D6/9", isCorrect: true},{answer: "D7b5",isCorrect: false},{answer: "D7b9",isCorrect: false},{answer: "Dm7b5",isCorrect: false}]
    },
    '136': {id: '136', name: "A6/9", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 4,finger: 1},{fret: 4, finger: 1},{fret: 5, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "A6/9", isCorrect: true},{answer: "AMaj9",isCorrect: false},{answer: "A9",isCorrect: false},{answer: "Amin11",isCorrect: false}]
    },
    '137': {id: '137', name: "C9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "C9", isCorrect: true},{answer: "C7b5",isCorrect: false},{answer: "C7b9",isCorrect: false},{answer: "Cdim7",isCorrect: false}]
    },
    '138': {id: '138', name: "G9", difficulty: "hard", notes: [{fret: 3, finger: 3},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 1}],
      answers: [{answer: "G9", isCorrect: true},{answer: "GMaj9",isCorrect: false},{answer: "G11",isCorrect: false},{answer: "G7sus",isCorrect: false}]
    },
    '139': {id: '139', name: "D9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "D9", isCorrect: true},{answer: "D7b5",isCorrect: false},{answer: "D7b9",isCorrect: false},{answer: "Dm7b5",isCorrect: false}]
    },
    '140': {id: '140', name: "D9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "D9", isCorrect: true},{answer: "D7b5",isCorrect: false},{answer: "D7b9",isCorrect: false},{answer: "Dm7b5",isCorrect: false}]
    },
    '141': {id: '141', name: "A9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 4, finger: 3},{fret: 2, finger: 1},{fret: 3, finger: 2}],
      answers: [{answer: "A9", isCorrect: true},{answer: "A11",isCorrect: false},{answer: "A6",isCorrect: false},{answer: "Amin6",isCorrect: false}]
    },
    '142': {id: '142', name: "A9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "A9", isCorrect: true},{answer: "A7sus",isCorrect: false},{answer: "A6",isCorrect: false},{answer: "Amin11",isCorrect: false}]
    },
    '143': {id: '143', name: "E9", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 2, finger: 4}],
      answers: [{answer: "E9", isCorrect: true},{answer: "E7sus",isCorrect: false},{answer: "EMaj9",isCorrect: false},{answer: "E11",isCorrect: false}]
    },
    '144': {id: '144', name: "B9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 2, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "B9", isCorrect: true},{answer: "B7#9",isCorrect: false},{answer: "B7b9",isCorrect: false},{answer: "BMaj9",isCorrect: false}]
    },
    '145': {id: '145', name: "F9", difficulty: "hard", notes: [{fret: 1, finger: 1},{fret: -1, finger: "x"},{fret: 1,finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 3},{fret: 1, finger: 4}],
      answers: [{answer: "F9", isCorrect: true},{answer: "F7#5",isCorrect: false},{answer: "F7#9",isCorrect: false},{answer: "FMaj9",isCorrect: false}]
    },
    '146': {id: '146', name: "Eb9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 1, finger: 2}],
      answers: [{answer: "Eb9", isCorrect: true},{answer: "Ebdim7",isCorrect: false},{answer: "EbMaj9",isCorrect: false},{answer: "Eb11",isCorrect: false}]
    },
    '147': {id: '147', name: "CMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 4, finger: 4},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "CMaj9", isCorrect: true},{answer: "C7b5",isCorrect: false},{answer: "C7b9",isCorrect: false},{answer: "C9",isCorrect: false}]
    },
    '148': {id: '148', name: "GMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 2, finger: 1},{fret: 3, finger: 2},{fret: 2, finger: 1}],
      answers: [{answer: "GMaj9", isCorrect: true},{answer: "G7sus",isCorrect: false},{answer: "G7b9",isCorrect: false},{answer: "G11",isCorrect: false}]
    },
    '149': {id: '149', name: "GMaj9", difficulty: "hard", notes: [{fret: 3, finger: 3},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 2, finger: 1}],
      answers: [{answer: "GMaj9", isCorrect: true},{answer: "G9",isCorrect: false},{answer: "G11",isCorrect: false},{answer: "GMaj11",isCorrect: false}]
    },
    '150': {id: '150', name: "DMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 6, finger: 4},{fret: 5, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "DMaj9", isCorrect: true},{answer: "D7b5",isCorrect: false},{answer: "DMaj11",isCorrect: false},{answer: "D9",isCorrect: false}]
    },
    '151': {id: '151', name: "AMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "AMaj9", isCorrect: true},{answer: "A9",isCorrect: false},{answer: "AMaj11",isCorrect: false},{answer: "A11",isCorrect: false}]
    },
    '152': {id: '152', name: "EMaj9", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 1,finger: 1},{fret: 1, finger: 2},{fret: 0, finger: 0},{fret: 2, finger: 4}],
      answers: [{answer: "EMaj9", isCorrect: true},{answer: "E9",isCorrect: false},{answer: "E6",isCorrect: false},{answer: "E11",isCorrect: false}]
    },
    '153': {id: '153', name: "BMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 3, finger: 4},{fret: 2, finger: 3},{fret: -1, finger: "x"}],
      answers: [{answer: "BMaj9", isCorrect: true},{answer: "B7#9",isCorrect: false},{answer: "B11",isCorrect: false},{answer: "B9",isCorrect: false}]
    },
    '154': {id: '154', name: "FMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "FMaj9", isCorrect: true},{answer: "F6",isCorrect: false},{answer: "F11",isCorrect: false},{answer: "F9",isCorrect: false}]
    },
    '155': {id: '155', name: "EbMaj9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 0, finger: 0},{fret: 3, finger: 4},{fret: 1, finger: 2}],
      answers: [{answer: "EbMaj9", isCorrect: true},{answer: "Ebdim7",isCorrect: false},{answer: "Eb9",isCorrect: false},{answer: "Eb11",isCorrect: false}]
    },
    '156': {id: '156', name: "Cmin9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 1,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Cmin9", isCorrect: true},{answer: "Cm7b5",isCorrect: false},{answer: "C7b9",isCorrect: false},{answer: "C9",isCorrect: false}]
    },
    '157': {id: '157', name: "Dmin9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 3,finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Dmin9", isCorrect: true},{answer: "Dm7b5",isCorrect: false},{answer: "D7#9",isCorrect: false},{answer: "Dmin11",isCorrect: false}]
    },
    '158': {id: '158', name: "Emin9", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 2, finger: 3}],
      answers: [{answer: "Emin9", isCorrect: true},{answer: "E9",isCorrect: false},{answer: "Emin11",isCorrect: false},{answer: "Em7b5",isCorrect: false}]
    },
    '159': {id: '159', name: "Emin9", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 4,finger: 4},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "Emin9", isCorrect: true},{answer: "Emin6",isCorrect: false},{answer: "Emin11",isCorrect: false},{answer: "Em7b5",isCorrect: false}]
    },
    '160': {id: '160', name: "C7b9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 2, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "C7b9", isCorrect: true},{answer: "C7#5",isCorrect: false},{answer: "C9",isCorrect: false},{answer: "C7b5",isCorrect: false}]
    },
    '161': {id: '161', name: "G7b9", difficulty: "hard", notes: [{fret: 3, finger: 3},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "G7b9", isCorrect: true},{answer: "G9",isCorrect: false},{answer: "G11",isCorrect: false},{answer: "Gdim7",isCorrect: false}]
    },
    '162': {id: '162', name: "D7b9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 5, finger: 3},{fret: 4, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "D7b9", isCorrect: true},{answer: "D7#5",isCorrect: false},{answer: "D9",isCorrect: false},{answer: "Dm7b5",isCorrect: false}]
    },
    '163': {id: '163', name: "B7b9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "B7b9", isCorrect: true},{answer: "B7#5",isCorrect: false},{answer: "B9",isCorrect: false},{answer: "B7b5",isCorrect: false}]
    },
    '164': {id: '164', name: "F7b9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 2},{fret: 2, finger: 1},{fret: 4, finger: 4},{fret: 2, finger: 1}],
      answers: [{answer: "F7b9", isCorrect: true},{answer: "F9",isCorrect: false},{answer: "F7#9",isCorrect: false},{answer: "FMaj9",isCorrect: false}]
    },
    '165': {id: '165', name: "Bb7b9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 0,finger: 0},{fret: 1, finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 3}],
      answers: [{answer: "Bb7b9", isCorrect: true},{answer: "Bb7#5",isCorrect: false},{answer: "Bbm7b5",isCorrect: false},{answer: "Bb7b5",isCorrect: false}]
    },
    '166': {id: '166', name: "C7#9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 4, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "C7#9", isCorrect: true},{answer: "C7#5",isCorrect: false},{answer: "C7b9",isCorrect: false},{answer: "Cm7b5",isCorrect: false}]
    },
    '167': {id: '167', name: "G7#9", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: 2, finger: 1},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"},{fret: -1, finger: "x"}],
      answers: [{answer: "G7#9", isCorrect: true},{answer: "G9",isCorrect: false},{answer: "G11",isCorrect: false},{answer: "G7b9",isCorrect: false}]
    },
    '168': {id: '168', name: "D7#9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 4,finger: 1},{fret: 5, finger: 3},{fret: 6, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "D7#9", isCorrect: true},{answer: "D7#5",isCorrect: false},{answer: "D7b9",isCorrect: false},{answer: "Dm7b5",isCorrect: false}]
    },
    '169': {id: '169', name: "A7#9", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: 4, finger: 1},{fret: 5,finger: 3},{fret: 5, finger: 4},{fret: -1, finger: "x"},{fret: -1, finger: "x"}],
      answers: [{answer: "A7#9", isCorrect: true},{answer: "A9",isCorrect: false},{answer: "A6",isCorrect: false},{answer: "Amin11",isCorrect: false}]
    },
    '170': {id: '170', name: "B7#9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "B7#9", isCorrect: true},{answer: "B7b5",isCorrect: false},{answer: "B7b9",isCorrect: false},{answer: "Bdim7",isCorrect: false}]
    },
    '171': {id: '171', name: "F7#9", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 3,finger: 2},{fret: 2, finger: 1},{fret: 4, finger: 3},{fret: 4, finger: 4}],
      answers: [{answer: "F7#9", isCorrect: true},{answer: "F9",isCorrect: false},{answer: "F7b9",isCorrect: false},{answer: "FMaj9",isCorrect: false}]
    },
    '172': {id: '172', name: "Cm7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 1},{fret: 4,finger: 3},{fret: 3, finger: 2},{fret: 4, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Cm7b5", isCorrect: true},{answer: "C7b5",isCorrect: false},{answer: "C9",isCorrect: false},{answer: "Cdim7",isCorrect: false}]
    },
    '173': {id: '173', name: "Gm7b5", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: 2, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Gm7b5", isCorrect: true},{answer: "G7b9",isCorrect: false},{answer: "G7#9",isCorrect: false},{answer: "Gdim7",isCorrect: false}]
    },
    '174': {id: '174', name: "Dm7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Dm7b5", isCorrect: true},{answer: "D7#5",isCorrect: false},{answer: "D7#9",isCorrect: false},{answer: "Ddim7",isCorrect: false}]
    },
    '175': {id: '175', name: "Dm7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 1},{fret: 6,finger: 3},{fret: 5, finger: 2},{fret: 6, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Dm7b5", isCorrect: true},{answer: "D7#5",isCorrect: false},{answer: "D7#9",isCorrect: false},{answer: "Ddim7",isCorrect: false}]
    },
    '176': {id: '176', name: "Am7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 1,finger: 1},{fret: 2, finger: 2},{fret: 1, finger: 1},{fret: 3, finger: 4}],
      answers: [{answer: "Am7b5", isCorrect: true},{answer: "A11",isCorrect: false},{answer: "Amin6",isCorrect: false},{answer: "A7sus",isCorrect: false}]
    },
    '177': {id: '177', name: "Am7b5", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 5, finger: 4},{fret: 4, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Am7b5", isCorrect: true},{answer: "A9",isCorrect: false},{answer: "Amin11",isCorrect: false},{answer: "A7sus",isCorrect: false}]
    },
    '178': {id: '178', name: "Em7b5", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "Em7b5", isCorrect: true},{answer: "Emin6",isCorrect: false},{answer: "Emin11",isCorrect: false},{answer: "Emin9",isCorrect: false}]
    },
    '179': {id: '179', name: "Bbm7b5", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: 2,finger: 3},{fret: 1, finger: 2},{fret: 2, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Bbm7b5", isCorrect: true},{answer: "Bb7#5",isCorrect: false},{answer: "Bb7b9",isCorrect: false},{answer: "Bbdim7",isCorrect: false}]
    },
    '180': {id: '180', name: "Cdim7", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 4,finger: 3},{fret: 2, finger: 1},{fret: 4, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Cdim7", isCorrect: true},{answer: "C7b5",isCorrect: false},{answer: "C9",isCorrect: false},{answer: "Cm7b5",isCorrect: false}]
    },
    '181': {id: '181', name: "Gdim7", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 2, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "Gdim7", isCorrect: true},{answer: "Gmin6",isCorrect: false},{answer: "Gm7b5",isCorrect: false},{answer: "Gmin11",isCorrect: false}]
    },
    '182': {id: '182', name: "Ddim7", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 6,finger: 3},{fret: 4, finger: 1},{fret: 6, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Ddim7", isCorrect: true},{answer: "D7b5",isCorrect: false},{answer: "D9",isCorrect: false},{answer: "Dm7b5",isCorrect: false}]
    },
    '183': {id: '183', name: "Ddim7", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 1, finger: 1},{fret: 0, finger: 0},{fret: 1, finger: 2}],
      answers: [{answer: "Ddim7", isCorrect: true},{answer: "Dmin9",isCorrect: false},{answer: "D11",isCorrect: false},{answer: "Dmin6",isCorrect: false}]
    },
    '184': {id: '184', name: "Bbdim7", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 1, finger: 1},{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "Bbdim7", isCorrect: true},{answer: "Bb7b9",isCorrect: false},{answer: "Bbm7b5",isCorrect: false},{answer: "Bb7#5",isCorrect: false}]
    },
    '185': {id: '185', name: "Ebdim7", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 1, finger: 2},{fret: 2, finger: 4}],
      answers: [{answer: "Ebdim7", isCorrect: true},{answer: "Eb9",isCorrect: false},{answer: "EbMaj9",isCorrect: false},{answer: "Eb11",isCorrect: false}]
    },
    '186': {id: '186', name: "C11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: -1,finger: "x"},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "C11", isCorrect: true},{answer: "CMaj9",isCorrect: false},{answer: "CMaj11",isCorrect: false},{answer: "C9",isCorrect: false}]
    },
    '187': {id: '187', name: "G11", difficulty: "hard", notes: [{fret: 3, finger: 4},{fret: 2, finger: 2},{fret: 0,finger: 0},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "G11", isCorrect: true},{answer: "G9",isCorrect: false},{answer: "GMaj9",isCorrect: false},{answer: "GMaj11",isCorrect: false}]
    },
    '188': {id: '188', name: "D11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: -1,finger: "x"},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1}],
      answers: [{answer: "D11", isCorrect: true},{answer: "DMaj9",isCorrect: false},{answer: "DMaj11",isCorrect: false},{answer: "D7#9",isCorrect: false}]
    },
    '189': {id: '189', name: "D11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 1},{fret: 5,finger: 1},{fret: 5, finger: 1},{fret: 5, finger: 1},{fret: 5, finger: 1}],
      answers: [{answer: "D11", isCorrect: true},{answer: "DMaj9",isCorrect: false},{answer: "D9",isCorrect: false},{answer: "Dmin6",isCorrect: false}]
    },
    '190': {id: '190', name: "A11", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 6, finger: 4},{fret: 3, finger: 1},{fret: -1, finger: "x"}],
      answers: [{answer: "A11", isCorrect: true},{answer: "AMaj9",isCorrect: false},{answer: "A9",isCorrect: false},{answer: "Amin11",isCorrect: false}]
    },
    '191': {id: '191', name: "E11", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 2, finger: 3}],
      answers: [{answer: "E11", isCorrect: true},{answer: "E9",isCorrect: false},{answer: "Emin9",isCorrect: false},{answer: "Em7b5",isCorrect: false}]
    },
    '192': {id: '192', name: "B11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 2},{fret: 1,finger: 1},{fret: 2, finger: 3},{fret: 2, finger: 4},{fret: 0, finger: 0}],
      answers: [{answer: "B11", isCorrect: true},{answer: "BMaj9",isCorrect: false},{answer: "BMaj11",isCorrect: false},{answer: "B7#9",isCorrect: false}]
    },
    '193': {id: '193', name: "Eb11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 1,finger: 1},{fret: 1, finger: 1},{fret: 2, finger: 2},{fret: 1, finger: 1}],
      answers: [{answer: "Eb11", isCorrect: true},{answer: "Ebdim7",isCorrect: false},{answer: "EbMaj9",isCorrect: false},{answer: "Eb9",isCorrect: false}]
    },
    '194': {id: '194', name: "CMaj11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 3},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 0, finger: 0},{fret: 1, finger: 1}],
      answers: [{answer: "CMaj11", isCorrect: true},{answer: "CMaj9",isCorrect: false},{answer: "C11",isCorrect: false},{answer: "C9",isCorrect: false}]
    },
    '195': {id: '195', name: "GMaj11", difficulty: "hard", notes: [{fret: 3, finger: 4},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 1, finger: 1},{fret: 2, finger: 2}],
      answers: [{answer: "GMaj11", isCorrect: true},{answer: "G9",isCorrect: false},{answer: "G11",isCorrect: false},{answer: "GMaj9",isCorrect: false}]
    },
    '196': {id: '196', name: "DMaj11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 4},{fret: 4,finger: 3},{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0, finger: 0}],
      answers: [{answer: "DMaj11", isCorrect: true},{answer: "DMaj9",isCorrect: false},{answer: "D11",isCorrect: false},{answer: "D7#9",isCorrect: false}]
    },
    '197': {id: '197', name: "BMaj11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 2, finger: 1},{fret: 4,finger: 4},{fret: 3, finger: 3},{fret: 2, finger: 2},{fret: 0, finger: 0}],
      answers: [{answer: "BMaj11", isCorrect: true},{answer: "BMaj9",isCorrect: false},{answer: "B11",isCorrect: false},{answer: "B7#9",isCorrect: false}]
    },
    '198': {id: '198', name: "C13", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 3},{fret: 5, finger: 4}],
      answers: [{answer: "C13", isCorrect: true},{answer: "C9",isCorrect: false},{answer: "C7b9",isCorrect: false},{answer: "Cdim7",isCorrect: false}]
    },
    '199': {id: '199', name: "G13", difficulty: "hard", notes: [{fret: 3, finger: 1},{fret: -1, finger: "x"},{fret: 3,finger: 2},{fret: 4, finger: 3},{fret: 5, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "G13", isCorrect: true},{answer: "G9",isCorrect: false},{answer: "G7sus",isCorrect: false},{answer: "GMaj9",isCorrect: false}]
    },
    '200': {id: '200', name: "G13", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 2, finger: 1},{fret: 0, finger: 0},{fret: 0, finger: 0}],
      answers: [{answer: "G13", isCorrect: true},{answer: "G9",isCorrect: false},{answer: "G7sus",isCorrect: false},{answer: "GMaj9",isCorrect: false}]
    },
    '201': {id: '201', name: "F13", difficulty: "hard", notes: [{fret: 1, finger: 1},{fret: -1, finger: "x"},{fret: 1,finger: 2},{fret: 2, finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "F13", isCorrect: true},{answer: "F9",isCorrect: false},{answer: "F7#9",isCorrect: false},{answer: "FMaj9",isCorrect: false}]
    },
    '202': {id: '202', name: "Cmin11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 3, finger: 2},{fret: 1,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1}],
      answers: [{answer: "Cmin11", isCorrect: true},{answer: "Cmin9",isCorrect: false},{answer: "CMaj11",isCorrect: false},{answer: "C11",isCorrect: false}]
    },
    '203': {id: '203', name: "Gmin11", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 3,finger: 3},{fret: 3, finger: 4},{fret: 1, finger: 1},{fret: 1, finger: 1}],
      answers: [{answer: "Gmin11", isCorrect: true},{answer: "Gdim7",isCorrect: false},{answer: "Gm7b5",isCorrect: false},{answer: "Gmin6",isCorrect: false}]
    },
    '204': {id: '204', name: "Dmin11", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 5, finger: 2},{fret: 3,finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1}],
      answers: [{answer: "Dmin11", isCorrect: true},{answer: "Dmin9",isCorrect: false},{answer: "DMaj11",isCorrect: false},{answer: "D9",isCorrect: false}]
    },
    '205': {id: '205', name: "Amin11", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 5,finger: 3},{fret: 5, finger: 4},{fret: 3, finger: 1},{fret: 3, finger: 1}],
      answers: [{answer: "Amin11", isCorrect: true},{answer: "AMaj9",isCorrect: false},{answer: "A9",isCorrect: false},{answer: "A11",isCorrect: false}]
    },
    '206': {id: '206', name: "Emin11", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 3, finger: 4}],
      answers: [{answer: "Emin11", isCorrect: true},{answer: "E9",isCorrect: false},{answer: "Emin9",isCorrect: false},{answer: "Em7b5",isCorrect: false}]
    },
    '207': {id: '207', name: "Gmin6", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: -1, finger: "x"},{fret: 2,finger: 1},{fret: 3, finger: 3},{fret: 3, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Gmin6", isCorrect: true},{answer: "Gdim7",isCorrect: false},{answer: "Gm7b5",isCorrect: false},{answer: "Gmin11",isCorrect: false}]
    },
    '208': {id: '208', name: "Gmin6", difficulty: "hard", notes: [{fret: 3, finger: 2},{fret: 1, finger: 1},{fret: 0,finger: 0},{fret: 0, finger: 0},{fret: 3, finger: 4},{fret: 0, finger: 0}],
      answers: [{answer: "Gmin6", isCorrect: true},{answer: "Gdim7",isCorrect: false},{answer: "Gm7b5",isCorrect: false},{answer: "GMaj9",isCorrect: false}]
    },
    '209': {id: '209', name: "Dmin6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: -1, finger: "x"},{fret: 0,finger: 0},{fret: 2, finger: 2},{fret: 0, finger: 0},{fret: 1, finger: 1}],
      answers: [{answer: "Dmin6", isCorrect: true},{answer: "Dmin9",isCorrect: false},{answer: "Dm7b5",isCorrect: false},{answer: "Dmin11",isCorrect: false}]
    },
    '210': {id: '210', name: "Amin6", difficulty: "hard", notes: [{fret: 5, finger: 2},{fret: -1, finger: "x"},{fret: 4,finger: 1},{fret: 5, finger: 3},{fret: 5, finger: 4},{fret: -1, finger: "x"}],
      answers: [{answer: "Amin6", isCorrect: true},{answer: "A7sus",isCorrect: false},{answer: "Am7b5",isCorrect: false},{answer: "Amin11",isCorrect: false}]
    },
    '211': {id: '211', name: "Amin6", difficulty: "hard", notes: [{fret: -1, finger: "x"},{fret: 0, finger: 0},{fret: 2,finger: 2},{fret: 2, finger: 3},{fret: 1, finger: 1},{fret: 2, finger: 4}],
      answers: [{answer: "Amin6", isCorrect: true},{answer: "A7sus",isCorrect: false},{answer: "Am7b5",isCorrect: false},{answer: "A11",isCorrect: false}]
    },
    '212': {id: '212', name: "Emin6", difficulty: "hard", notes: [{fret: 0, finger: 0},{fret: 2, finger: 1},{fret: 2,finger: 2},{fret: 0, finger: 0},{fret: 2, finger: 3},{fret: 0, finger: 0}],
      answers: [{answer: "Emin6", isCorrect: true},{answer: "E9",isCorrect: false},{answer: "Emin11",isCorrect: false},{answer: "Em7b5",isCorrect: false}]
    }
});
