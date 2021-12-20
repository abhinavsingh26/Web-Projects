module.exports = (function(){
    let cart = [];

    function addItem(item){
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