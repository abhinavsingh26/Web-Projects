// A module can have multiple kinds of logic in it like functions, data, objects and many more. 

module.exports.simpleFunc = function(){
    console.log("Testing func")
}

// new es6 syntax
class testClass{
    testFunc(){
        console.log("test Func from ES6")
    }
}

exports.newFeature = testClass
exports.developedBy = "Abhinav"
exports.developedOn = new Date("12/12/2021")
exports.objectInstance= (function(){
    let data =[];
    function testFunc(){ 
        console.log("test Func")
    }

    return{
        testFunc
    }
})();