import React from "react";

function Navigation({setPage}) {
	const pages = ['About', 'Portfolio', 'Contact', 'Resume']

	return (
		<nav>
			<ul>
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
