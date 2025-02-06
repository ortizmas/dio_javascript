// Classes

class Book {
	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}

	read() {
		return `Estou lendo ${this.title}`;
	}
}

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
    }
}

function compareBook(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

const book = new Book("Algoritmos para viver", "Brian", 500);
const otherBook = new Book("Um Exu em Nova York", "Cidinha da Silva", 100);
console.log(book);
console.log(book.read());
console.log(otherBook);

compareBook(vitor, renan);