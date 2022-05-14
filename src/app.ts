import Board from "./Board";

import {
	boardElement,
	colorPickerElement,
	saveButtonElement,
} from "./elements";

import { savePixelArt } from "./utility";

const rows: number = 16;
const cols: number = 16;

let isMouseDown: boolean = false;
let color: string = "#1e293b";

const board: Board = new Board(rows, cols, boardElement);
board.init();

boardElement.addEventListener("mousedown", (evt: MouseEvent) => {
	const target: HTMLDivElement = evt.target as HTMLDivElement;
	if (target.classList.contains("box")) {
		target.style.backgroundColor = color;
	}

	isMouseDown = true;
});

boardElement.addEventListener("mouseover", (evt: MouseEvent) => {
	if (isMouseDown) {
		const target: HTMLDivElement = evt.target as HTMLDivElement;
		if (target.classList.contains("box")) {
			target.style.backgroundColor = color;
		}
	}
});

boardElement.addEventListener("mouseup", () => {
	isMouseDown = false;
});

saveButtonElement.addEventListener("click", () => {
	boardElement.classList.add("box-0");
	savePixelArt();
});

colorPickerElement.addEventListener("change", (e: Event) => {
	color = (e.target as HTMLInputElement).value;
});
