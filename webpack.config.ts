import path from "path";
import * as webpack from "webpack";
import "webpack-dev-server";

const config: webpack.Configuration = {
	mode: "production",
	entry: "./src/app.ts",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "/"),
		},
		compress: true,
		port: 9000,
	},
};

export default config;
