"use strict";
{
    //  start
    class Car {
        constructor(brand, model, launchYear) {
            this.brand = brand;
            this.model = model;
            this.launchYear = launchYear;
        }
        writingInfo() {
            return `Your car model is: ${this.launchYear} ${this.brand} ${this.model}`;
        }
    }
    // Sample Input:
    const result = new Car("Toyota", "Corolla", 2020);
    // Sample Output:
    console.log(result.writingInfo());
    // ("Your car model is:  2020 Toyota Corolla");
    //  end
}
