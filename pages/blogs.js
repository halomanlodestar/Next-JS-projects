/** @format */

import React from "react";
import styles from "../styles/Pages.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

const Blogs = () => {
	const [category, setCategory] = useState("web_dev");
	const [blogs, setBlogs] = useState([]);

	const fetchByCategory = (category) => {
		fetch(`http://localhost:3000/api/getBlogs?category=${category}`)
			.then((e) => {
				return e.json();
			})
			.then((e) => {
				setBlogs(e);
			});
	};
	useEffect(() => {
		fetchByCategory(category);
	}, [category]);

	return (
		<>
			<div className="w-full h-32 border-t-2 font-abel">
				<ul className="justify-start mx-5 flex mt-[5.25rem] space-x-16 text-sm font-semibold">
					<p className="font-medium mr-8">Browse By Category</p>
					<li
						onClick={() => {
							setCategory("web_dev");
							fetchByCategory(category);
						}}
						className={
							category === "web_dev"
								? "category-item category-item-active"
								: "category-item"
						}
					>
						WEB DEVELOPMENT
					</li>
					<li
						onClick={() => {
							setCategory("competitive");
							fetchByCategory(category);
						}}
						className={
							category === "competitive"
								? "category-item category-item-active"
								: "category-item"
						}
					>
						COMPETITIVE
					</li>
					<li
						onClick={() => {
							setCategory("ml");
							fetchByCategory(category);
						}}
						className={
							category === "ml"
								? "category-item category-item-active"
								: "category-item"
						}
					>
						MACHINE LEARNING
					</li>
				</ul>
			</div>

			<hr className="w-full text-neutral-500" />
			<div className="py-16 justify-center">
				<div className={styles.grid}>
					{blogs.map((e) => {
						if (e.category === category) {
							if (e.content.length > 95)
								e.content = e.content.substring(0, 95) + `...`;
							return (
								<div key={e.url} className={styles.card}>
									<Link href={`blogpost/${e.url}`}>
										<div>
											<h2 className="text-xl font-semibold"> {e.title} </h2>
											<p> {e.content}</p>
										</div>
									</Link>
								</div>
							);
						}
					})}
				</div>
			</div>
		</>
	);
};

export default Blogs;
