
const cart = require("./cart")
let shoppingCart = require("./cart")

cart.addToCart({'id':1, 'name':"Samsung Note 10",'price': 45000})
cart.addToCart({'id':2, 'name':"Samsung Ace",'price': 34000})
cart.addToCart({'id':3, 'name':"Samsung galexy",'price': 2000})
cart.addToCart({'id':4, 'name':"nokia",'price': 56000})
cart.addToCart({'id':5, 'name':"iphone",'price': 78000})

const items = cart.getAll();
for(const item of items){
    console.log(item)
}

items.forEach((everyElement) => console.log(everyElement.name));

itemsPurchased.forEach(function(eachItem){
    console.log(eachItem)
}

for (const item of itemsPurchased){
    console.log(`${item.name} costs ${item.price}`)
}