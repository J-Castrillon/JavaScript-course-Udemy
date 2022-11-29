'use strict';

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }

    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  

  let myCar = new Car("Ford", 2020);
  console.log(`Mi carro tiene ${myCar.age()} años`);

  let fecha = new Date();
  let año = fecha.getFullYear();
  console.log(año);
