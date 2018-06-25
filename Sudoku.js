class Sudoku {
	constructor() {
		this.grid = [];

		for (var i = 0; i < 9; i++) {
			this.grid.push(new Array(9).fill(i + 1));
		}
	}

	getRow(rowNum) {
		return this.grid[rowNum - 1];
	}

	getColumn(colNum) {
		return this.grid.map(row => row[colNum]);
	}
}