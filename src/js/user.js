export default class User {
  constructor(age, country) {
    this.age = age;
    this.agesArray = [];
    this.country = country;
    this.lifeExpectancyArray = [];
    this.pastLifeExpectancyArray = [];
  }

  calculateAge(planets) {
    planets.planetsArray.forEach(function (element) {
      this.agesArray.push(parseFloat((this.age * element.ratio).toFixed(1)));
    }, this);
  }

  calculateLifeExpectancy(planets) {

    planets.planetsArray.forEach(function (element) {
      this.lifeExpectancyArray.push(parseFloat((this.country.averageLifeExpectancy * element.ratio).toFixed(1)));
    }, this);
    if (this.age < this.country.averageLifeExpectancy) {
      return this.lifeExpectancyArray;
    } else {
      for (let i=0; i<this.agesArray.length; i++) {
        this.pastLifeExpectancyArray[i]= parseFloat((this.agesArray[i] - this.lifeExpectancyArray[i]).toFixed(1));
      }
      return this.pastLifeExpectancyArray;
    }
  }
}
