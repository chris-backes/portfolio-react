import React from "react";
import Navigation from "../Navigation";

function Header({ setPage, setReset }) {
	return (
		<header>
			<div>
                <h1>Christopher Backes</h1>
			</div>
			<Navigation
			setPage={setPage} setReset={setReset}
			/>
		</header>
	);
}

export default Header;
