interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer={
    audioVolume: 90,
    songDuration: 36,
    song:"Kill my time",
    details:{
        author: "5SOS",
        year: 2022
    }
}

const song = "New Song";


//1
//const { song:anotherSong, songDuration: duration, details:{author} } = audioPlayer;
//1
//const { song:anotherSong, songDuration: duration, details:details } = audioPlayer;
//2
const { song:anotherSong, songDuration: duration, details } = audioPlayer;
//1
//const { author:author } = details;
//2
const { author } = details;



//console.log('Audio player . Song: ', audioPlayer.song);
//console.log('AnotherSong: ', anotherSong);
//console.log('Song duration: ', audioPlayer.songDuration);
//console.log('Duration: ', duration);
//console.log('Audio Player Author: ', audioPlayer.details.author);
//console.log('Author: ', author);


const [ , , trunks = 'Not found']: string[] = ['Willy','Vegeta'];

//const trunks = dbz[3] || 'No hay personaje';

console.error('Personaje 3:',trunks);


export {};