module.exports = function(num = 10) {
    console.log(`Simple Intrest is :`)
    const subfunc = (p, r, t) => ((p*r*t)/100);
    console.log('subfunc')
}

table= function(num1=10){ //by default it will take 10 , if num1 is not defined in table function -- refer line 14 
    console.log(`Table for ${num1} is :`)
    for(let index=1 ; index<= 10; index++ ){
        console.log(`${num1} X ${index} = ${num1 * index}`)
    }// interpolation syntax of java script
}

table(7)