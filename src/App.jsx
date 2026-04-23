import React from "react";
import MyRoutes from "./routes/MyRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/helper/ScrollToTop";
import AtmosphereControls from "./components/AtmosphereControls";

const App = () => {
	return (
		<>
			<Router>
				<ScrollToTop />
				<AtmosphereControls />
				<MyRoutes />
			</Router>
		</>
	);
};

export default App;
