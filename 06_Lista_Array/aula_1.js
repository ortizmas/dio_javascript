/**
 * LISTA (ARRAY)
 */
const student = []; // Array vazio
student[0] = "Lucas"; // Adiciona na posição 0
student[1] = 23;
student[2] = "São Paulo";
student.push("Desenvolvedor"); // Adiciona no final do array
student.unshift("Estudante"); // Adiciona no início do array
student.pop(); // Remove o último elemento do array
student.shift(); // Remove o primeiro elemento do array
student[1] = 24; // Altera o valor da posição 1

console.log(student);
console.log(`Olá, meu nome é ${student[0]}`);

const weekDays = [
	"Domingo",
	"Segunda",
	"Terça",
	"Quarta",
	"Quinta",
	"Sexta",
	"Sábado",
];

console.log(weekDays);
console.log(`Hoje é ${weekDays[5]}-feira`);
console.log(`Amanhã é ${weekDays[9]}-feira`);
console.log(weekDays.length);

for (const day of weekDays) {
	console.log(day);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30];

let sum = 0;
for (const number of numbers) {
	sum += number;
}
console.log(`A soma é ${sum}`);

let total = 0;
for (let index = 0; index < numbers.length; index++) {
	const element = numbers[index];
	total += element;
	console.log(`A nota ${index + 1} é ${element}`);
}

const avarage = total / numbers.length;
console.log(`A media é ${avarage.toFixed(2)}`);
