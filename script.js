var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var diamonds = 0;
var health = 50;

function endgame(){
  if (health < 1) {
    diamonds = 0;
    health = 50;
    document.getElementById("diamonds").innerText = "Diamonds: 0"
    document.getElementById("health").innerText = "Health: 50"
    return true
  } else {
    return false
  }
}

function onediamond(){
  let number = Math.floor(Math.random() * 100) + 1;
  if (number == 1) {
    diamonds = 0;
    health = 50;
    document.getElementById("diamonds").innerText = "Diamonds: 0"
    document.getElementById("health").innerText = "Health: 50"
    document.getElementById("text").innerText = "You got caught by the police."
  } else if (number == 2){
    let shoot = Math.floor(Math.random() * 50) + 1;
    health = health - shoot;
    let ifendgame = endgame()
    if (ifendgame == true){
      document.getElementById("text").innerText = "The police shot and you died because you didn't have enough health!"
    } else {
      document.getElementById("text").innerText = "The police shot you and you lost " + shoot + " health!"
      document.getElementById("health").innerText = "Health: " + health
    }
  } else {
    diamonds = diamonds + 1
    document.getElementById("diamonds").innerText = "Diamonds: " + diamonds
    document.getElementById("text").innerText = "You successfully caught 1 diamond!"
  }
}

function fivediamond(){
  let number = Math.floor(Math.random() * 20) + 1;
  if (number == 1) {
    diamonds = 0;
    health = 50;
    document.getElementById("diamonds").innerText = "Diamonds: 0"
    document.getElementById("health").innerText = "Health: 50"
    document.getElementById("text").innerText = "You got caught by the police."
  } else if (number == 2){
    let shoot = Math.floor(Math.random() * 50) + 1;
    health = health - shoot;
    let ifendgame = endgame()
    if (ifendgame == true){
      document.getElementById("text").innerText = "The police shot and you died because you didn't have enough health!"
    } else {
      document.getElementById("text").innerText = "The police shot you and you lost " + shoot + " health!"
      document.getElementById("health").innerText = "Health: " + health
    }
  } else {
    diamonds = diamonds + 5
    document.getElementById("diamonds").innerText = "Diamonds: " + diamonds
    document.getElementById("text").innerText = "You successfully caught 5 diamonds!"
  }
}