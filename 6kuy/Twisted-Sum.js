/*
Find the sum of the digits of all the numbers from 1 to N (both ends included).*/
/*
# N = 4
1 + 2 + 3 + 4 = 10*/

const twistedSum = n => {
    let sum = 0
    while (n > 0) {
        n >= 10
            ? sum += n.toString().split('').reduce((a, b) => +a + +b)
            : sum += n
        n--
    }
    return sum
}
console.log(twistedSum(11))




