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
