let musicFolder = [
    {
      imgpath:"/Images/1.jpg",
      songpath:"/Songs/song1.mp3",
      songname:"Closer(www.Songslover.com)",
      singer:"The ChainSmokers",
    },
    {
        imgpath:"/Images/2.jpg",
        songpath:"/Songs/song2.mp3",
        songname:"I'm In Control",
        singer:"Aluna George",
      },
      {
        imgpath:"/Images/3.jpg",
        songpath:"/Songs/song3.mp3",
        songname:"Levels",
        singer:"Avicii",
      },
      {
        imgpath:"/Images/4.jpg",
        songpath:"/Songs/song4.mp3",
        songname:"Bang My Head",
        singer:"David Guetta ft Sia(Official Music Video)",
      },
      {
        imgpath:"/Images/5.jpg",
        songpath:"/Songs/song5.mp3",
        songname:"Bitches 'n' Marijuana",
        singer:"Chris Brown ft Tyga",
      },
      {
        imgpath:"/Images/6.jpg",
        songpath:"/Songs/song6.mp3",
        songname:"Titanium",
        singer:"David Guetta ft Sia(Official Music Video)",
      },
      {
        imgpath:"/Images/7.jpg",
        songpath:"/Songs/song7.mp3",
        songname:"Blank",
        singer:"Disfigure[NCS Release]",
      },
      {
        imgpath:"/Images/8.jpg",
        songpath:"/Songs/song8.mp3",
        songname:"Fearless[NCS Official Release]",
        singer:"Lost Sky",
      },
      {
        imgpath:"/Images/background.jpg",
        songpath:"/Songs/song9.mp3",
        songname:"Heal The World",
        singer:"Michael Jackson",
      },
      {
        imgpath:"/Images/bg1.png",
        songpath:"/Songs/song10.mp3",
        songname:"Heroes Tonight",
        singer:"Janji(Official NCS Release)",
      },
      {
        imgpath:"/Images/bg2.png",
        songpath:"/Songs/song11.mp3",
        songname:"Fast",
        singer:"Juice World",
      },
      {
        imgpath:"/Images/bg3.png",
        songpath:"/Songs/song12.mp3",
        songname:"Righteous",
        singer:"Juice World",
      },
      {
        imgpath:"/Images/9.jpg",
        songpath:"/Songs/song13.mp3",
        songname:"FireStone",
        singer:"Kygo ft Conrad Sewell(Official Music Video)",
      },
      {
        imgpath:"/Images/a.jpg",
        songpath:"/Songs/song14.mp3",
        songname:"Dreams pt.||",
        singer:"Lost Sky feat (Sara Skinner)",
      },
      {
        imgpath:"/Images/b.jpg",
        songpath:"/Songs/song15.mp3",
        songname:"Hold My Hand",
        singer:"Michael Jackson ft Akon",
      },
      {
        imgpath:"/Images/c.jpg",
        songpath:"/Songs/song16.mp3",
        songname:"Not For Radio",
        singer:"Nas ft Puff Daddy",
      },
      {
        imgpath:"/Images/d.jpg",
        songpath:"/Songs/song17.mp3",
        songname:"The Night Is Still Young",
        singer:"Nicki Minaj",
      },
      {
        imgpath:"/Images/e.jpg",
        songpath:"/Songs/song18.mp3",
        songname:"Feel Good",
        singer:"Syn Cole",
      },
      {
        imgpath:"/Images/f.jpg",
        songpath:"/Songs/song19.mp3",
        songname:"PETIT BISCUIT",
        singer:"Sunset Lover",
      },
      {
        imgpath:"/Images/img7.jpg",
        songpath:"/Songs/song20.mp3",
        songname:"Do it Again",
        singer:"Pia Mia ft Chris Brown & Tyga",
      },
]

 let weather ={
     date:"July",
     state:'Cloudy',
     prediction:'Tomorrow Will Be Cloudy',

     showWeather:function(){//this works only when using function keyword not with arrow function because they don't have its own 'this'
         console.log(`State of weather is ${this.date} and also ${this.state} and the prediction is ${this.prediction}`);//This is used to access object properties
     }
 };
 weather.showWeather();

 let weather2 = {
     date:"February",
     state:"Rainy",
     prediction:'It will Be a long Dry Season',
 }

 weather.showWeather.apply(weather2)//apply method is used to write a method that can be used on different objects
//Apply also takes its arguements as arrays


// let p = new Promise((response,reject)=>{
//    let age = 23;
//    if(age >20){
//      response('Qualified');
//    }
//    else{
//      reject('UnderAge');
//    }
// })
// p.then((message)=>{
//   console.log('You are '+message);
// })
// .catch((message)=>{
//   console.log('You are'+message);
// })

//Prototype -- > IT is a property that allows objects to inherit from one another

let vehicle = {
   name:'Honda Vitz',
    speed:"175km/h",

  drive:function(name,speed){
    console.log(`The ${this.name} has a speed of ${this.speed}`);
  }
}

let train = {
  name:'Bullet',
  speed:'350m/h',
}

vehicle.drive();
//vehicle.drive.call(train,'Honda Vitz','165km/h');
//Call function is very similar to apply only that its arguements are passed individually while apply passes them in an array format
//Bind function creates a new function thar,when called,has its 'this' keyword set to provided value,with a given sequence of arguements preceeding any provided when called
//vehicle.drive.apply(train,["Honda","140km/h"])
vehicle.drive.apply(train);
//Prototypes
//Object.setPrototypeOf(train,vehicle)
//train.drive();

// let TotalTime = 30;

// const timer = setInterval(updatetime,1000)

// function updatetime(){
//   if(TotalTime >= 0){
//     let seconds = TotalTime;
    
//     console.log(`Time ${00}m:${seconds}s`);
//     TotalTime--;
//    }
//    else{
//      console.log('Take A rest,The next 20seconds');
//      clearInterval(timer);
//      setTimeout(()=>{
//        console.log('Happy Coding!!!');
//      },1500)
//    }
// }