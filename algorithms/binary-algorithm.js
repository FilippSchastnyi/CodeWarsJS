const arr = [1, 2, 3, 2, 4, 5, 2, 3, 8, 12, 10, 3].sort((a, b) => a - b)

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

const countFreq = (arr, el) => {
    const posEl = searchEl(arr, el)

    if (posEl === -1){
        return 0
    }

    let i = posEl;
    while (arr[i] === el){
        i++
    }

    let j = posEl;
    while (arr[j] === el){
        j--
    }

    return i-j - 1
}

countFreq(arr, 3)
