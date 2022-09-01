let obj = {
    name: 'weakmap'
}

const map = new WeakMap([
    [obj, 'data of obj'],
])

// get set delete has
obj = null
console.log(map.has(obj))

