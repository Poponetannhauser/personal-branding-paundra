import React from "react";

const ProjectCard = ({
	title,
	type,
	description,
	liveUrl,
	badge,
	badgeColor,
}) => {
	return (
		<div className="bento-box bento-box-no-padding flex flex-col h-full overflow-hidden group">
			<div className="preview-container h-64 md:h-80 relative">
				<iframe
					src={liveUrl}
					className="preview-iframe w-full h-full border-none"
					title={title}
				></iframe>
				<div className="project-badge absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm z-10">
					{type}
				</div>
			</div>

			<div className="p-6 flex flex-col justify-between flex-1">
				<div>
					<div className="flex items-center gap-2 mb-2">
						<h3 className="text-xl font-bold">{title}</h3>
						<span
							className={`badge ${
								badgeColor === "green" ? "badge-green" : "badge-gray"
							}`}
						>
							{badge}
						</span>
					</div>
					<p className="text-sm text-gray-500 mb-4 leading-relaxed">
						{description}
					</p>
				</div>

				<div className="grid grid-cols-1 gap-3 mt-auto">
					<a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="btn-link btn-preview justify-center"
					>
						Visit Website <i className="ph-bold ph-arrow-up-right"></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default function ProjectsSection() {
	return (
		<section
			className="min-h-screen flex flex-col justify-center py-12"
			id="projects"
		>
			<h2 className="section-title">
				<i className="ph-fill ph-briefcase text-gray-400"></i> Selected Projects
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<ProjectCard
					title="June Label"
					type="E-Commerce"
					description="Platform e-commerce hijab dengan integrasi Laravel & Next.js."
					liveUrl="https://junelabel.id"
					badge="In Dev"
					badgeColor="gray"
				/>

				<ProjectCard
					title="Mujur Jaya"
					type="Company Profile"
					description="Web profil digital untuk pabrik sohun."
					liveUrl="https://mujurjaya.com"
					badge="Live"
					badgeColor="green"
				/>

				<div className="bento-box bento-box-no-padding md:col-span-2 relative overflow-hidden group h-64 md:h-72">
					<div className="absolute inset-0 bg-gray-900">
						<iframe
							src="https://www.youtube.com/embed/dQw4w9WgXcQ"
							className="w-full h-full opacity-60"
							title="Game Preview"
							allow="autoplay; encrypted-media"
						></iframe>
					</div>
					<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
					<div className="relative z-10 p-8 flex flex-col justify-center h-full max-w-xl">
						<div className="flex items-center gap-2 mb-2 text-green-400">
							<i className="ph-fill ph-game-controller text-xl"></i>
							<span className="text-xs font-bold tracking-widest uppercase">
								Game Prototype
							</span>
						</div>
						<h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
							Guardian of the Forest
						</h3>
						<p className="text-gray-300 text-sm leading-relaxed mb-6">
							Action Tower Defense Game. Eksperimen menggabungkan strategi
							pertahanan dengan pergerakan karakter dinamis.
						</p>
						<div className="flex flex-wrap gap-3 mb-6">
							<span className="tech-tag">Unity Engine</span>
							<span className="tech-tag">Pixel Art</span>
						</div>
						<div className="flex gap-3">
							<a
								href="https://ponpeko.itch.io/guardian-of-the-forest"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-link bg-[#ff2449] text-white hover:bg-[#e01f40]"
							>
								<i className="ph-fill ph-game-controller"></i> Play on Itch.io
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
