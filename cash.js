// ALGARISMO GANANCIOSO

alert("Algoritmo Ganancioso!")
let troco
const umQuarto = 25
const umDecimo = 10
const umVigesimo = 5
const umCentesimo = 1

// Entrada do valor do troco apenas inteiros positivos
do {
    troco = prompt("Insira o troco devido: ")

    if (troco <= 0) {
        alert("Por favor insira um valor válido!")
    }
} while (troco <= 0)

let centavos = [ umQuarto, umDecimo, umVigesimo, umCentesimo ]
let qtyMoney = 0
let trocoInt = troco * 100

for (let i = 0; i < 4; i++) {
    if (trocoInt >= centavos[i]) {
        qtyMoney += parseInt(trocoInt / centavos[i])
        trocoInt = trocoInt % centavos[i]
    }
}

document.write(`Quantidade de Moedas: ${qtyMoney}`)
