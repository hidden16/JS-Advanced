function cityTaxes(name, population, treasury) {
    let object = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(Number(this.population * this.taxRate));
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury = Math.floor(this.treasury - (this.treasury * (percentage / 100)));
        }
    }
    return object;
}

const city2 = 
  cityTaxes('Tortuga',
  7000,
  15000);
console.log(city2);

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);