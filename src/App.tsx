import React from "react";
import "./styles/App.scss";

// Components
import Profile from "./components/Profile";
import About from "./components/About";
import Bio from "./components/Bio";
import Knowledge from "./components/Knowledge";
import Portfolio from "./components/Portfolio";

function App() {
	return (
		<div className="App">
			<Profile />
			<About />
			<Bio />
			<Knowledge />
			<Portfolio />
		</div>
	);
}

export default App;
