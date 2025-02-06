/**
 * Calcula o IMC de uma pessoa
 * Abaixo de 18.5: Abaixo do peso
 * Entre 18.5 e 24.9: Peso normal
 * Entre 25 e 29.9: Sobrepeso
 * Entre 30 e 34.9: Obesidade grau 1
 * Entre 35 e 39.9: Obesidade grau 2
 * Acima de 40: Obesidade grau 3
 * Meu peso es de 48 - 64
 */

const peso = 64;
const altura = 1.60;

const imc = peso / (altura ** 2);

console.log(imc);
