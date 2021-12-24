const app = require("./multipleContentModule")
console.log(`This program was developed by ${app.developedBy} on ${app.developedOn}`)

const testComponent = app.objectInstance
testComponent.testFunc();

const es6Component = new app.newFeature();
es6Component.testFunc();

 