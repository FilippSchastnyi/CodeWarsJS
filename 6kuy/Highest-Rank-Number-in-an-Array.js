/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

    Note: no empty arrays will be given.

    Examples
    [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
    [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
    [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3*/


const arrayData = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]

const highestRank = (array) => {
    const store = {};
    array.forEach(n => {
        if (store[n]) store[n] += 1;
        else store[n] = 1;
    })

    const maxRepeatCount = Math.max(...Object.values(store));

    let result = 0;
    for (let key in store) {
        if (store[key] === maxRepeatCount && key > result) result = +key;
    }

    return result;
}

highestRank(arrayData)
