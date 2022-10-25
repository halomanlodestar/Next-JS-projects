/** @format */

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { BsFillHouseFill } from "react-icons/bs";
import { BsSubtract } from "react-icons/bs";
import { BsFillPatchQuestionFill } from "react-icons/bs";

const Navbar = () => {
	const [navItem, setNavItem] = useState("HOME");

	return (
		<>
			<nav className="h-16 w-full z-10 bg-neutral-900 fixed justify-center flex items-center font-barlow">
				<ul className="flex space-x-14">
					<li
						onClick={() => setNavItem("HOME")}
						className={
							navItem === "HOME" ? "nav-item nav-item-active" : "nav-item"
						}
					>
						<Link href={"/"}>
							<div className="items-center space-x-2 flex">
								<BsFillHouseFill />
								<p>HOME</p>
							</div>
						</Link>
					</li>
					<li
						className={
							navItem === "BLOGS" ? "nav-item nav-item-active" : "nav-item"
						}
						onClick={() => setNavItem("BLOGS")}
					>
						<Link href={"/blogs"}>
							<div className="items-center space-x-2 flex">
								<BsSubtract />
								<p>BLOGS</p>
							</div>
						</Link>
					</li>
					<li
						className={
							navItem === "ABOUT" ? "nav-item nav-item-active" : "nav-item"
						}
						onClick={() => setNavItem("ABOUT")}
					>
						<Link href={"/about"}>
							<div className="items-center space-x-2 flex">
								<BsFillPatchQuestionFill />
								<p>ABOUT</p>
							</div>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
