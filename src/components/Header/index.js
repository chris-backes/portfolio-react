import React from "react";
import Navigation from "../Navigation";

function Header({ setPage }) {
	return (
		<header>
			<div>
                <h1>Christopher Backes</h1>
			</div>
			<Navigation
			setPage={setPage}
			/>
		</header>
	);
}

export default Header;
