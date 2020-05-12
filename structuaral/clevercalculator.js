/**
 * proxy pattern 
 * memorize
 */

class CleverCalculator {
  constructor() {
    this.ultimateCalculator = new UltimateCalculator();
    this.cache = {};
  }
  operations = function (term1, term2, operation) {
    const key = `${term1}${term2}${operation}`;
    if (this.cache[key]) {
      return this.cache[key];
    } else {
      const res = this.ultimateCalculator.operations(term1, term2, operation);
      this.cache[key] = res;
      return res;
    }
  };
}
