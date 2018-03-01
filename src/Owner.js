class Owner{
    constructor(order){
        this.order = order;
    }

    createOrder() {
        for (var i in this.order.items) { 
            if(this.order.items.hasOwnProperty(i)){
                console.log(this.order.name + " has ordered " + this.order.items[i].name);
            }
        }
    }
}

module.exports = Owner;
