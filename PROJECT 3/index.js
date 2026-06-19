let homeScore = 0
let guestScore =0



let countEl = document.getElementById("count-el")
let guestEl = document.getElementById("guest-el")

function homeadd1(){
    console.log("clicked")
    homeScore += 1;
  countEl.innerText= homeScore;
}

function homeadd2(){
    console.log("clicked")
    homeScore += 2;
  countEl.innerText = homeScore;
}

function homeadd3(){
    console.log("clicked")
    homeScore += 3;
  countEl.innerText = homeScore;
}

function guestadd1() {
    guestScore += 1;
    guestEl.innerText = guestScore;
}

function guestadd2() {
    guestScore += 2;
    guestEl.innerText = guestScore;
}

function guestadd3() {
    guestScore += 3;
    guestEl.innerText = guestScore;
}