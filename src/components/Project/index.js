import React from "react";
import budget from "../../assets/images/budget-tracker.jpg";
import quiz from "../../assets/images/code-quiz.jpg";
import decimals from "../../assets/images/js-decimals.jpg";
import notes from "../../assets/images/note-taker.jpg";
import password from "../../assets/images/password-generator.jpg";
import buddy from "../../assets/images/run-buddy.jpg";
import profile from "../../assets/images/team-profile-generator.jpg";
import wag from "../../assets/images/wag-app.jpg";
import weather from "../../assets/images/weather-dashboard.jpg";
import workday from "../../assets/images/workday-scheduler.jpg";
import travel from "../../assets/images/travel-optimizer.jpg";

// import {
//   useTransition,
//   useSpring,
//   useChain,
//   config,
//   animated,
//   useSpringRef,
// } from 'react-spring'

function Project() {
	const projects = [
		{
			name: "js-decimals",
			git: "https://github.com/chris-backes/js-decimals",
			site: "https://www.npmjs.com/package/js-decimals",
			pic: decimals,
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
			name: "Team Profile Generator",
			git: "https://github.com/chris-backes/team-profile-generator",
			site: "https://github.com/chris-backes/team-profile-generator",
			pic: profile,
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
		{
			name: "Work Day Scheduler",
			git: "https://github.com/chris-backes/work-day-scheduler",
			site: "https://chris-backes.github.io/work-day-scheduler/",
			pic: workday,
		},
		{
			name: "Code Quiz",
			git: "https://github.com/chris-backes/code-quiz",
			site: "https://chris-backes.github.io/code-quiz/",
			pic: quiz,
		},
		{
			name: "Password Generator",
			git: "https://github.com/chris-backes/password-generator",
			site: "https://chris-backes.github.io/password-generator/",
			pic: password,
		},
		{
			name: "Run Buddy Website",
			git: "https://github.com/chris-backes/run-buddy",
			site: "https://chris-backes.github.io/run-buddy/",
			pic: buddy,
		},
	];
	return (
		<div className="projects">
			{projects.map((item) => (
				<div className="project-container">
                    <img src={item.pic} alt={item.name}/>
					<div>
						<h4 className="project-title">{item.name}</h4>
						<p><a href={item.site} target="_blank" rel="noreferrer">Deployed Application</a><br/>
						<a href={item.git} target="_blank" rel="noreferrer">Repository</a></p>
					</div>
                </div>
			))}
		</div>
	);
}

export default Project;
