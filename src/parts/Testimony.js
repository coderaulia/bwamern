import React from "react";

import TestimonyAccent from "assets/images/testimonial-landingpage-frame.jpg";

import Star from "elements/Star";

export default function Testimony() {
	return (
		<section className="container">
			<div clasName="row align-items-center">
				<div className="col-auto" style={{ marginRight: 70 }}>
					<div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
						<img
							className="position-absolute"
							src={data.imageUrl}
							alt="Testimonial"
							style={{ zIndex: 1 }}
						/>
						<img
							className="position-absolute"
							src={TestimonyAccent}
							alt="Testimonial frame"
							style={{ margin: `-30px 0 0 -30px`, zIndex: 0 }}
						/>
					</div>
				</div>
				<div className="col-6">
					<h4></h4>
				</div>
			</div>

			{/* <Star value={3.5} width={35} height={35} spacing={4}></Star> */}
		</section>
	);
}
