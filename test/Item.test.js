var Item = require("../src/Item");
describe('Item', () => {
    it('should have a name and price', () => {
        var myItem = new Item("Coffee", "3.50");
        expect(myItem.name).toEqual("Coffee");
        expect(myItem.price).toEqual("3.50");
    });
});