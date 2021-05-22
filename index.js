var noOfButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<noOfButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    makeAnime(this.innerHTML);
    this.style.color = "black";
    var myvar = this;
    setTimeout(function(){ myvar.style.color = "#DA0463"; }, 100);
    playMusic(this.innerHTML);
  });
}
document.addEventListener("keydown",function (){
  var classPath = "."+event.key;
  makeAnime(event.key);
  document.querySelector(classPath).style.color = "black";
   setTimeout(function(){ document.querySelector(classPath).style.color = "#DA0463"; }, 100);
  playMusic(event.key);
});

function makeAnime(key)
{
  var myvar = document.querySelector("."+key);
  myvar.classList.add("pressed");
  setTimeout(function (){
    myvar.classList.remove("pressed");
  },100)
}
function playMusic(key)
{
  var butt = key;
  switch(butt)
  {
    case "w" :
       var audio = new Audio("tom-2.mp3");
       audio.play();
       break;
    case "a":
       var audio = new Audio("tom-1.mp3");
       audio.play();
       break;
    case "s":
       var audio = new Audio("snare.mp3");
       audio.play();
       break;
    case "d":
       var audio = new Audio("tom-3.mp3");
       audio.play();
       break;
     case "j":
       var audio = new Audio("crash.mp3");
       audio.play();
       break;
    case "k" :
       var audio = new Audio("tom-4.mp3");
       audio.play();
       break;
    case "l" :
        var audio = new Audio("kick-bass.mp3");
        audio.play();
        break;
    default : console.log("click the right button");
  }
}
