const caesarModule = require("../src/caesar");
const expect = require("chai").expect;

    describe("caesarShift ()", () => {
        it("should return false if the shift value is equal to zero", () => {
            const input = "string";
            const shift = 0;
            const actual = caesarModule.caesar(input, shift, encode = true);
            expect(actual).to.be.false;
        }); 
        it("should return false if the shift value is less than -25", () => {
            const input = "string";
            const shift = -26;
            const actual = caesarModule.caesar(input, shift, encode = true);
            expect(actual).to.be.false;
        });
        it("should return false if the shift value is greater than 25", () => {
            const input = "string";
            const shift = 28;
            const actual = caesarModule.caesar(input, shift, encode = true);
            expect(actual).to.be.false;
        });
        it("should return false if the shift value is not present", () => {
            const input = "string";
            const shift = "";
            const actual = caesarModule.caesar(input, shift, encode = true);
            expect(actual).to.be.false;
        });
        it("should return the same result regardless of capitalization", () => {
            const input = "AppLES";
            const shift = 2;
            const expected = "crrngu";
            const actual = caesarModule.caesar(input, shift, encode = true);
            expect(actual).to.equal(expected);
        });
        it("should handle shifts that go past the end of the alphabet", () => {
            const input = "xray";
            const shift = 4;
            const expected = "bvec";
            const actual = caesarModule.caesar(input, shift, encode = true);
            expect(actual).to.equal(expected);
        });
        it("should mantain spaces and nonalphabetic symbols", () => {
            const input = "dollar $";
            const shift = 2;
            const expected = "fqnnct $";
            const actual = caesarModule.caesar(input, shift, encode = true);
            expect(actual).to.equal(expected);
        });
    }); 