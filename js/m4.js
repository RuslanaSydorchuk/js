const cart = {
    items: [],
    getItems(){
        return this.items;
    },
    add(product){
        return this.items.push(product)
    },
    remove(productName){
        for(item of this.items){
        
    },
    // clear(){},
    // countTotalPrice(){},
    // increaseQuantity(){},
    // decreaseQuantity(){},
};

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
console.table(cart.getItems())
cart.remove('🍎')