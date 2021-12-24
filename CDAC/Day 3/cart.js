module.exports = (function(){
    let cart = []; // Data is private to the module.
    // It is not available to the outside world.

    function addItem(item){ //Function created in the module are private, 
        //U must expose them using an object notation.
        cart.push(item)
    }

    function get(){
        return cart;
    }
    
    return{
        addToCart : addItem,
        getAll : get
    }
})();