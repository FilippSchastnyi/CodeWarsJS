/*
In this kata the function returns an array/list of numbers without its last element.
The function is already written for you and the basic tests pass, but random tests fail.
Your task is to figure out why and fix it.
*/

const testArr = [47, 92, 68, 15, 3, 7, 28]

function withoutLast(arr) {
    return arr.filter(i => i !== arr[arr.length - 1])
}

console.log(withoutLast(testArr))
