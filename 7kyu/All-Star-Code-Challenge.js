const testStr = "drake"
const vowels = ["a", "e", "i", "o", "u"]

const removeVowels = str => str.split('').filter(item=>vowels.includes(item)).join('')

removeVowels(testStr)
