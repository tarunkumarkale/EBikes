// Filename - App.js

import React from "react";

const HeroDesign=()=> {
	return (
		<>
			<center>
				<h1 className="text-green-600 text-4xl">
					GeeksforGeeks
				</h1>
				<h2 className="text-black text-2xl">
					Text appears on Hover over image using
					Tailwind CSS in React
				</h2>
			</center>
			<div class="flex items-center justify-center mt-12">
				<a
					class="relative block w-1/4 bg-gray-900 group"
					href="##"
				>
					<img
						class="absolute inset-0 object-cover 
								w-full h-full group-hover:opacity-50"
						src="https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png"
					/>
					<div class="relative p-5">
						<div class="mt-40">
							{/* Hidden content */}
							<div
								class="transition-all transform 
								translate-y-8 opacity-0 
								group-hover:opacity-100 
								group-hover:translate-y-0"
							>
								<div class="p-2">
									<p class="text-lg text-white">
										Welcome to
										GeeksforGeeks.
									</p>
									<button
										class="px-4 py-2 text-sm 
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




