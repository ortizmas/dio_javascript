function gets(media) {
	if (media < 5) {
		return "Reprovado";
	}

	if (media >= 5 && media < 7) {
		return "Recuperação";
	}

	if (media >= 7) {
		return "Aprovado";
	}
}

function print(text) {
	console.log(text);
}

module.exports = { gets, print };
