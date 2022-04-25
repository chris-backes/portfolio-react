import React from "react";
import resumeDoc from "../../assets/downloads/CBRes.doc";
import resumePDF from "../../assets/downloads/CBRes.pdf";
import Marquee from "react-fast-marquee";
import atlas from "../../assets/images/logos/atlas.png";
import bootstrap from "../../assets/images/logos/bootstrap.png";
import css from "../../assets/images/logos/css.png";
import git from "../../assets/images/logos/git.png";
import github from "../../assets/images/logos/github.png";
import heroku from "../../assets/images/logos/heroku.png";
import html from "../../assets/images/logos/html.png";
import javascript from "../../assets/images/logos/javascript.png";
import jquery from "../../assets/images/logos/jquery.png";
import mern from "../../assets/images/logos/mern.png";
import mongo from "../../assets/images/logos/mongo.png";
import mysql from "../../assets/images/logos/mysql.png";
import nodejs from "../../assets/images/logos/nodejs.png";
import react from "../../assets/images/logos/react.png";

function Resume() {
	const images = [
		atlas,
		bootstrap,
		css,
		git,
		github,
		heroku,
		html,
		javascript,
		jquery,
		mern,
		mongo,
		mysql,
		nodejs,
		react,
	];
	const skills = {
		Languages: ["HTML", "CSS", "JavaScript"],
		Libraries: [
			"React",
			"BootStrap",
			"JQuery",
			"Express",
			"Sequelize",
			"Mongoose",
			"Jest",
		],
		Versioning: ["Git", "Bash", "GitHub"],
		Databases: ["MySQL", "MongoDB"],
		Tools: [
			"Node",
			"Postman",
			"Insomnia",
			"MySQL Workbench",
			"MongoDB Compass",
			"Heroku",
		],
		Concepts: ["OOP", "REST"],
	};
	return (
		<div className="resPage">
			<Marquee className="logos-marquee" speed="90" gradientColor="[118, 141, 183]" gradient="true">
				{images.map((item) => (
					<img className='logo' src={item} alt="something" />
				))}
				{images.map((item) => (
					<img src={item} alt="something" />
				))}
			</Marquee>
			<section className="res-section">
				<div>
					<h2>Download My Résumé</h2>
					<ul className="resumes-download">
						<li>
							<a href={resumeDoc} download>
								MS Word Copy
							</a>
						</li>
						<li>
							<a href={resumePDF} download>
								PDF Copy
							</a>
						</li>
					</ul>
				</div>
				<div className="skills">
					<h2>Skills</h2>
					{Object.entries(skills).map(([key, value]) => (
						<>
							<h3>{key}</h3>
							<ul>
								{value.map((item) => (
									<li>{item}</li>
								))}
							</ul>
						</>
					))}
				</div>
			</section>
		</div>
	);
}

export default Resume;
