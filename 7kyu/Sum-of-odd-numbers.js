/*
                1
              3     5
            7     9    11
          13    15    17    19
        21    23    25    27    29
Calculate the sum of the numbers in the nth row of this triangle
(starting at index 1) e.g.: (Input --> Output)*/


function rowSumOddNumbers(n) {
  const start = n * (n - 1) + 1
  let result = 0
  for (let i = 0; i < n; i++){
    const delta = 2*i
    result += start + delta
  }
  return result
}

console.log(rowSumOddNumbers(3))

