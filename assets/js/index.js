// async function fetchData() {
//     await fetch('https://lpgoulart-portfolio.herokuapp.com/repositories')
//         .then(response => response.json()
//         .then(data => {
//             console.log(data)
//         }))
// }

// 1 = papel
// 2 = pedra
// 3 = tesoura

house = 0
comp = 0

function play(you) {
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
        console.log(you)
        displayPe.classList.add("hide")
        displayTe.classList.add("hide")
    } else if (you == 2) {
        console.log(you)
        displayPa.classList.add("hide")
        displayTe.classList.add("hide")
    } else {
        console.log(you)
        displayPa.classList.add("hide")
        displayPe.classList.add("hide")
    }
}

function iaChoice (ia) {

    const display = document.getElementById('ia');

    if (ia == 1) {
        display.innerHTML = `<img src="./assets/img/icon-paper.svg" width="100" alt="">`
    } else if (ia == 2) {
        display.innerHTML = `<img src="./assets/img/icon-rock.svg" width="100" alt="">`
    }
     else {
        display.innerHTML = `<img src="./assets/img/icon-scissors.svg" width="100" alt="">`
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
        <span>voce</span>
        ${comp}
        <span>casa</span>
        ${house}
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