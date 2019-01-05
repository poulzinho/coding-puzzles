import { expect } from "chai"
import twoSum from "./twoSum"

describe("Two sum", () => {
    it("Should return the index of two numbers (in an array) that add up to the target", () => {

        const numbers = [2, 7, 11, 15];
        const target = 9;
        const expected = [0, 1];

        expect(twoSum(numbers, target).toString()).to.equal(expected.toString());
    })
});
