import React from "react";

const InspirationCard = ({ name, role, quote, image, description, color }) => (
	<div className="bento-box flex flex-col md:flex-row gap-8 p-8 hover:border-gray-900/10 transition-all duration-500 overflow-hidden relative group">
		<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gray-50 -z-10 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700 rounded-full"></div>
		<div
			className={`w-full md:w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-white shadow-xl ${color}`}
		>
			<img
				src={image}
				alt={name}
				className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
			/>
		</div>
		<div className="flex flex-col justify-center flex-1">
			<div className="flex items-center gap-3 mb-3">
				<h3 className="text-2xl font-black text-gray-900">{name}</h3>
				<span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
				<p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
					{role}
				</p>
			</div>
			<p className="text-xl font-medium text-gray-800 italic leading-relaxed mb-4 relative">
				<span className="absolute -left-6 -top-4 text-6xl text-gray-100 font-serif -z-10">
					“
				</span>
				{quote}
			</p>
			<p className="text-sm text-gray-500 leading-relaxed border-l-2 border-gray-100 pl-4 py-1">
				{description}
			</p>
		</div>
	</div>
);

export default function InspirationsSection() {
	return (
		<section
			className="min-h-screen flex flex-col justify-center py-20"
			id="inspirations"
		>
			<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
				<div>
					<h2 className="section-title text-2xl mb-2">
						<i className="ph-fill ph-lightbulb text-orange-400"></i>{" "}
						Inspirations
					</h2>
					<p className="text-gray-500 text-sm max-w-md">
						Tokoh-tokoh yang membentuk cara saya berpikir, bekerja, dan
						bermimpi.
					</p>
				</div>
				<div className="flex gap-2">
					<span className="w-3 h-3 rounded-full bg-gray-200"></span>
					<span className="w-3 h-3 rounded-full bg-gray-300"></span>
					<span className="w-3 h-3 rounded-full bg-gray-400"></span>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6">
				<InspirationCard
					name="Windah Basudara"
					role="Profesionalitas & Integritas"
					quote="Mimpi tidak ada yang gagal, hanya ada mimpi yang tertunda."
					description="Mengagumi totalitas profesionalnya dalam memerankan 'gimmick' demi hiburan penonton, namun tetap menjaga kepribadian asli yang berbeda dan rendah hati di kehidupan nyata."
					image="/assets/windah.jpeg"
					color="shadow-orange-100"
				/>
				<InspirationCard
					name="Sherlock Holmes"
					role="Logika & Deduksi"
					quote="To a great mind, nothing is little."
					description="Terinspirasi oleh metode deduksinya yang tajam serta kemampuannya untuk memisahkan topik atau detail yang tidak relevan agar bisa fokus sepenuhnya pada inti kasus yang sedang dikerjakan."
					image="/assets/sherlock.webp"
					color="shadow-indigo-100"
				/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
				<div className="bento-box p-6 bg-gray-50 border-dashed border-2 border-gray-200 group">
					<div className="flex items-center gap-3 mb-4">
						<i className="ph-fill ph-book-open text-2xl text-brown-500"></i>
						<h4 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest">
							Currently Reading
						</h4>
					</div>
					<p className="text-sm font-bold text-gray-800 mb-1">
						The Dragon Republic
					</p>
					<p className="text-[10px] text-gray-500 italic">
						R.F. Kuang — Perang, politik, dan kekuatan dewa yang menghancurkan.
					</p>
				</div>

				<div className="bento-box p-6 bg-white border-2 border-indigo-50 flex items-center gap-4">
					<div className="w-16 h-16 rounded-xl bg-indigo-600 flex items-center justify-center text-white text-3xl shadow-lg shadow-indigo-200 shrink-0">
						<i className="ph-fill ph-music-notes"></i>
					</div>
					<div>
						<h4 className="font-bold text-gray-400 uppercase text-[10px] tracking-widest mb-1">
							On Repeat
						</h4>
						<p className="text-sm font-bold text-gray-800">
							Lofi Girl — Beats to relax/study to
						</p>
						<div className="flex gap-1 mt-2">
							<span className="w-1 h-3 bg-indigo-600 animate-pulse"></span>
							<span className="w-1 h-5 bg-indigo-400 animate-pulse delay-75"></span>
							<span className="w-1 h-2 bg-indigo-200 animate-pulse delay-150"></span>
							<span className="w-1 h-4 bg-indigo-500 animate-pulse delay-300"></span>
						</div>
					</div>
				</div>

				<div className="bento-box p-6 bg-gray-900 border-none flex flex-col justify-between overflow-hidden relative">
					<div className="relative z-10">
						<h4 className="font-bold text-gray-500 uppercase text-[10px] tracking-widest mb-2">
							Life Motto
						</h4>
						<p className="text-white text-lg font-medium leading-tight italic">
							"Tidak semua hari harus dimenangkan"
						</p>
					</div>
					<i className="ph-fill ph-quotes absolute -bottom-4 -right-4 text-8xl text-white/5"></i>
				</div>
			</div>
		</section>
	);
}
