/*Your task is to write a function maskify, which changes all but the last four characters into '#'.*/
function maskify(inputCode) {
    const codeLength = inputCode.length;
    const unmaskQuantity = Math.min(codeLength, 4);
    const maskPart = '#'.repeat(codeLength - unmaskQuantity);
    const unmaskPart = inputCode.slice(-unmaskQuantity);
    return maskPart + unmaskPart;
}
const code = 'asdff'
maskify(code)