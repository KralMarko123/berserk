const imageContext = require.context("../assets/images", true, /\.(png|jpe?g|webp)$/);

const normalizePath = (path) => (path.startsWith("./") ? path : `./${path}`);

const byNumericFilename = (a, b) =>
	a.localeCompare(b, undefined, {
		numeric: true,
		sensitivity: "base",
	});

export const getImageAsset = (path) => imageContext(normalizePath(path));

export const getFolderImages = (folderPath) =>
	imageContext
		.keys()
		.filter((key) => key.startsWith(normalizePath(folderPath)))
		.sort(byNumericFilename)
		.map((key) => ({
			src: imageContext(key),
			key,
		}));

export const createGalleryItems = (folderPath, altPrefix, captionPrefix) =>
	getFolderImages(folderPath).map((item, index) => ({
		src: item.src,
		alt: `${altPrefix} ${index + 1}`,
		caption: captionPrefix ? `${captionPrefix} ${index + 1}` : undefined,
	}));

export const PLOT_MEDIA = {
	blackSwordsman: getImageAsset("plot/black-swordsman.jpg"),
	goldenAge: getImageAsset("plot/golden-age.webp"),
	eclipse: getImageAsset("plot/eclipse.webp"),
	conviction: getImageAsset("plot/conviction.webp"),
	millenniumFalcon: getImageAsset("plot/millennium-falcon.webp"),
	fantasia: getImageAsset("plot/fantasia.webp"),
};

export const RESOURCE_MEDIA = {
	darkHorse: getImageAsset("resources/darkhorse.png"),
	skullKnightNet: getImageAsset("resources/skull-knight-net.png"),
	berserkWiki: getImageAsset("resources/berserkwiki.png"),
	characterLore: getImageAsset("resources/character-lore.jpg"),
	readingEssay: getImageAsset("resources/reading-essay.jpg"),
	studioGaga: getImageAsset("resources/studiogaga.webp"),
};

export const ADAPTATION_MEDIA = {
	berserk1997: getImageAsset("adaptations/berserk-1997.jpeg"),
	goldenAgeArc: getImageAsset("adaptations/golden-age-arc.jpg"),
	berserk2016: getImageAsset("adaptations/berserk-2016.jpg"),
	studioEclypse: getImageAsset("adaptations/studio-eclypse.jpg"),
	fanAnimation: getImageAsset("adaptations/fan-animation.png"),
	tributeAnimation: getImageAsset("adaptations/tribute-animation.png"),
	gutsRage: getImageAsset("adaptations/guts-rage.jpg"),
	bandOfTheHawk: getImageAsset("adaptations/band-of-the-hawk.webp"),
	liveAction: getImageAsset("adaptations/live-action.webp"),
};

export const COMMUNITY_MEDIA = {
	featurePoster: getImageAsset("community/community-poster.webp"),
	studyNight: getImageAsset("community/study-night.webp"),
	cosplay: getImageAsset("community/cosplay.jpg"),
	music: getImageAsset("community/music.jpg"),
	theory: getImageAsset("community/theory.webp"),
	characterEssay: getImageAsset("community/character-essay.jpg"),
	tattoo: getImageAsset("community/tattoo.jpg"),
	figure: getImageAsset("community/figure.jpg"),
	reread: getImageAsset("community/reread.png"),
};
