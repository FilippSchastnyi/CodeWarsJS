function deepCount(a) {
    return a.reduce((count, current) => {
        if (Array.isArray(current)) {
            return count + deepCount(current) + 1;
        } else {
            return count + 1;
        }
    }, 0);
}