function main() {
	console.log(" ---- Calculo do IMC ----");

	const weight = 63;
	const height = 1.60;

	const imc = calculateImc(weight, height);
	console.log(`IMC ${imc.toFixed(2)} Você está com ${clasificationImc(imc)}`);
}

function calculateImc(weight, height) {
	const imc = weight / (height ** 2);
	return imc;
}

function clasificationImc(imc) {
	if (imc < 18.5) {
		return "Abaixo do peso";
	}

	if (imc < 24.9) {
		return "Peso normal";
	}

	if (imc < 29.9) {
		return "Sobrepeso";
	}

	if (imc < 34.9) {
		return "Obesidade grau 1";
	}

	if (imc < 39.9) {
		return "Obesidade grau 2";
	}

	return "Obesidade grau 3";
}

main();
