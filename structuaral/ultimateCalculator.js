/**
 * Adapter design pattern => To interact with incompatible types
 */
class UltimateCalculator{
    constructor(){
        this.oldCalculator = new OldCalculator();
        this.newCalculator = new NewCalculator();
        this.operations = function(term1, term2, operation) {
            switch (operation) {
                case 'multiply':
                    return {res:this.newCalculator.multiply(term1,term2)};
                case 'divide':
                    return {res:this.newCalculator.divide(term1,term2)};
                default:
                    return this.oldCalculator.operations(term1,term2,operation);
            }
        };
    }
}