const testStr = "abracadabra"
const vowels = ["a", "e", "i", "o", "u"]

function getCount(str) {
    let vowelsCount = 0;

    str.split('').filter(item => vowels.includes(item) ? vowelsCount++ : null)

    return vowelsCount;
}

getCount(testStr)

