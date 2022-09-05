const array = [
    {
        name: 'Alex',
        id: 1
    },
    {
        name: 'Sam',
        id: 2
    },
    {
        name: 'John',
        id: 3
    },
    {
        name: 'Petr',
        id: 2
    },
    {
        name: 'Garu',
        id: 4
    },
]


const filteredArr = array.filter((item, index, arr) => {
    return arr.findIndex((val) => {
        return val.id === item.id}) === index
})
