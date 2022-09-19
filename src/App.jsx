import React from "react";
import MyRoutes from "./routes/MyRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/helper/ScrollToTop";

const App = () => {
	return (
		<>
			<Router>
				<ScrollToTop />
				<MyRoutes />
			</Router>
		</>
	);
};

export default App;
