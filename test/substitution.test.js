const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

    describe("substitutionCipher ()", () => {
        it("should return false if given alphabet isn't exactly 26 charaters", () =>{
            const input = "test code";
            const alphabet = "ghuetyin";
            const actual = substitutionModule.substitution(input, alphabet, encode = true)
            expect(actual).to.be.false;
        });
        it("should return false if given alphabet repeats characters", () =>{
            const input = "test code";
            const alphabet = "aabbccddffhhiicchhwwiittuu";
            const actual = substitutionModule.substitution(input, alphabet, encode = true)
            expect(actual).to.be.false;
        });
        it("should correctly translate a phrase given the correct alphabet", () =>{
            const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "message";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces before and after decoding", () =>{
            const actual = substitutionModule.substitution("$ y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "a message";
            expect(actual).to.equal(expected);
        });
        it("should maintain spaces before and after encoding", () =>{
            const actual = substitutionModule.substitution("a message", "$wae&zrdxtfcygvuhbijnokmpl", true);
            const expected = "$ y&ii$r&";
            expect(actual).to.equal(expected);
        });
        it("should return the same code regardless of capitalization", () =>{
            const actual = substitutionModule.substitution("a message", "$wae&zrdxtfcygvuhbijnokmpl", true);
            const expected = substitutionModule.substitution("A MESSAGE", "$wae&zrdxtfcygvuhbijnokmpl", true);
            expect(actual).to.equal(expected);
        });
    });

