/**
 * Factory design pattern => to work with different subclasses  at run time
 */
class PersonFactory {
    constructor() {
    this.createPerson = function(type) {
      switch (type) {
        case "person":
          return new Person("Shiva");
        case "shopper":
          return new Shopper("Alex Banks", 100);
        case "employee":
          return new Employee("Eve Porcello", 100, "EPAM");
          default:
              throw('Unknown object type');
    }
  }
}
}
