var Owner = require("../src/Owner");
var Order = require("../src/Order");
var Item = require("../src/Item");

describe("Owner", () => {
  it("should create an owner successfully", () => {
    var item1 = new Item("Coffee", "3.30");
    var item2 = new Item("Milk", "5.50");
    var items = [item1, item2];
    var order = new Order("Faisal", items);
    var owner = new Owner(order);
    expect(owner).toBeDefined;
    expect(owner).toBeInstanceOf(Owner);
    expect(owner.order).toEqual(order);
    owner.createOrder();
  });
});
