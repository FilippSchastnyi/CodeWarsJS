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

const raters = array.filter((rater, index, arr) => {
   return  arr.findIndex(val => val.id === rater.id) === index
})