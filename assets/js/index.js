// 1 = papel
// 2 = pedra
// 3 = tesoura

house = 0
comp = 0
games = 0

function play(you) {
    games += 1
    const ia = Math.floor(Math.random() * (4 - 1)) + 1;

    container(you)

    const restart = document.getElementById("again")
    restart.classList.remove("hide")
    const iaDiv = document.getElementById('ia');
    iaDiv.classList.remove("hide")

    iaChoice(ia)
    result(you, ia)
}

function container(you) {
    const displayPa = document.getElementById('papel');
    const displayPe = document.getElementById('pedra');
    const displayTe = document.getElementById('tesoura');

    if (you == 1) {
        displayPe.classList.add("hide")
        displayTe.classList.add("hide")
    } else if (you == 2) {
        displayPa.classList.add("hide")
        displayTe.classList.add("hide")
    } else {
        displayPa.classList.add("hide")
        displayPe.classList.add("hide")
    }
}

function iaChoice (ia) {

    const display = document.getElementById('ia');

    if (ia == 1) {
        display.innerHTML = `<div class="paper"><span><img src="./assets/img/icon-paper.svg" width="100" alt=""></span></div>`
    } else if (ia == 2) {
        display.innerHTML = `<div class="rock"><span><img src="./assets/img/icon-rock.svg" width="100" alt=""></span></div>`
    }
     else {
        display.innerHTML = `<div class="scissor"><span><img src="./assets/img/icon-scissors.svg" width="100" alt=""></span></div>`
     }
}

function result(you, ia) {

    const display = document.getElementById('result');

    if ( (you == 1 && ia == 2) || (you == 2 && ia == 3) || (you == 3 && ia == 1) ) {
        comp += 1
        display.innerHTML = "<h2>vitoria</h2>"
    }
    else if ( (you == 1 && ia == 1) || (you == 2 && ia == 2) || (you == 3 && ia == 3) ) {
        display.innerHTML = "<h2>empate</h2>"
    }
    else {
        house += 1
        display.innerHTML = "<h2>derrota</h2>"
    }
    const score = document.getElementById("score")
    score.innerHTML = `
    <div class="logo">
        JanKenPo
    </div>
    <div class="score">
        <span>YOU</span> ${comp} <br >
        <span>IA</span> ${house}
    </div>
    <div class="games">
        Games <br />
        ${games}
    </div>
    `
}

function restart() {
    const displayPa = document.getElementById('papel');
    const displayPe = document.getElementById('pedra');
    const displayTe = document.getElementById('tesoura');
    const restart = document.getElementById("again")
    restart.classList.add("hide")
    const ia = document.getElementById('ia');
    ia.classList.add("hide")

    displayPa.classList.contains("hide") == true ? displayPa.classList.toggle("hide") : null
    displayPe.classList.contains("hide") == true ? displayPe.classList.toggle("hide") : null
    displayTe.classList.contains("hide") == true ? displayTe.classList.toggle("hide") : null

}

function reset() {
    restart() 
    games = 0
    house = 0
    comp = 0
    const score = document.getElementById("score")
    score.innerHTML = `
        <div class="logo">
            JanKenPo
        </div>
        <div class="score">
            <span>YOU</span> ${comp} <br >
            <span>IA</span> ${house}
        </div>
        <div class="games">
            Games <br />
            ${games}
        </div>
        `
    
}