import React from "react";
import Logo from "../assets/logo.svg";

const menuItems = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About Us",
		href: "/#about",
	},
	{
		name: "Coupons",
		href: "/shop",
	},
	{
		name: "Events",
		href: "/Events",
	},
	{
		name: "Login",
		href: "/login",
	},
	{
		name: "Host",
		href: "/events/host",
	},
	{
		name: "Blogs",
		href: "/blogs",
	},
	{
		name: "Leader Board",
		href: "/leaderboard",
	},
];

export function ExampleNavbarOne() {
	const logout = () => {
		localStorage.setItem("userid", "");
	};

	return (
		<div className="relative w-full bg-white">
			<div className="mx-auto flex max-w-7xl items-center justify-between ml-8 px-4 py-4 sm:px-6 lg:px-8">
				<div className="inline-flex items-center pr-16">
					<a href="/">
						<img src={Logo} className="min-w-[52px] min-h-[62px]" alt="logo" />
						<span className="text-lg font-bold text-white"></span>
					</a>
				</div>
				<div className="hidden lg:block">
					<ul className="inline-flex space-x-8">
						{menuItems.map((item) => (
							<li key={item.name}>
								<a
									href={item.href}
									className="text-lg font-bold text-gray-800 hover:text-green-400"
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="hidden lg:block">
					<button
						onClick={logout}
						type="button"
						className="ml-8 rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
					>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
}
