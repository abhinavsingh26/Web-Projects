// A file of JS in Nodejs is called as module.

module.exports = function(num = 5000) {
    console.log(`Simple Intrest is :`)
    const subfunc = (p, r, t) => ((p*r*t)/100);
    console.log('subfunc')
}