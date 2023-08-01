export function captialize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(string) {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result = string.charAt(i) + result;
    }
    return result;
}

export class Calculator {
    add(n1, n2) {
        return n1 + n2;
    }

    subtract(n1, n2) {
        return n1 - n2
    }

    multiply(n1, n2) {
        return n1 * n2;
    }

    divide(n1, n2) {
        return n1 / n2;
    }
}

export function caesarCipher(str, shiftFactor) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const curChar = str.charAt(i)
        if (curChar === ' ') {
            result += curChar
            continue;
        }
        result += String.fromCharCode(((curChar.charCodeAt(0) + shiftFactor - 97) % 26) + 97);
    }
    return result
}

export function analyzeArray(arr) {
    const result = {};
    result.length = arr.length;
    const sum = arr.reduce((total, curNum) => total + curNum, 0);
    result.average = sum / arr.length;
    result.max = Math.max(...arr);
    result.min = Math.min(...arr);
    return result;
}