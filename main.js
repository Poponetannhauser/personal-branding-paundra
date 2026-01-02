import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
	console.log("Personal Branding Site Loaded");
	// Intersection Observer for fade-in animations
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{ threshold: 0.1 }
	);

	document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});
