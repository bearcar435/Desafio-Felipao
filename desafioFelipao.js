const prompt = require('prompt-sync')();

let heroiNome = prompt("Qual o nome do seu Herói?: ")
let xpHeroi
let rank = ""
while(true){
    xpHeroi = prompt("Qual o XP do seu Herói?: ")
    if (!isNaN(xpHeroi) && xpHeroi !== "" && Number(xpHeroi) >= 0){
        xpHeroi = Number(xpHeroi)
        break
    }
    else {
        console.log("Digite um numero válido!")
    }
}
    if (xpHeroi < 1000){
        rank = "Ferro"
    }
        else if (xpHeroi <= 2000){
            rank = "Bronze"
        }
        else if (xpHeroi <= 5000){
            rank = "Prata"
        }
        else if (xpHeroi <= 7000){
            rank = "Ouro"
        }
        else if (xpHeroi <= 8000){
            rank = "Platina"
        }
        else if (xpHeroi <= 9000){
            rank = "Ascendente"
        }
        else if (xpHeroi <= 10000){
            rank = "Imortal"
        }
        else{
            rank = "Radiante"
        }
console.log("O Herói de nome " + heroiNome + " está no nível de " + rank)