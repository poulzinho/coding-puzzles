import { expect } from "chai"
import { orderOccurrences } from "./orderOccurrences"

describe('Order by Occurrences', () => {
    it("Should exclude null and items that start with V, also should order by value and name", () => {
        const names = ['Tomato', 'Potato', 'Pineapple', 'Tomato', 'Tomato', 'null', 'Pineapple', 'Orange', 'Vaseline'];
        const expected = ["Tomato=3", "Pineapple=2", "Potato=1", "Orange=1"];
        expect(JSON.stringify(orderOccurrences(names))).to.equal(JSON.stringify(expected));
    });
});
