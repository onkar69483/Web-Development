for(var i=0; i<document.querySelectorAll("button.drum").length; i++){
    var buttonEvent = document.querySelectorAll("button")[i]

    buttonEvent.addEventListener("click", function(){    
        buttonText = this.textContent
        buttonAnimation(buttonText)
        PlayAudio(buttonText)
    })
}

document.addEventListener("keydown", function(event){
    buttonAnimation(event.key);
    PlayAudio(event.key)
})

document.addEventListener("keyup", function(event){
    var capsLockOn = event.getModifierState('CapsLock');
    if(capsLockOn && event.key!="CapsLock") {
        alert("Disable CapsLock!")
    } 
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

document.querySelector(".rndSound").addEventListener("click", function(){
    soundPath = ["sounds/tom-1.mp3", "sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3","sounds/kick-bass.mp3"]
    keys = ['w','a','s','d','j','k','l']
        interval = setInterval(function(){
            randomNum = (Math.floor(Math.random()*7))
            buttonAnimation(keys[randomNum])
            audio = new Audio(soundPath[randomNum])
            audio.play() 
        },250)
        setTimeout(function(){
            clearInterval(interval)
        },5000)    
})