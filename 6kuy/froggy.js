function jumpTo(x, y) {
    const frogPosition = {
        current: x,
        finish: y,
        stepsCount: 0
    }
    const isNatural = position => position % 2 === 0
    while (frogPosition.current < frogPosition.finish) {
        isNatural(frogPosition.finish)
            ? frogPosition.current = isNatural(frogPosition.current) ? frogPosition.current * 2 : frogPosition.current + 1
            : frogPosition.current = isNatural(frogPosition.current) ? frogPosition.current + 1 : frogPosition.current * 2
        frogPosition.stepsCount++
    }
    return frogPosition.stepsCount;
}

console.log(jumpTo(1, 8))

