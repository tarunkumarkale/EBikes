// Filename - App.js

import React from "react";

const HeroDesign=()=> {
	return (
		<>
			<center>
				<h1 classNameName="text-green-600 text-4xl">
					GeeksforGeeks
				</h1>
				<h2 classNameName="text-black text-2xl">
					Text appears on Hover over image using
					Tailwind CSS in React
				</h2>
			</center>
			<div className="flex items-center justify-center mt-12">
				<a
					className="relative block w-1/4 bg-gray-900 group"
					href="##"
				>
					<img
						className="absolute inset-0 object-cover 
								w-full h-full group-hover:opacity-50"
						src="https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png"
					/>
					<div className="relative p-5">
						<div className="mt-40">
							<div
								className="transition-all transform 
								translate-y-8 opacity-0 
								group-hover:opacity-100 
								group-hover:translate-y-0"
							>
								<div className="p-2">
									<p className="text-lg text-white">
										Welcome to
										GeeksforGeeks.
									</p>
									<button
										className="px-4 py-2 text-sm 
											text-white bg-green-600"
									>
										Visit site
									</button>
								</div>
							</div>
							{/* End of hidden content */}
						</div>
					</div>
				</a>
			</div>
		</>
	);
}

export default HeroDesign;




