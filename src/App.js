import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import { useSpring, animated } from "react-spring";

function App() {
	const [page, setPage] = useState("");
	const [reset, setReset] = useState(false)

	const mainSpring = useSpring({
		from: { x: -2000 , y: 400, opacity: 0 },
		to: { x: 0, y: 0, opacity: 1 },
		config: { duration: 1500 },
		reset: reset
	})

	const renderPage = (currentPage) => {
		switch (currentPage) {
			case "About":
				return <animated.main style={mainSpring}><About /></animated.main>;
			case "Portfolio":
				return <animated.main style={mainSpring}><Project /></animated.main>;
			case "Resume":
				return <animated.main style={mainSpring}><Resume /></animated.main>;
			default:
				return <animated.main style={mainSpring}><About /></animated.main>;
		}
	};
	return (
		<>
			<Header setPage={setPage} setReset={setReset}/>
			{renderPage(page)}
			<Footer />
		</>
	);
}

export default App;
