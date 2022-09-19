import React from "react";
import Home from "../pages/Home";
import Plot from "../pages/Plot";
import Characters from "../pages/Characters";
import Details from "../pages/Details";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes";

const MyRoutes = () => {
	return (
		<Routes>
			<Route path="" element={<Home />} />
			<Route path={ROUTES.home} element={<Home />} />
			<Route path={ROUTES.plot} element={<Plot />} />
			<Route path={ROUTES.characters} element={<Characters />} />
			<Route path={ROUTES.details} element={<Details />} />
		</Routes>
	);
};

export default MyRoutes;
