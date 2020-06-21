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
    }
     else {
        console.log(you)
        displayPa.classList.add("hide")
        displayPe.classList.add("hide")
     }
}

function iaChoice (ia) {

    const display = document.getElementById('ia');

    if (ia == 1) {
        display.innerHTML = "<span>papel</span>"
    } else if (ia == 2) {
        display.innerHTML = "<span>pedra</span>"
    }
     else {
        display.innerHTML = "<span>tesoura</span>"
     }
}

function result(you, ia) {

    const display = document.getElementById('result');

    if ( (you == 1 && ia == 2) || (you == 2 && ia == 3) || (you == 3 && ia == 1) ) {
        display.innerHTML = "vitoria"
    }
    else if ( (you == 1 && ia == 1) || (you == 2 && ia == 2) || (you == 3 && ia == 3) ) {
        display.innerHTML = "empate"
    }
    else {
        display.innerHTML = "derrota"
    }
    
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