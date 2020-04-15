// var elemnts = document.querySelectorAll("button").addEventListener("click",handleClick);
// //handleClick is called
// function handleClick(){
//   alert("I got Clicked");
// }


//Another way of doing it

for(var i=0;i<document.querySelectorAll(".drum").length  ; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){

        //this.style.color = "#fff";
        var button = this.innerHTML;
        makeSound(button);
        makeAnimation(button);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});


function makeSound(key){
  switch(key){
     case "w": var tom1 = new Audio("sounds/tom-1.mp3");
               tom1.play();
               break;
     case "a": var tom2 = new Audio("sounds/tom-2.mp3");
               tom2.play();
               break;
     case "s": var tom3 = new Audio("sounds/tom-3.mp3");
               tom3.play();
               break;
     case "d": var tom4 = new Audio("sounds/tom-4.mp3");
               tom4.play();
               break;
     case "j": var crash = new Audio("sounds/snare.mp3");
               crash.play();
               break;
     case "k": var crash = new Audio("sounds/crash.mp3");
               crash.play();
               break;
     case "l": var kick_bass = new Audio("sounds/kick-bass.mp3");
               kick_bass.play();
               break;
     default: break;

  }
}

function makeAnimation(key){

    var activeButton = document.querySelector("."+key);

    activeButton.classList.add("pressed");

    setTimeout( function(){
    activeButton.classList.remove("pressed");
    }, 100 );
}
