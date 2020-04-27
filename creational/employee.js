 /**
 * Singleton design pattern => To restrict the instances of a class to max of 1 
 */
 class Employee extends Shopper{
  
    constructor(name,money,employer){
        if(!Employee.instance){
            super(name,money);
            this.employerName = employer;
            this.employed = true;
            Employee.instance = this;
        }else{
            console.warn('Employee should  initialize only once...')
        }
     
        return Employee.instance;
        
    }
}