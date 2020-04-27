
/**
 * chain of responsibility pattern
 */
class CumulativeSum{
constructor(){
    this.sum = 0;
}
add = function(val){
    this.sum+=val;
    return this; 
}

}
