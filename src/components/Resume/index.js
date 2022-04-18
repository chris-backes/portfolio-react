import React from "react";
import resumeDoc from "../../assets/downloads/CBRes.doc";
import resumePDF from "../../assets/downloads/CBRes.pdf";

function Resume() {
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
		<section className="resPage">
			<div>
				<h2>Download My Résumé</h2>
				<ul>
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
	);
}

export default Resume;
