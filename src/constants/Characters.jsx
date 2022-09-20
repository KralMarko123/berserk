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
		traits: ["Gruff", "Cynical", "Violent", "Honest"],
	},

	{
		name: "Griffith",
		image: griffithPoster,
		cutout: griffithCutout,
		intro: griffithTexts.intro,
		traits: ["Intelligent", "Exemplary", "Dedicated", "Divine"],
	},

	{
		name: "Casca",
		image: cascaPoster,
		cutout: cascaCutout,
		intro: cascaTexts.intro,
		traits: ["Passionate", "Kind-Hearted", "Capable", "Beautiful"],
	},

	{
		name: "Zodd",
		image: zoddPoster,
		cutout: zoddCutout,
		intro: zoddTexts.intro,
		traits: ["Brutal", "Violent", "Strong", "Deadly"],
	},
];
