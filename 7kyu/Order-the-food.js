/*You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

    Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

For example, given the following input array*/

const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
        meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian' },
];

function orderFood(list) {
    const store = {}
    const meals = list.map(item=>item.meal)
    meals.forEach(meal => store[meal] = (store[meal] || 0) + 1
    )
    return store
}

orderFood(list1)