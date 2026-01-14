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
const racecar = new Car("nissan", "1992");
const cwassy = new Car("lincoln", "1980");

racecar.print();
cwassy.print();
