import { expect } from "chai"
import minSwapTwo from "./minSwapTwo"

describe("Min Swap Two", () => {
    it("Should return the minimum number of swaps until the array is in ascending order", () => {

        const numbers = [2, 3, 4, 1, 6];
        const expected = 3;

        expect(minSwapTwo(numbers)).to.equal(expected);
    })
});
