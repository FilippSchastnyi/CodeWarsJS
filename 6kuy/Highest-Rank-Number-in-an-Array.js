/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

    Note: no empty arrays will be given.

    Examples
    [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
    [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
    [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3*/


const arrayData = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]

const highestRank = (array) => {
    const store = {}
    array.forEach(item => {
        store[item] = item
    })

    Object.keys(store).forEach(item => {
        store[item] = array.filter(k => +item === k).length
    })

    return Object.entries(store).reduce((acc, current) => current[1] > acc[1] ? current : acc)[1]

}

console.log(highestRank(arrayData))

