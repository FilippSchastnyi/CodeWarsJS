const $el = document.querySelector(".round");
let leftStep = 0;

const move = () => {
    leftStep +=2;
    $el.style.left = leftStep + 'px'
    requestAnimationFrame(move)
}

requestAnimationFrame(move)
