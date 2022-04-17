import React from "react";
import styles from './navigation.css'

function Navigation({setPage}) {
	const pages = ['About', 'Portfolio', 'Contact', 'Resume']

	return (
		<nav>
			<ul className="flex-row">
				{pages.map((page) => (
					<li>
						<span onClick={() => setPage(page)}>{page}</span>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navigation;
