/*
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
*/

const enterWords = 'HelloKata'

const splitInParts = (s, partLength) => {
    const newArray = []
    for (let i = 0; i < s.length; i += partLength) {
        newArray.push(s.slice(i, partLength + i));
    }
    return newArray.join(' ')
}

splitInParts(enterWords, 2)
