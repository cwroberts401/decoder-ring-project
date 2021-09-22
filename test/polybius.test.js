const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

    describe("polybiusSquare ()", () => {
        it("should return i and j as 42 when encoding message", () => {
            const input = "jive";
            const expected = "42421551";
            const actual = polybiusModule.polybius(input);
            expect(actual).to.equal(expected);
        });
        it("should return (i/j) when decoding 42", () => {
            const input = "42";
            const actual = polybiusModule.polybius(input,false);
            expect(actual).to.include(["ij"]);
        });
        it("should return same result for capitalized and lowercase messages", () => {
            const inputA = "test";
            const inputB = "TEST"
            const lowercase = polybiusModule.polybius(inputA);
            const capitalized = polybiusModule.polybius(inputB);
            expect(lowercase).to.be.equal(capitalized);
        });
        it("should maintain spaces when encoding string", () => {
            const input = "test out";
            const expected = "44513444 435444";
            const actual = polybiusModule.polybius(input);
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces when decoding string", () => {
            const input = "44513444 435444";
            const expected = "test out";
            const actual = polybiusModule.polybius(input,false);
            expect(actual).to.equal(expected);
        });

    });