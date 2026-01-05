import React, { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import ProfileSection from "./components/ProfileSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import InspirationsSection from "./components/InspirationsSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	useEffect(() => {
		// Fade-in animation effect
		const sections = document.querySelectorAll("section");
		sections.forEach((section, index) => {
			section.style.opacity = "0";
			section.style.transform = "translateY(20px)";
			section.style.transition = "opacity 0.6s ease, transform 0.6s ease";

			setTimeout(() => {
				section.style.opacity = "1";
				section.style.transform = "translateY(0)";
			}, index * 100);
		});
	}, []);

	return (
		<div className="bg-gray-50 text-gray-900 max-w-4xl mx-auto p-6 md:p-12">
			<Navbar />
			<ProfileSection />
			<ProjectsSection />
			<SkillsSection />
			<InspirationsSection />
			<Footer />
		</div>
	);
}

export default App;
