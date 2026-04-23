import gutsPoster from "../assets/images/guts.jpg";
import gutsCutout from "../assets/images/guts_cutout.png";
import griffithPoster from "../assets/images/griffith.jpg";
import griffithCutout from "../assets/images/griffith_cutout.png";
import cascaPoster from "../assets/images/casca.jpg";
import cascaCutout from "../assets/images/casca_cutout.png";
import zoddPoster from "../assets/images/zodd.jpg";
import zoddCutout from "../assets/images/zodd_cutout.png";
import skullKnightPoster from "../assets/images/skull-knight.jpg";
import farnesePoster from "../assets/images/farnese.jpg";
import { cascaTexts, griffithTexts, gutsTexts, zoddTexts } from "./Texts";
import { CHARACTER_GALLERIES } from "./Collections";

export const CHARACTERS = [
	{
		name: "Guts",
		slug: "guts",
		epithet: "The Black Swordsman",
		image: gutsPoster,
		cutout: gutsCutout,
		intro: gutsTexts.intro,
		traits: ["Relentless", "Guarded", "Tender beneath armor", "Defiant"],
		arc: "From survival to vengeance to the terrifying work of protecting what remains.",
		gallery: CHARACTER_GALLERIES.guts,
		videos: [
			{
				label: "Guts lore videos",
				url: "https://www.youtube.com/results?search_query=Berserk+Guts+lore",
			},
			{
				label: "Black Swordsman analysis",
				url: "https://www.youtube.com/results?search_query=Berserk+Black+Swordsman+analysis",
			},
		],
	},

	{
		name: "Griffith",
		slug: "griffith",
		epithet: "The Falcon of Light",
		image: griffithPoster,
		cutout: griffithCutout,
		intro: griffithTexts.intro,
		traits: ["Magnetic", "Visionary", "Possessive", "Terrifyingly composed"],
		arc: "A dream so brilliant that it becomes indistinguishable from ruin.",
		gallery: CHARACTER_GALLERIES.griffith,
		videos: [
			{
				label: "Griffith lore videos",
				url: "https://www.youtube.com/results?search_query=Berserk+Griffith+lore",
			},
			{
				label: "Falcon of Light analysis",
				url: "https://www.youtube.com/results?search_query=Berserk+Griffith+character+analysis",
			},
		],
	},

	{
		name: "Casca",
		slug: "casca",
		epithet: "Commander of the Hawks",
		image: cascaPoster,
		cutout: cascaCutout,
		intro: cascaTexts.intro,
		traits: ["Loyal", "Capable", "Proud", "Deeply wounded"],
		arc: "A commander, survivor, and emotional center whose recovery refuses to be simple.",
		gallery: CHARACTER_GALLERIES.casca,
		videos: [
			{
				label: "Casca lore videos",
				url: "https://www.youtube.com/results?search_query=Berserk+Casca+lore",
			},
			{
				label: "Casca character analysis",
				url: "https://www.youtube.com/results?search_query=Berserk+Casca+character+analysis",
			},
		],
	},

	{
		name: "Zodd",
		slug: "zodd",
		epithet: "Nosferatu Zodd",
		image: zoddPoster,
		cutout: zoddCutout,
		intro: zoddTexts.intro,
		traits: ["Battle-hungry", "Ancient", "Honorable in combat", "Monstrous"],
		arc: "The immortal warning sign that the battlefield is only the surface of the world.",
		gallery: CHARACTER_GALLERIES.zodd,
		videos: [
			{
				label: "Zodd lore videos",
				url: "https://www.youtube.com/results?search_query=Berserk+Zodd+lore",
			},
			{
				label: "Apostles explained",
				url: "https://www.youtube.com/results?search_query=Berserk+Apostles+explained",
			},
		],
	},

	{
		name: "Skull Knight",
		slug: "skull-knight",
		epithet: "The Struggler's Omen",
		image: skullKnightPoster,
		cutout: skullKnightPoster,
		intro: [
			"Skull Knight moves through Berserk like a prophecy with a blade, appearing where causality tightens and catastrophe is near.",
			"His history is deliberately shadowed, but his connection to the God Hand, the Berserker Armor, and the long war against apostles makes him feel ancient even before the story names why.",
		],
		traits: ["Cryptic", "Ancient", "Noble", "Ruthlessly focused"],
		arc: "A guide and warning whose help always carries the weight of something unfinished.",
		gallery: CHARACTER_GALLERIES["skull-knight"],
		videos: [
			{
				label: "Skull Knight lore videos",
				url: "https://www.youtube.com/results?search_query=Berserk+Skull+Knight+lore",
			},
			{
				label: "Causality explained",
				url: "https://www.youtube.com/results?search_query=Berserk+causality+explained",
			},
		],
	},

	{
		name: "Farnese",
		slug: "farnese",
		epithet: "From Zeal to Care",
		image: farnesePoster,
		cutout: farnesePoster,
		intro: [
			"Farnese begins as a severe noblewoman leading the Holy Iron Chain Knights, hiding fear and confusion beneath religious certainty.",
			"Her journey becomes one of Berserk's most quietly moving transformations: from punishment and control toward humility, magic, and chosen responsibility.",
		],
		traits: ["Conflicted", "Devout", "Growing", "Protective"],
		arc: "A brittle certainty slowly reshaped into compassion and courage.",
		gallery: CHARACTER_GALLERIES.farnese,
		videos: [
			{
				label: "Farnese lore videos",
				url: "https://www.youtube.com/results?search_query=Berserk+Farnese+lore",
			},
			{
				label: "Conviction arc analysis",
				url: "https://www.youtube.com/results?search_query=Berserk+Conviction+arc+analysis",
			},
		],
	},
];
