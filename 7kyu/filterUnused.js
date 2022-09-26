/*
Given a varying number of integer arguments, return the digits that are not present in any of them.
[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
*/

function unusedDigits(...digits) {
  const figures = digits.join()
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(item => !figures.includes(item)).join()
}

console.log(unusedDigits(12, 34, 56, 78))


