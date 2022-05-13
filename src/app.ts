import Board from "./Board";

const rows: number = 16;
const cols: number = 16;

console.log("anyaaa");

const boardElement: HTMLElement = document.getElementById("board")!;

const board: Board = new Board(rows, cols, boardElement);
board.init();

let isMouseDown: boolean = false;

boardElement.addEventListener("mousedown", (evt: MouseEvent) => {
	const target: Element = evt.target as Element;
	if (target.classList.contains("box")) {
		target.classList.add("bg-green-500");
	}

	isMouseDown = true;
});

boardElement.addEventListener("mouseover", (evt: MouseEvent) => {
	if (isMouseDown) {
		const target: Element = evt.target as Element;
		if (target.classList.contains("box")) {
			target.classList.add("bg-green-500");
		}
	}
});

boardElement.addEventListener("mouseup", () => {
	isMouseDown = false;
});
