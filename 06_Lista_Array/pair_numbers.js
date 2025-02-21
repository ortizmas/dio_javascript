// Imprimir los números pares de un array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\n");
console.log("Números pares: ");
for (let index = 0; index < numbers.length; index++) {
	const number = numbers[index];
	if (number % 2 === 0) {
		console.log(number);
	}
}

console.log("\n");
console.log("Números impares: ");
for (let index = 0; index < numbers.length; index++) {
	const number = numbers[index];
	if (number % 2 === 1) {
		console.log(number);
	}
}
