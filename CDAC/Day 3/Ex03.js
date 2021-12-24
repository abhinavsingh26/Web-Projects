
const cart = require("./cart")
let shoppingCart = require("./cart")

cart.addToCart({'id':1, 'name':"Samsung Note 10",'price': 45000})
cart.addToCart({'id':2, 'name':"Samsung Ace",'price': 34000})
cart.addToCart({'id':3, 'name':"Samsung galexy",'price': 2000})
cart.addToCart({'id':4, 'name':"nokia",'price': 56000})
cart.addToCart({'id':5, 'name':"iphone",'price': 78000})

const itemsPur= cart.getAll();
itemsPur.forEach((e) => console.log(e))
/* Similer to above
for (const item of itemsPur) {
    console.log(item)
} 
*/ 

for (const item of itemsPur){
    console.log(`${item.name} costs ${item.price}`)
}