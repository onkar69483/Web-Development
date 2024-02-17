for(var i=0; i<document.querySelectorAll("button").length; i++){
    var buttonEvent = document.querySelectorAll("button")[i]

    buttonEvent.addEventListener("click", function(){    
        buttonText = this.textContent
        buttonAnimation(buttonText)
        PlayAudio(buttonText)
    })
}

document.addEventListener("keypress", function(event){
    buttonAnimation(event.key);
    PlayAudio(event.key)
})

function PlayAudio(text) {
    path = "sounds/"
    if(text === "w") path += "tom-1.mp3"
    else if(text === 'a') path += "tom-2.mp3"
    else if(text === 's') path += "tom-3.mp3"
    else if(text === 'd') path += "tom-4.mp3"
    else if(text === 'j') path += "snare.mp3"
    else if(text === 'k') path += "crash.mp3"
    else if(text === 'l') path += "kick-bass.mp3"
    audio = new Audio(path)
    audio.play()
}

function buttonAnimation(text){
    var activeButton = document.querySelector("."+text)
    activeButton.classList.toggle("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)
}