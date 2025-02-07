/**
 * 2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
    do seu IMC;
 */
class Person {
    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateIMC() {
        const imc = this.weight / (this.height ** 2);
        return imc.toFixed(2);
    }

    sayIMC() {
        return `${this.name} tem um IMC de ${this.calculateIMC()}`;
    }
}



const jose = new Person("José", 63, 1.60);
console.log(jose.sayIMC()); // Exemplo de uso