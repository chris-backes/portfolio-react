import React, { useState } from "react";
import Navigation from "../Navigation";
import pic from '../../assets/images/headshot.jpg'
import styles from './header.css'

function Header({ setPage }) {
	return (
		<header>
			<div>
				<img
					src={pic}
					className="header-img"
					alt="photograph of author"
				/>
                <h1>Christopher Backes</h1>
			</div>
			<Navigation
			setPage={setPage}
			/>
		</header>
	);
}

export default Header;
