const People = {
    name: 'Lucas',
    age: 23,
    city: 'São Paulo',

    falar() {
        return `Olá, meu nome é ${this.name}`;
    },

    year: function(){
        return `Tenho ${this.age} anos`;
    }
}

People.name = 'Lucas Gabriel';

console.log(People.name);
console.log(People.falar());
console.log(People.year());