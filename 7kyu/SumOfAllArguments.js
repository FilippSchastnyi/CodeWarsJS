/*
Write a function that finds the sum of all its arguments.*/

const sum = (...arr) => arr.reduce((acc, cur)=> acc + cur)

sum(1,2,3)
