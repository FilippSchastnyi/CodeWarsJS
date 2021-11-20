const someArray = [0, 1, 4, 3, 5, 7, 9, 8, 2, 6]

const searchFu = (nums, target) => {
    let leftSide = 0;
    let rightSide = nums.length - 1;
    let mid;

    while (leftSide <= rightSide) {
        mid = Math.round((rightSide - leftSide) / 2) + leftSide

        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            rightSide = mid - 1
        } else {
            leftSide = mid + 1
        }
    }
    return -1
}

searchFu(someArray, 7)
