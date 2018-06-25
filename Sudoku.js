class Sudoku {
	constructor() {
		this.grid = [];

		for (var i = 0; i < 9; i++) {
			this.grid.push(new Array(9).fill(i + 1));
		}
	}

	getRow(x) {
		return this.grid[x];
	}

	getColumn(x) {
		this.grid.map((index, elem) => {
			return elem[x];
		});
	}
}