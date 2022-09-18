import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
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
				</Routes>
			</Router>
		</>
	);
};

export default App;
