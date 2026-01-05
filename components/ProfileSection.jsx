import React from "react";

export default function ProfileSection() {
	return (
		<section
			className="min-h-screen flex flex-col justify-center py-12"
			id="profile"
		>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{/* Main Identity Card */}
				<div className="bento-box md:col-span-2 flex flex-col justify-center">
					<div className="flex items-center gap-4 mb-4">
						<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
							<img
								src="/assets/tampandanpemberani.png"
								alt="Paundra Asfa"
								className="w-full h-full object-cover"
							/>
						</div>
						<div>
							<h1 className="text-2xl font-bold text-gray-900">
								Paundra Asfa Ravikansya
							</h1>
							<p className="text-gray-500 text-sm">
								Just an ordinary developer
							</p>
						</div>
					</div>

					<p className="text-gray-600 text-sm leading-relaxed mb-6">
						Mahasiswa informatika yang fokus menciptakan pengalaman web modern
						dan mengeksplorasi dunia pengembangan game. Berdomisili di Sleman,
						DIY.
					</p>

					<div className="flex flex-wrap gap-3">
						<div className="btn-link bg-indigo-50 text-indigo-700 border border-indigo-100 cursor-default">
							<i className="ph-fill ph-envelope-simple"></i>{" "}
							paundraexe@gmail.com
						</div>
						<a
							href="https://github.com/Poponetannhauser"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-link btn-secondary"
						>
							<i className="ph-fill ph-github-logo"></i> GitHub
						</a>
						<a
							href="https://linkedin.com/in/paundraexe"
							target="_blank"
							rel="noopener noreferrer"
							className="btn-link btn-secondary"
						>
							<i className="ph-fill ph-linkedin-logo"></i> LinkedIn
						</a>
					</div>
				</div>

				{/* Status Card */}
				<div className="bento-box flex flex-col justify-center items-start">
					<div className="flex items-center gap-2 mb-2">
						<span className="relative flex h-3 w-3">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
							<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
						</span>
						<span className="text-xs font-bold uppercase tracking-wider text-gray-500">
							Status
						</span>
					</div>
					<div className="text-lg font-bold">Open to Work</div>
					<p className="text-xs text-gray-400 mt-1">
						Available for Freelance & Fulltime
					</p>
				</div>
			</div>
		</section>
	);
}
