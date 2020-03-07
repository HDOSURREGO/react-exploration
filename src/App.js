import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import Electric from "./components/Electric";

function App() {
	return (
		<div className="App">
			<div>
				<Navigation />
			</div>
			<div>
				<Switch>
					{/* <Route exact path="/" component={Home} /> */}
					<Route exact path="/electric" component={Electric} />
				</Switch>
			</div>
			<div>
				<Home />
			</div>
		</div>
	);
}

export default App;
