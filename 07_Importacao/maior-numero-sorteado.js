/**
 * una sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100.
 * faça um programa que leia os 5 numeros sorteados e imprima o maior numero sorteado.
 *
 * Dados de entrada:
 * 5
 * 50
 * 10
 * 98
 * 23
 *
 * Saída esperada:
 * 98
 */

function gets() {
	entrada = [5, 50, 10, 98, 23];
	maior = 0;

	for (i = 0; i < entrada.length; i++) {
		if (entrada[i] > maior) {
			maior = entrada[i];
		}
	}

	console.log(maior);
}

function print() {
	console.log("print");
}

module.exports = { gets, print };
