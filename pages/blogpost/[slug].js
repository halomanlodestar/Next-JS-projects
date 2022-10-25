/** @format */

import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import { useEffect } from "react";

const Slug = () => {
	const [blogData, setBlogData] = useState();

	const router = useRouter();
	useEffect(() => {
		if (!router.isReady) return;
		const { slug } = router.query;
		fetch(`http://localhost:3000/api/blogposts?slug=${slug}`)
			.then((e) => {
				return e.json();
			})
			.then((e) => {
				if (e.length === 0) setBlogData([]);
				setBlogData(e[0]);
			});
	}, [router.isReady]);

	return blogData === undefined || blogData.length === 0 ? (
		<>
			<h1 className="text-4xl w-full h-screen justify-center text-center items-center flex">
				404 | Blog Not Found
			</h1>
		</>
	) : (
		<>
			<main className="h-screen w-full">
				<div className="breaker h-20"></div>
				<h1 className="border border-neutral-700 mx-3 text-4xl p-4">
					{blogData.title}
				</h1>
				<p className="mt-5 p-3 content h-fit mx-3 border border-neutral-700">
					<b>
						<p>Author : {blogData.author}</p>
						<p>
							Posted On :{" "}
							{`${blogData.posted.date} - ${blogData.posted.month} - ${blogData.posted.year}`}
						</p>
						<p>Category : {blogData.category}</p>
					</b>
					<br /> <br />
					{blogData.content}
				</p>
			</main>
		</>
	);
};

export default Slug;
