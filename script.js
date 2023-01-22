console.log("Welcome to spotify")

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3')
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warri yo - Mortals [NCS Release] ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma - Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Re1ease", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
];

songsItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    //Update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e);
    })
})