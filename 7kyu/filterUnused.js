/*
Given a varying number of integer arguments, return the digits that are not present in any of them.
[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
*/

function unusedDigits(...digits) {
  const figures = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
  const figures2 = figures.slice()
  console.log(figures2 === figures)
}

unusedDigits(12, 34, 56, 78)


