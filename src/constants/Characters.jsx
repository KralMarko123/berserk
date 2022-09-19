import gutsPoster from "../assets/images/guts.jpg";
import gutsCutout from "../assets/images/guts_cutout.png";
import griffithPoster from "../assets/images/griffith.jpg";
import cascaPoster from "../assets/images/casca.jpg";
import zoddPoster from "../assets/images/zodd.jpg";
import { gutsTexts } from "./Texts";

export const CHARACTERS = [
	{
		name: "Guts",
		image: gutsPoster,
		cutout: gutsCutout,
		color: "red",
		intro: gutsTexts.intro,
	},

	{
		name: "Griffith",
		image: griffithPoster,
		color: "blue",
	},

	{
		name: "Casca",
		image: cascaPoster,
		color: "yellow",
	},

	{
		name: "Zodd",
		image: zoddPoster,
		color: "darkorange",
	},
];
