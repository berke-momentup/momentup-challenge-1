const findPrimeInFibonacci = require("./findPrimeInFibonacci");

test("should output 0", () => {
  expect(findPrimeInFibonacci(0)).toBe(0);
});

test("should output []", () => {
  expect(findPrimeInFibonacci(1)).toStrictEqual([]);
});

test("should output [2]", () => {
  expect(findPrimeInFibonacci(3)).toStrictEqual([2]);
});

test("should output [2, 3]", () => {
  expect(findPrimeInFibonacci(4)).toStrictEqual([2, 3]);
});

test("should output [2, 3, 5, 13]", () => {
  expect(findPrimeInFibonacci(10)).toStrictEqual([2, 3, 5, 13]);
});

test("should output Pozitif tam sayı giriniz", () => {
  expect(findPrimeInFibonacci(-6)).toBe("Pozitif tam sayı giriniz");
});

test("should output Pozitif tam sayı giriniz", () => {
  expect(findPrimeInFibonacci("abc")).toBe("Pozitif tam sayı giriniz");
});
