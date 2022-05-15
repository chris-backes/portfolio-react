import React from "react";
import budget from "../../assets/images/budget-tracker.jpg";
import decimals from "../../assets/images/js-decimals.jpg";
import notes from "../../assets/images/note-taker.jpg";
import wag from "../../assets/images/wag-app.jpg";
import weather from "../../assets/images/weather-dashboard.jpg";
import travel from "../../assets/images/travel-optimizer.jpg";
import stonks from "../../assets/images/stock-portfolio-returns.jpg";
import housing from "../../assets/images/housing-app.jpg";

import { useTrail, animated } from "react-spring";

function Project({ reset }) {
	const projects = [
		{
			name: "Stock Portfolio Returns Tracker",
			git: "https://github.com/chris-backes/stock-portfolio-weighted-returns",
			site: "https://chris-backes.github.io/stock-portfolio-weighted-returns/",
			pic: stonks,
		},
		{
			name: "js-decimals",
			git: "https://github.com/chris-backes/js-decimals",
			site: "https://www.npmjs.com/package/js-decimals",
			pic: decimals,
		},
		{
			name: "Residential Apartment Management Site",
			git: "https://github.com/chris-backes/housing-management-app",
			site: "https://ancient-journey-45474.herokuapp.com/",
			pic: housing,
		},
		{
			name: "Budget Tracker",
			git: "https://github.com/chris-backes/budget-tracker-symetrical-bassoon",
			site: "https://infinite-escarpment-00072.herokuapp.com/",
			pic: budget,
		},
		{
			name: "Wag (Dog Walker App)",
			git: "https://github.com/chris-backes/wag-dog-walker-app",
			site: "https://secure-savannah-19572.herokuapp.com/",
			pic: wag,
		},
		{
			name: "Note Taker",
			git: "https://github.com/chris-backes/miniature-eureka",
			site: "https://intense-atoll-93115.herokuapp.com/",
			pic: notes,
		},
		{
			name: "Travel Optimizer",
			git: "https://github.com/chris-backes/travel-optimizer",
			site: "https://maryjezek.github.io/travel-optimizer/",
			pic: travel,
		},
		{
			name: "Weather Dashboard",
			git: "https://github.com/chris-backes/weather-dashboard",
			site: "https://chris-backes.github.io/weather-dashboard/",
			pic: weather,
		},
	];

	const trailAnimation = useTrail(projects.length, {
		from: { y: 300, opacity: 0 },
		to: { y: 0, opacity: 1 },
		config: { mass: 2, tension: 150 },
		reset: reset
	});
	return (
		<div className="projects">
			{trailAnimation.map((spring, index) => {
				return (
					<animated.div
						className="project-container"
						key={index}
						style={spring}
					>
						<img
							src={projects[index].pic}
							alt={projects[index].name}
						/>
						<div>
							<p>
								<a
									href={projects[index].site}
									target="_blank"
									rel="noreferrer"
								>
									Deployed Application
								</a>
								<br />
								<a href={projects[index].git} target="_blank" rel="noreferrer">
									Repository
								</a>
							</p>
						</div>
					</animated.div>
				);
			})}
		</div>
	);
}

export default Project;
