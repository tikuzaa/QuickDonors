import React, { useState, useEffect } from "react";

const testimonialList = [
	[
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
			name: "Aksay Kumar",
			position: "CEO & Founder at EasyFrontend",
			content:
				"It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
			name: "Sara Tailor",
			position: "CEO & Founder at EasyFrontend",
			content:
				"It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
			name: "John Leo",
			position: "CEO & Founder at EasyFrontend",
			content:
				"It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
		},
	],
	[
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
			name: "Aksay Kumar",
			position: "CEO & Founder at EasyFrontend",
			content:
				"It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
			name: "Sara Tailor",
			position: "CEO & Founder at EasyFrontend",
			content:
				"It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
			name: "John Leo",
			position: "CEO & Founder at EasyFrontend",
			content:
				"It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
		},
	],
	[
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
			name: "Aksay Kumar",
			position: "CEO & Founder at EasyFrontend",
			content:
				"It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
			name: "Sara Tailor",
			position: "CEO & Founder at EasyFrontend",
			content:
				"It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
		},
		{
			img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
			name: "John Leo",
			position: "CEO & Founder at EasyFrontend",
			content:
				"It's easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
		},
	],
];

const Testimonials = () => {
	const [index, setIndex] = useState(0);

	// Auto slide effect
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % testimonialList.length);
		}, 3000); // Change slides every 3 seconds

		// Cleanup function to clear the interval
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="ezy__testimonial24 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex items-center justify-center text-center mb-6 md:mb-12">
					<div className="max-w-xl">
						<hr className="w-20 mb-4 border-gray-300 dark:border-gray-600 mx-auto" />
						<h2 className="text-[32px] font-bold">What They Say</h2>
					</div>
				</div>

				<div>
					<div className="grid grid-cols-3 gap-6">
						{testimonialList[index].map((testimonial, i) => (
							<div className="col-span-3 lg:col-span-1" key={i}>
								<div className="h-full p-6 xl:p-10">
									<div className="flex items-center mb-6">
										<div className="mr-3">
											<img
												src={testimonial.img}
												alt={testimonial.name}
												className="max-w-full h-auto rounded-full border"
												width="85"
											/>
										</div>
										<div>
											<h4 className="text-xl font-medium">
												{testimonial.name}
											</h4>
											<p className="text-sm mb-2">{testimonial.position}</p>
										</div>
									</div>
									<p className="opacity-75 mb-2">{testimonial.content}</p>
								</div>
							</div>
						))}
					</div>

					<div className="flex justify-center gap-3 m-0 mt-12">
						{testimonialList.map((_, i) => (
							<button
								className={`w-12 h-[3px] transition-transform ${
									index === i
										? "scale-125 bg-blue-600"
										: " bg-gray-400 dark:bg-slate-800"
								} `}
								key={i}
								onClick={() => setIndex(i)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
