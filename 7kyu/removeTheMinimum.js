function removeSmallest(numbers) {
  const sortedArray = [...numbers]
  sortedArray.sort((a,b)=>a-b)
  const result = [...numbers]
  result.splice(numbers.indexOf(sortedArray[0]), 1)
  return result
}

console.log(removeSmallest([2, 2, 1, 2, 1]))

