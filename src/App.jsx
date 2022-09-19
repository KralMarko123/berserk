import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Plot from "./pages/Plot";

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="/plot" element={<Plot />} />
					<Route path="/characters" element={<Characters />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
