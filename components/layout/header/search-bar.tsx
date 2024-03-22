"use client";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

export const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const pathname = usePathname();
	const isHomePage = pathname === "/";
	if (isHomePage) return null;
	return (
		<form role="search" className=" flex-1">
			<div className="relative max-w-[364px]">
				<label htmlFor="main-search" className="sr-only">
					Main Search Bar
				</label>
				<BiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
				<input
					type="text"
					id="main-search"
					name="main-search"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder="What do you want to listen to?"
					className="block px-9 leading-5 bg-[#242424] h-12 
        placeholder:text-sm placeholder:absolute placeholder:top-1/2 placeholder:-translate-y-1/2 rounded-full  w-full"
				/>
				{searchTerm.length > 0 && (
					<button
						type="button"
						className="absolute right-4 top-1/2 -translate-y-1/2"
						onClick={() => setSearchTerm("")}
					>
						<AiOutlineClose />
						<span className="sr-only">Close search bar</span>
					</button>
				)}
			</div>
		</form>
	);
};
