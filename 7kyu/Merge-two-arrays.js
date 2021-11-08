/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.
[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/

const arrayA = ['a', 'b', 'c'];
const arrayB = [1, 2, 3];

const mergeArrays = (a, b) => {
    const mergedArray = [];
    if (a.length >= b.length) {
        a.forEach((item, index) => {
            b[index] !== undefined ? mergedArray.push(item, b[index]) : mergedArray.push(item)
        })
    } else {
        b.forEach((item, index) => {
            a[index] !== undefined ? mergedArray.push(a[index], item) : mergedArray.push(item)
        })
    }
    return mergedArray
}

mergeArrays(arrayA, arrayB)
