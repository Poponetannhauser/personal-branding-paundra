import React from "react";

const SkillBadge = ({ name }) => (
	<span className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:border-gray-900 hover:bg-white transition-all duration-300">
		{name}
	</span>
);

const SkillCategory = ({ title, skills, icon, color }) => (
	<div className="bento-box flex flex-col h-full group">
		<div className="flex items-center gap-3 mb-6">
			<div
				className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${color} shadow-sm group-hover:scale-110 transition-transform duration-500`}
			>
				<i className={`ph-fill ${icon}`}></i>
			</div>
			<h3 className="font-bold text-gray-900">{title}</h3>
		</div>
		<div className="flex flex-wrap gap-2 mb-4">
			{skills.map((skill, index) => (
				<SkillBadge key={index} name={skill} />
			))}
		</div>
		<p className="text-[10px] text-gray-400 mt-auto uppercase tracking-widest font-bold">
			Expertise Level: <span className="text-gray-600">Intermediate</span>
		</p>
	</div>
);

export default function SkillsSection() {
	return (
		<section
			className="min-h-screen flex flex-col justify-center py-20"
			id="skills"
		>
			<div className="mb-10 text-center md:text-left">
				<h2 className="section-title text-2xl mb-2">
					<i className="ph-fill ph-lightning text-yellow-500"></i> Skills &
					Tools
				</h2>
				<p className="text-gray-500 text-sm max-w-lg">
					Keahlian teknis dan perangkat lunak yang saya gunakan untuk membangun
					solusi digital yang inovatif dan efisien.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<SkillCategory
					title="Web Stack"
					icon="ph-globe-hemisphere-west"
					color="bg-blue-50 text-blue-600"
					skills={["Next.js", "Laravel", "React", "Tailwind CSS", "TypeScript"]}
				/>
				<SkillCategory
					title="Game Dev"
					icon="ph-game-controller"
					color="bg-purple-50 text-purple-600"
					skills={[
						"Unity Engine",
						"C# Scripting",
						"Game Design",
						"Aseprite",
						"Cinemachine",
					]}
				/>
				<SkillCategory
					title="Tools"
					icon="ph-wrench"
					color="bg-orange-50 text-orange-600"
					skills={["Git / GitHub", "VS Code", "Figma"]}
				/>
				<SkillCategory
					title="Soft Skills"
					icon="ph-users-three"
					color="bg-green-50 text-green-600"
					skills={[
						"Problem Solving",
						"Logical Reasoning",
						"Teamwork",
						"Agile",
						"Fast Learner",
						"UI/UX Design",
					]}
				/>
			</div>
			<p className="mt-4 text-[10px] text-gray-400 italic text-center md:text-left">
				* Also capable of handling UI/UX Design, though I prefer being in the
				code editor.
			</p>
		</section>
	);
}
