var Order = require("../src/Order");
var Item = require("../src/Item");

describe('Orders', () => {
    it('Check if an order has a customer name and items that was ordered', () => {
        var item1 = new Item("Coffee", "3.30");
        var item2 = new Item("Milk", "5.50");
        var items = [item1, item2];
        var order = new Order("Faisal", items);
        expect(order.name).toEqual("Faisal");
        expect(order.items).toEqual(items);
    });
});