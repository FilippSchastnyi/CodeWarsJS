const obj = {
    name: 'Pilip',
    age: 25,
    job: 'Dev'
}

const entries = [
    ['name', 'Pilip'],
    ['age', 26],
    ['Job', 'Dev'],
]

/*
console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))
*/

const map = new Map(entries)
console.log(map.get('Job'))

map
    .set('newField', 42)
    .set(NaN, 'Value of obj')

map.delete('Job') // -> return boolean
console.log(map.has('Job'))
console.log(map.size)
map.clear()
console.log(map.size)

//===========================
