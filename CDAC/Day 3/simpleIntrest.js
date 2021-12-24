// A file of JS in Nodejs is called as module.
/*
module.exports = function(num = 5000) {
    console.log(`Simple Intrest of ${num} is :`)
    console.log((num, r, t) => ((num*r*t)/100));
} 
*/
class SiIn{
    constructor(principle, rate, time){
        this.principle = principle;
        this.rate= rate;
        this.time = time;
    }

    getVal(){
        return `${((principle*rate* time)/100)}`
    }
}
module.exports = SiIn