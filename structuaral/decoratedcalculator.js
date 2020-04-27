class DecoratedCalculator{
    constructor(calculator){
        this.calculator = calculator;
      
    }
    operations = function(term1,term2,operation){
        console.log(term1,term2,operation);
       return this.calculator.operations(term1,term2,operation);
    }
}