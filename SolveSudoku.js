const { SolveSudoku, printGrid } = require("./utils");

const prompt = require("prompt-sync")();

let userInput = prompt("Enter your numbers : ");

let inputArray = Array.from(userInput.replace(/\s/g, ""));

let grid = [];

for (let i = 0; i < inputArray.length; i += 9) {
  grid.push(inputArray.slice(i, i + 9));
}

console.log(printGrid(SolveSudoku(grid)));
