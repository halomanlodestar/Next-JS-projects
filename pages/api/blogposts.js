/** @format */

import * as fs from "fs";

export default async function handler(req, res) {
	let data = await fs.promises.readFile("./db/blogs.json", "utf-8");
	let blogs = JSON.parse(data);
	let output = [];
	await blogs.blogs.forEach((e) => {
		if (e.url === req.query.slug) output.push(e);
	});
	res.status(200).json(output);
}
