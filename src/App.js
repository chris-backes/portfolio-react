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
		from: { x: -2000, opacity: 0 },
		to: { x: 0, opacity: 1 },
		config: { mass: 5, tension: 100 },
		reset: reset
	})
	const resSpring = useSpring({
		from: { y: -1250, opacity: 0 },
		to: { y: 0, opacity: 1 },
		config: { mass: 5, tension: 100 },
		reset: reset
	})
	const renderPage = (currentPage) => {
		switch (currentPage) {
			case "About":
				return <animated.main style={mainSpring}><About /></animated.main>;
			case "Portfolio":
				return <main><Project reset={reset} /></main>;
			case "Resume":
				return <animated.main style={resSpring}><Resume /></animated.main>;
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
