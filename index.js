//click
var dleng=document.querySelectorAll(".drum").length;
for (var i=0;i<dleng; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML= this.innerHTML;
    makesound(buttonInnerHTML);
    btnanimation(buttonInnerHTML);
});
}
//keyboard
document.addEventListener("keypress", function(event) {
  makesound(event.key);
  btnanimation(event.key);
});

function makesound(key)
{
  switch (key) {
    case "w":
         var audio = new Audio("sounds/tom-1.mp3");
         audio.play();
         break;
    case "a":
        var audio2=new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;
    case "s":
        var audio3=new Audio("sounds/tom-3.mp3");
        audio3.play();
        break;
    case "d":
        var audio4=new Audio("sounds/tom-4.mp3");
        audio4.play();
        break;
    case "j":
        var kick=new Audio("sounds/crash.mp3");
        kick.play();
        break;
    case "k":
        var crash=new Audio("sounds/kick-bass.mp3");
        crash.play();
        break;
    case "l":
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
    default:console.log(key);
    }
}
function btnanimation(current)
{
  var activebtn=document.querySelectorAll("."+current);
  activebtn.classList.add("pressed");
  setTimeout(function(){
    activebtn.classList.remove("pressed")
  },100);
}
