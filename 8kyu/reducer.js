let arr = [];

// Error: Reduce of empty array with no initial value
// если бы существовало начальное значение, reduce вернул бы его для пустого массива.
console.log(arr.reduce((sum, current) => sum + current, 1))

