// Faça um programa para calcular o valor de uma viagem

/* 
    Você terá 3 variáveis:
    1. Preço do combustível
    2. Gasto medio de combustível por km
    3. Distancia em KM da viagen
 */

// Imprima no console o valor da viagem
// Exemplo:

const fuel_price = 5.79;
const fuel_average = 10;
const distance = 100;

const trip_cost = (distance / fuel_average) * fuel_price;
const formatted_trip_cost = `R$ ${trip_cost.toFixed(2)}`;
console.log(formatted_trip_cost);