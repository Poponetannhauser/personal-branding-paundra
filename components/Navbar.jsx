import React from "react";

const Navbar = () => {
	const navItems = [
		{ name: "Profile", href: "#profile", icon: "ph-user" },
		{ name: "Skills", href: "#skills", icon: "ph-lightning" },
		{ name: "Projects", href: "#projects", icon: "ph-briefcase" },
		{ name: "Inspirations", href: "#inspirations", icon: "ph-lightbulb" },
	];

	const handleClick = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<nav className="sticky top-6 z-50 mb-12 flex justify-center">
			<div className="bg-white/80 backdrop-blur-md border border-gray-200 px-2 py-2 rounded-full shadow-lg flex items-center gap-1">
				{navItems.map((item) => (
					<a
						key={item.href}
						href={item.href}
						onClick={(e) => handleClick(e, item.href)}
						className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all"
					>
						<i className={`ph-bold ${item.icon}`}></i>
						<span className="hidden md:inline">{item.name}</span>
					</a>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
