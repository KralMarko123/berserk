import React from "react";
import Home from "../pages/Home";
import Plot from "../pages/Plot";
import Characters from "../pages/Characters";
import Details from "../pages/Details";
import Resources from "../pages/Resources";
import Community from "../pages/Community";
import Artifacts from "../pages/Artifacts";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./Routes";

const MyRoutes = () => {
	return (
		<Routes>
			<Route path={ROUTES.home} element={<Home />} />
			<Route path={ROUTES.plot} element={<Plot />} />
			<Route path={ROUTES.characters} element={<Characters />} />
			<Route path={ROUTES.details} element={<Details />} />
			<Route path={ROUTES.resources} element={<Resources />} />
			<Route path={ROUTES.community} element={<Community />} />
			<Route path={ROUTES.artifacts} element={<Artifacts />} />
		</Routes>
	);
};

export default MyRoutes;
