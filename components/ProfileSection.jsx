import React, { useState, useEffect } from "react";

export default function ProfileSection() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	const formattedTime = time.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	});

	return (
		<section
			className="min-h-screen flex flex-col justify-center py-20"
			id="profile"
		>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				{/* Main Identity Card */}
				<div className="bento-box md:col-span-3 flex flex-col justify-center p-8 bg-white border-2 border-gray-100 shadow-sm">
					<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
						<div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-2xl flex-shrink-0 rotate-3 hover:rotate-0 transition-transform duration-500">
							<img
								src="/assets/tampandanpemberani.png"
								alt="Paundra Asfa"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="text-center md:text-left">
							<div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
								<h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
									Paundra Asfa Ravikansya
								</h1>
								<span className="hidden md:block w-2 h-2 rounded-full bg-gray-300"></span>
								<p className="text-indigo-600 font-bold text-lg uppercase tracking-widest">
									Just an Ordinary Developer
								</p>
							</div>
							<p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-8">
								Mahasiswa informatika yang fokus menciptakan pengalaman web
								modern dan mengeksplorasi dunia pengembangan game.
							</p>

							<div className="flex flex-wrap justify-center md:justify-start gap-3">
								<div className="btn-link bg-indigo-50 text-indigo-700 border border-indigo-100 cursor-default px-6 py-3">
									<i className="ph-fill ph-envelope-simple text-xl"></i>{" "}
									<span className="font-bold">paundraexe@gmail.com</span>
								</div>
								<a
									href="https://github.com/Poponetannhauser"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-link btn-secondary px-6 py-3"
								>
									<i className="ph-fill ph-github-logo text-xl"></i> GitHub
								</a>
								<a
									href="https://linkedin.com/in/paundraexe"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-link btn-secondary px-6 py-3"
								>
									<i className="ph-fill ph-linkedin-logo text-xl"></i> LinkedIn
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-4">
					{/* Status Card */}
					<div className="bento-box flex flex-col justify-center items-center p-6 bg-green-50/30 border-green-100">
						<div className="flex items-center gap-2 mb-3">
							<span className="relative flex h-3 w-3">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
							</span>
							<span className="text-[10px] font-black uppercase tracking-widest text-green-700">
								Live Status
							</span>
						</div>
						<div className="text-xl font-black text-gray-900">Open to Work</div>
						<p className="text-[10px] text-gray-500 mt-1 font-medium">
							Available for Freelance
						</p>
					</div>

					{/* Time Card */}
					<div className="bento-box flex flex-col justify-center items-center p-6 bg-gray-50/50">
						<div className="flex items-center gap-2 mb-2">
							<i className="ph-bold ph-clock text-gray-400"></i>
							<span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
								Based in Yogyakarta
							</span>
						</div>
						<div className="text-3xl font-black text-gray-900 tabular-nums">
							{formattedTime}
						</div>
						<p className="text-[10px] text-gray-500 mt-1 font-medium italic">
							UTC +07:00
						</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
				<div className="bento-box p-6 flex items-center justify-between border-2 border-indigo-50">
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl shadow-inner">
							<i className="ph-fill ph-rocket-launch"></i>
						</div>
						<div>
							<h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
								Studying
							</h4>
							<p className="font-bold text-gray-800">Advanced AI Game Design</p>
						</div>
					</div>
				</div>

				<div className="bento-box p-6 flex items-center justify-between border-2 border-purple-50">
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 text-2xl shadow-inner">
							<i className="ph-fill ph-code"></i>
						</div>
						<div>
							<h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
								Main Stack
							</h4>
							<p className="font-bold text-gray-800">Next.js & Unity</p>
						</div>
					</div>
				</div>

				<div className="bento-box md:col-span-2 p-6 flex items-center gap-6 bg-gray-900 border-none relative overflow-hidden group">
					<div className="flex-1">
						<h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">
							Recent Achievement
						</h4>
						<p className="text-white font-medium leading-tight">
							Masih hidup
						</p>
					</div>
					<div className="text-4xl text-white/20 group-hover:scale-125 transition-transform duration-700">
						<i className="ph-fill ph-trophy"></i>
					</div>
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
				</div>
			</div>
		</section>
	);
}
