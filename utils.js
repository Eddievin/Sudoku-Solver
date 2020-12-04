// Function to print the cells for the grid
function printGridCell(value) {
  if (Array.isArray(value)) {
    return ".";
  } else if (value === 0) {
    return ".";
  } else {
    return value;
  }
}

// Function to print the 9*9 grid
function printGrid(b) {
  console.log("Printing grid...");
  for (let i = 0; i < 9; i++) {
    let row = b[i];
    if (i % 3 === 0) {
      console.log("|=======|=======|=======|");
    }
    console.log(
      "|",
      printGridCell(row[0]),
      printGridCell(row[1]),
      printGridCell(row[2]),
      "|",
      printGridCell(row[3]),
      printGridCell(row[4]),
      printGridCell(row[5]),
      "|",
      printGridCell(row[6]),
      printGridCell(row[7]),
      printGridCell(row[8]),
      "|"
    );
  }

  console.log("|=======|=======|=======|");
}


function SolveSudoku(board) {
  //return the solved puzzle as a 2d array of 9 x 9
  let grid = JSON.parse(JSON.stringify(board));
  if (sudokuSolver(grid, 0, 0)) {
    return grid;
  }
  return null;
}

// Main Function
function sudokuSolver(grid, i, j) {
  if (i === 9) {
    i = 0;
    j = j + 1;
    if (j === 9) {
      return true;
    }
  }
  if (grid[i][j] > 0) {
    return sudokuSolver(grid, i + 1, j);
  }
  for (let val = 1; val <= 9; val++) {
    if (isCellDataValid(grid, i, j, val)) {
      grid[i][j] = val;
      if (sudokuSolver(grid, i + 1, j)) {
        return true;
      }
    }
  }
  grid[i][j] = 0;
  return false;
}
function isCellDataValid(grid, i, j, val) {
  for (let r = 0; r <= 8; r++) if (grid[i][r] == val) return false;

  for (let c = 0; c <= 8; c++) if (grid[c][j] == val) return false;

  // Check if we find the same value in the particular 3*3 matrix, we return false
  let startRow = i - (i % 3);
  let startCol = j - (j % 3);
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (grid[i + startRow][j + startCol] == val) return false;

  return true;
}

module.exports = { printGrid, SolveSudoku };
