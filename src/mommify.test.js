import mommify from "./mommify";

describe("mommify test", () => {
  it("should return h when given h", () => {
    const expected = "h";
    const result = mommify(expected);
    expect(result).toBe(expected);
  });

  it("should return mommy when given vowel", () => {
    const expected = "mommy";
    const vowel = ["a", "e", "i", "o", "u"];
    vowel.forEach(item => {
      const result = mommify(item);
      expect(result).toBe(expected);
    });
  });

  it("should mommify if the vowels greater than 30% ", () => {
    const expected = "hmommy";
    const result = mommify("ha");
    expect(result).toBe(expected);
  });

  it("should not mommify if there are vowels sequences", () => {
    const expected = "hmommycdmommy";
    const result = mommify("haeioucde");
    expect(result).toBe(expected);
  });
});
