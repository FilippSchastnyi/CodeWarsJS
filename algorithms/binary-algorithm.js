const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const searchEl = (arr, el) => {
    let left = 0;
    let right = arr.length

    while (right - left > 0) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === el) return mid
        arr[mid] > el ? right = mid : left = mid
    }
    return -1
}

console.log(searchEl(arr, 1))

