let startBtn = document.querySelector('.startBtn button');
let container = document.querySelector('.container');
let songImg = document.querySelector('.songImg');
let prev = document.querySelector('#prev');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let track = document.createElement('audio');
let searchWrapper = document.querySelector('.input-section');
let InputBox = document.querySelector('.input-section');
let suggestionBox = document.querySelector('.autocom-box');
let SongContainer = document.querySelector('.songs');

startBtn.onclick =()=>{
    container.style.display = 'block';
    showMusicContent(0);
    showMusicList();
}
let index;
let QueNumber = 0;
let playing = false;
next.onclick =()=>{
    if(QueNumber < musicFolder.length-1){
        QueNumber++;
        showMusicContent(QueNumber);
        pauseSong();
        setTimeout(()=>{
           playSong();
        },1000)
    }
    else{
        alert('Happy Coding,Hope You Enjoyed The Music!!!')
    }
}
prev.onclick=()=>{
    if(QueNumber > 0){
        QueNumber--;
        showMusicContent(QueNumber);
        pauseSong();
        setTimeout(()=>{
           playSong();
        },1000)
    }
}
function showMusicContent(index){
    let singer = document.querySelector('.song-info h3');
    let song = document.querySelector('.song-info h4');

    let singerTag = ` <h3>${musicFolder[index].singer}</h3>`;
    let songTag = ` <h4>${musicFolder[index].songname}</h4>`;

    singer.innerHTML = singerTag;
    songImg.src = musicFolder[index].imgpath;
    track.src = musicFolder[index].songpath;
    song.innerHTML = songTag;
    track.load();
}
function showMusicList(){
   for(let i =0;i<musicFolder.length;i++){
    let SongUlTag = '<div class="songplayed">'+
    '<img src="'+musicFolder[i].imgpath+'">'+
        '<div class="songplayed-info">'+
            '<h3>'+musicFolder[i].singer+'</h3>'+
            '<h4>'+musicFolder[i].songname+'</h4>'+
         '</div>'+
    '</div>';
    SongContainer.insertAdjacentHTML('beforeend',SongUlTag);
   }
}

play.onclick =()=>{
    if(playing == false){
        playSong();
    }
    else{
        pauseSong();
    }
}

function playSong(){
    playing = true;
    track.play();
    play.src = '/Images/pause.png';
}
function pauseSong(){
    playing = false;
    track.pause();
    play.src = '/Images/play.png';
}
track.addEventListener('ended',()=>{
    if(QueNumber < musicFolder.length-1){
        QueNumber++;
        showMusicContent(QueNumber);
        playSong();
        progressWidth.style.width = `${ProgressTime}%`;
    }
})

const progressWidth = document.querySelector('.progressWidth');

track.addEventListener('timeupdate',(e)=>{
    let currentTime = e.target.currentTime;
    let duration = e.target.duration;
    let ProgressTime = (currentTime/duration)*100;

    progressWidth.style.width = `${ProgressTime}%`;
});

InputBox.onkeyup =(e)=>{
    let UserData = e.target.value;
    let emptyArray = [];

    if(UserData){
        emptyArray = musicFolder.filter((data)=>{
            return data.songname.toLocaleLowerCase().includes(UserData.toLocaleLowerCase());
        })
       // console.log(emptyArray);
        emptyArray = emptyArray.map((data)=>{
            return '<li>'+
                        '<img src="'+data.imgpath+'">'+
                            '<div class="search-info">'+
                                '<h3>'+data.singer+'</h3>'+
                                '<h4>'+data.songname+'</h4>'+
                            '</div>'+                           
                    '</li>';
        });
        console.log(emptyArray)
        searchWrapper.classList.add('active');
        showList(emptyArray);
    }
    else{
        searchWrapper.classList.remove('active');
    }
}

function showList(list){
    let ListData;
    if(!list.length){
        InputBox.value = userValue;
        ListData = `<li>${userValue}</li>`;
    }
    else{
        ListData = list.join('');
    }
    suggestionBox.innerHTML = ListData;
}

const image = document.querySelector('.image');
const title = document.querySelector('.title');
const Description = document.querySelector('.Description');
const animatedText = document.querySelectorAll('.animated-text');
const animatedImg = document.querySelectorAll('.animated-img');

setTimeout(()=>{
   image.innerHTML = '<img src="'+musicFolder[0].imgpath+'"alt="">';
   title.innerHTML = 'JIMMY MWANGI';
   Description.innerHTML = 'Enjoy the music';

   for(let i=0;i<animatedImg.length;i++){
       animatedImg[i].classList.remove('animated-img');
   }   
   for(let i=0;i<animatedText.length;i++){
       animatedText[i].classList.remove('animated-text');
   }
},3500)

let AlbumBtn = document.querySelector('#AlbumBtn');
let SongBtn = document.querySelector('#SongBtn');
let artist = document.querySelector('.artist');
let line = document.querySelector('.line');

SongBtn.onclick =()=>{
    SongContainer.style.display = 'block';
    artist.style.display = 'none';
    line.style.transform = 'translateX(70px)';
}
AlbumBtn.onclick =()=>{
    SongContainer.style.display = 'none';
    artist.style.display = 'block';
    line.style.transform = 'translateX(0px)';
}
const shuffleBtn = document.querySelector('#shuffleBtn');

shuffleBtn.onclick = function(){
    let randomIndex = Math.floor((Math.random()*musicFolder.length )+ 1);
  do{
    randomIndex = Math.floor((Math.random()*musicFolder.length) + 1);
  }while(index === randomIndex)
  index = randomIndex;
  showMusicContent(index);
  playSong();
}