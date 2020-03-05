import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
	return (
		<div className="App">
			<div>
				<Navigation />
			</div>
			<div>
				<Home />
			</div>
		</div>
	);
}

export default App;
