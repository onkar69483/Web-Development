var randomnumber1 = Math.ceil(Math.random()*6)
var randomnumber2 = Math.ceil(Math.random()*6)
var img1src = "./images/dice" + randomnumber1 + ".png"
var img2src = "./images/dice" + randomnumber2 + ".png"
document.querySelector(".img1").setAttribute("src", img1src)
document.querySelector(".img2").setAttribute("src", img2src)

if (randomnumber1>randomnumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!!"
} else if(randomnumber1===randomnumber2){
    document.querySelector("h1").textContent = "Draw!!"
}else{
    document.querySelector("h1").textContent = "Player 2 Wins!!"
}