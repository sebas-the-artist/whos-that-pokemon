class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  getAge() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
  print() {
    console.log(
      ` This Fuckin ${this.year} ${this.brand} Is ${this.getAge()} years old `
    );
  }
}
const racecar = new Car("Honda", "1992");
const cwassy = new Car("Lincoln", "1983");

racecar.print();
cwassy.print();
