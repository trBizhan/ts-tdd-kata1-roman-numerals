import {
  convertNumToRoman,
  convertRomanToNum,
} from "../src/roman-numeral-converter";
describe("test convertNumToRoman", () => {
  it("test conversion of numeral to roman", () => {
    expect(convertNumToRoman(1)).toBe("I");
    expect(convertNumToRoman(2)).toBe("II");
    expect(convertNumToRoman(3)).toBe("III");
    expect(convertNumToRoman(4)).toBe("IV");
    expect(convertNumToRoman(5)).toBe("V");
    expect(convertNumToRoman(6)).toBe("VI");
    expect(convertNumToRoman(10)).toBe("X");
    expect(convertNumToRoman(11)).toBe("XI");
    expect(convertNumToRoman(111)).toBe("CXI");
    expect(convertNumToRoman(1000)).toBe("M");
  });
});

describe("test convertRomanToNum", () => {
  it("test conversion of roman to numeral", () => {
    expect(convertRomanToNum("I")).toBe(1);
    expect(convertRomanToNum("II")).toBe(2);
    expect(convertRomanToNum("III")).toBe(3);
    expect(convertRomanToNum("IV")).toBe(4);
    expect(convertRomanToNum("V")).toBe(5);
    expect(convertRomanToNum("VI")).toBe(6);
    expect(convertRomanToNum("X")).toBe(10);
    expect(convertRomanToNum("XI")).toBe(11);
    expect(convertRomanToNum("M")).toBe(1000);
    expect(convertRomanToNum("CXI")).toBe(111);
  });
});
