class Sudoku {
	constructor() {
		this.grid = [];

		for (var i = 0; i < 9; i++) {
			this.grid.push(new Array(9).fill(i + 1));
		}
	}

	getRow(rowIndex) {
		return this.grid[rowNum - 1];
	}

	getColumn(colIndex) {
		return this.grid.map(row => row[colIndex - 1]);
	}
}