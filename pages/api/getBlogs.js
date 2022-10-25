/** @format */

import * as fs from "fs";

/**
 * Category is passed when you switch it in frontend
 */

export default async function handler(req, res) {
	let category = req.query.category;
	let data = await fs.promises.readFile("./db/blogs.json", "utf-8");
	let output = [];
	if (category) {
		// Checks if a category query exists if yes, try to fetch data
		JSON.parse(data).blogs.forEach((e) => {
			if (e.category == category) output.push(e);
		});
		res.status(200).json(output);
	} // else res.status(200).json(JSON.parse(data).blogs); // if no, just pass all the data
}
