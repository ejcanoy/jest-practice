import { Calculator, captialize , reverseString, caesarCipher, analyzeArray } from "./app";


test('Captializes first letter', () => {
    expect(captialize("Random")).toBe("Random");
});

test('Reverses string', () => {
    expect(reverseString("yes")).toBe("sey");
})

const calc = new Calculator();

test('add', () => {
    expect(
        calc.add(1, 2))
        .toBe(3);
})

test('subtract', () => {
    expect(
        calc.subtract(1, 2))
        .toBe(-1);
})

test('multiply', () => {
    expect(
        calc.multiply(1, 2))
        .toBe(2);
})

test('divide', () => {
    expect(
        calc.multiply(1, 2))
        .toBeCloseTo(2);
})

test('shifted once', () => {
    expect(
        caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)
    ).toBe('bcdefghijklmnopqrstuvwxyza');
})

test('shifted twice', () => {
    expect(
        caesarCipher('abcdefghijklmnopqrstuvwxyz', 2)
    ).toBe('cdefghijklmnopqrstuvwxyzab');
})

test('shifted three times', () => {
    expect(
        caesarCipher('abcdefghijklmnopqrstuvwxyz', 3)
    ).toBe('defghijklmnopqrstuvwxyzabc');
})

test('analyzedArray', () => {
    expect(
        analyzeArray([1,8,3,4,2,6])
    ).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})