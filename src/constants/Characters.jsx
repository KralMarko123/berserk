import gutsPoster from "../assets/images/guts.jpg";
import gutsCutout from "../assets/images/guts_cutout.png";
import griffithPoster from "../assets/images/griffith.jpg";
import griffithCutout from "../assets/images/griffith_cutout.png";
import cascaPoster from "../assets/images/casca.jpg";
import cascaCutout from "../assets/images/casca_cutout.png";
import zoddPoster from "../assets/images/zodd.jpg";
import zoddCutout from "../assets/images/zodd_cutout.png";
import { cascaTexts, griffithTexts, gutsTexts, zoddTexts } from "./Texts";

export const CHARACTERS = [
	{
		name: "Guts",
		image: gutsPoster,
		cutout: gutsCutout,
		intro: gutsTexts.intro,
	},

	{
		name: "Griffith",
		image: griffithPoster,
		cutout: griffithCutout,
		intro: griffithTexts.intro,
	},

	{
		name: "Casca",
		image: cascaPoster,
		cutout: cascaCutout,
		intro: cascaTexts.intro,
	},

	{
		name: "Zodd",
		image: zoddPoster,
		cutout: zoddCutout,
		intro: zoddTexts.intro,
	},
];
