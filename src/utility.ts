import * as htmlToImage from "html-to-image";
import { boardElement } from "./elements";

export const savePixelArt = () => {
	htmlToImage
		.toPng(boardElement)
		.then(dataUrl => {
			boardElement.classList.remove("box-0");

			const image: HTMLImageElement = new Image();
			image.src = dataUrl;

			var w = window.open("");
			w!.document.write(image.outerHTML);
		})
		.catch(error => {
			console.error("oops, something went wrong!", error);
		});
};
