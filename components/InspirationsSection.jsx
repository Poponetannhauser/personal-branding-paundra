import React from "react";

const InspirationCard = ({ name, role, quote, image }) => (
	<div className="bento-box flex flex-col md:flex-row gap-6 p-6">
		<div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
			<img src={image} alt={name} className="w-full h-full object-cover" />
		</div>
		<div className="flex flex-col justify-center">
			<h3 className="font-bold text-gray-900 mb-1">{name}</h3>
			<p className="text-xs text-gray-500 mb-2">{role}</p>
			<p className="text-sm text-gray-600 italic leading-relaxed">"{quote}"</p>
		</div>
	</div>
);

export default function InspirationsSection() {
	return (
		<section
			className="min-h-screen flex flex-col justify-center py-12"
			id="inspirations"
		>
			<h2 className="section-title">
				<i className="ph-fill ph-lightbulb text-gray-400"></i> Inspirations
			</h2>

			<div className="grid grid-cols-1 gap-4">
				<InspirationCard
					name="Windah Basudara"
					role="Totalitas & Kerja Keras"
					quote="Mimpi tidak ada yang gagal, hanya ada mimpi yang tertunda."
					image="/assets/windah.jpeg"
				/>
				<InspirationCard
					name="Sherlock Holmes"
					role="Logika & Detail"
					quote="To a great mind, nothing is little."
					image="/assets/sherlock.webp"
				/>
			</div>
		</section>
	);
}
