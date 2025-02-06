/**
 * 1) Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percurso.
 */

class Car {
    constructor(brand, color, fuelConsumption) {
        this.brand = brand;
        this.color = color;
        this.fuelConsumption = fuelConsumption; // gasto médio de combustível por km
    }

    calculateTripCost(distance, fuelPrice) {
        const cost = distance * this.fuelConsumption * fuelPrice;
        return `O valor gasto será de R$ ${cost.toFixed(2)}`;
    }
}

const myCar = new Car("Toyota", "Prata", 0.15);
console.log(myCar.calculateTripCost(100, 5.79)); // Exemplo de uso