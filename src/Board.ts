class Board {
	rows: number;
	cols: number;

	boardEl: HTMLElement;

	constructor(rows: number, cols: number, element: HTMLElement) {
		this.rows = rows;
		this.cols = cols;

		this.boardEl = element;
	}

	fragment() {
		const fragment: DocumentFragment = document.createDocumentFragment();
		for (let i = 0; i < this.rows * this.cols; i++) {
			const box: HTMLDivElement = document.createElement("div");
			box.classList.add("box");

			fragment.append(box);
		}

		return fragment;
	}

	setGrid() {
		this.boardEl.style.gridTemplateRows = `repeat(${this.rows}, 30px)`;
		this.boardEl.style.gridTemplateColumns = `repeat(${this.cols}, 30px)`;
	}

	draw() {
		this.boardEl.append(this.fragment());
		this.setGrid();
	}

	init() {
		this.draw();
	}
}

export default Board;
