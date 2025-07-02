const prompt = require('prompt-sync')();

let heroiNome = prompt("Qual o nome do seu Herói?: ")
let xpHeroi = prompt("Qual o XP do seu Herói?: ")
let rank = ""
switch (true){
    case (xpHeroi < 1000):
        rank = "Ferro"
        break
    case (xpHeroi <= 2000):
        rank = "Bronze"
        break
    case (xpHeroi <= 5000):
        rank = "Prata"
        break
    case (xpHeroi <= 7000):
        rank = "Ouro"
        break
    case (xpHeroi <= 8000):
        rank = "Platina"
        break
    case (xpHeroi <= 9000):
        rank = "Ascendente"
        break
    case (xpHeroi <= 10000):
        rank = "Imortal"
        break
    default:
        rank = "Radiante"
}

console.log("O Herói de nome " + heroiNome + " está no nível de " + rank)