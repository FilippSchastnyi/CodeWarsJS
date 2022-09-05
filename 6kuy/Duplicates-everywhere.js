/*You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

{
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
    "3": ["A", "F", "G", "A"],
}

{
    "1": ["C"],
    "2": ["A", "B", "D"],
}

Rules
Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
If duplicate characters are found in the same array, the first occurance should be kept.*/

const testObjData = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
    "3": ["A", "F", "G", "A"],
}

const removeDuplicateIds = (obj) => {
    const ar = []
    for (let key in testObjData) {
        ar.push(obj[key])
    }
    const newAr = ar.filter((item, index) => {
        return item !== ar[index][index-1]
    })

};

removeDuplicateIds(testObjData)
