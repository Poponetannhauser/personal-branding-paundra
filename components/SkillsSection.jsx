import React from "react";

const SkillCategory = ({ title, skills }) => (
	<div className="skill-category">
		<h4 className="skill-category-title">{title}</h4>
		<ul className="skill-list">
			{skills.map((skill, index) => (
				<li key={index}>{skill}</li>
			))}
		</ul>
	</div>
);

export default function SkillsSection() {
	return (
		<section
			className="min-h-screen flex flex-col justify-center py-12"
			id="skills"
		>
			<h2 className="section-title">
				<i className="ph-fill ph-lightning text-gray-400"></i> Skills & Tools
			</h2>

			<div className="bento-box">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
					<SkillCategory
						title="Web Stack"
						skills={["Next.js", "Laravel", "React & Tailwind"]}
					/>
					<SkillCategory
						title="Game Dev"
						skills={["Unity (C#)", "Game Design", "Aseprite"]}
					/>
					<SkillCategory
						title="Tools"
						skills={["Git / GitHub", "VS Code", "Postman"]}
					/>
					<SkillCategory
						title="Core"
						skills={["Logic & Algo", "Problem Solving", "Teamwork"]}
					/>
				</div>
			</div>
		</section>
	);
}
