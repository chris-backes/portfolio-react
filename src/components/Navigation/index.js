import React from "react";

function Navigation({ setPage, setReset }) {
	const pages = ['About', 'Portfolio', 'Resume']

	return (
		<nav>
			<ul>
				{pages.map((page) => (
					<li>
						<span onClick={() => {
							setPage(page)
							setReset(true)}}>{page}</span>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navigation;
