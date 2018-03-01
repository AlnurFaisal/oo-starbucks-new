var Menu = require("../src/Menu");
var Item = require("../src/Item");
describe("Menu", () => {
  it("should have a list of items", () => {
    var item1 = new Item("Coffee", "3.50");
    var item2 = new Item("Tea", "1.20");
    var items = [item1, item2];
    var menu = new Menu(items);

    expect(menu.items).toEqual(items);
  });
});
