import { expect } from "chai"
import sayHello from "./app"

describe("app", () => {
    describe("sayHello function", () => {
        it("should say Welcome to Coding Puzzles in JavaScript!", () => {
            const str = sayHello();
            expect(str).to.equal("Welcome to Coding Puzzles in JavaScript!")
        })
    })
});
