const lista = [13, 11, 5, 3, 4, 10, 8];
let i = 0;
function gets() {
	const valor = lista[i];
	i++;
	return valor;
}

function print(text) {
	console.log(text);
}

module.exports = { gets, print };
