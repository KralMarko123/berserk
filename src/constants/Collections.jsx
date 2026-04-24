import { createGalleryItems, getImageAsset } from "./media";

const uiBrand = getImageAsset("brand.png");

const image = (path) => getImageAsset(path);

const portraits = {
	guts: image("guts/guts.jpg"),
	griffith: image("griffith/griffith.jpg"),
	casca: image("casca/casca.jpg"),
	zodd: image("zodd/zodd.jpg"),
	skullKnight: image("skullknight/skullknight.jpg"),
	schierke: image("schierke/schierke.jpg"),
	farnese: image("farnese/farnese.jpg"),
	serpico: image("serpico/serpico.jpg"),
	judeau: image("judeau/judeau.jpg"),
	charlotte: image("charlotte/charlotte.jpg"),
	puck: image("puck/puck.jpg"),
	rickert: image("rickert/rickert.jpg"),
	pippin: image("pippin/pippin.jpg"),
	corkus: image("corkus/corkus.jpg"),
	godot: image("godot/godot.jpg"),
	horse: image("horse/horse.jpg"),
	vargas: image("vargas/vargas.jpg"),
};

const cutouts = {
	guts: image("guts/guts_cutout.png"),
	griffith: image("griffith/griffith_cutout.png"),
	casca: image("casca/casca_cutout.png"),
	zodd: image("zodd/zodd_cutout.png"),
	skullKnight: image("skullknight/skullknight_cutout.png"),
	schierke: image("schierke/schierke_cutout.png"),
	farnese: image("farnese/farnese_cutout.png"),
	serpico: image("serpico/serpico_cutout.png"),
	judeau: image("judeau/judeau_cutout.png"),
	charlotte: image("charlotte/charlotte_cutout.png"),
	puck: image("puck/puck_cutout.png"),
	rickert: image("rickert/rickert_cutout.png"),
	pippin: image("pippin/pippin_cutout.png"),
	corkus: image("corkus/corkus_cutout.png"),
	godot: image("godot/godot_cutout.png"),
	vargas: image("vargas/vargas_cutout.webp"),
};

const makeCharacterGallery = (folder, altPrefix) =>
	createGalleryItems(`${folder}/gallery/`, `${altPrefix} gallery`, "Archive image");

const makeArtifactGallery = (folder, altPrefix) =>
	createGalleryItems(`artifacts/${folder}/`, `${altPrefix} artifact`, "Artifact archive");

export const PLOT_BEATS = [
	{
		title: "The Black Swordsman",
		kicker: "A man too angry to die",
		image: portraits.guts,
		text:
			"Guts wanders through a hostile world with the Brand of Sacrifice pulling the dead toward him. The early story frames him as a terrifying myth before slowly revealing the wound beneath the armor.",
	},
	{
		title: "Golden Age",
		kicker: "Brotherhood, ambition, and the dream",
		image: portraits.griffith,
		text:
			"The Band of the Hawk gives Guts a place to belong, while Griffith's impossible dream lifts common mercenaries into history. The warmth of that bond is what makes its collapse unbearable.",
	},
	{
		title: "The Eclipse",
		kicker: "Causality closes its hand",
		image: portraits.casca,
		text:
			"The sacrifice of the Hawks turns friendship into a cosmic wound. Guts and Casca survive, but survival in Berserk is never clean; it becomes a sentence, a duty, and a reason to keep moving.",
	},
	{
		title: "Conviction",
		kicker: "Faith under a poisoned sky",
		image: portraits.farnese,
		text:
			"Religious terror, refugees, apostles, and the Holy See collide at St. Albion. The arc turns moral certainty into something unstable and introduces companions who will change Guts' path.",
	},
	{
		title: "Millennium Falcon",
		kicker: "The world cracks open",
		image: portraits.zodd,
		text:
			"Griffith returns to the physical world and builds toward Falconia while Guts gathers a fragile party around Casca. Monsters stop being hidden rumors and become the new weather of the world.",
	},
	{
		title: "Fantasia",
		kicker: "Healing is not the ending",
		image: portraits.schierke,
		text:
			"Magic, memory, and impossible distance reshape the quest. Berserk lets tenderness exist beside horror, then asks whether restoration can survive the next turn of fate.",
	},
];

export const RESOURCES = [
	{
		title: "Official Dark Horse Manga",
		type: "Publisher",
		url: "https://www.darkhorse.com/Search/Berserk",
		description: "English volumes, deluxe editions, and official release information.",
	},
	{
		title: "SkullKnight.net Encyclopedia",
		type: "Reference",
		url: "https://www.skullknight.net/encyclopedia/",
		description: "One of the longest-running Berserk reference hubs, plus podcasts and episode guides.",
	},
	{
		title: "Berserk Wiki",
		type: "Reference",
		url: "https://berserk.fandom.com/wiki/Berserk_Wiki",
		description: "A broad fan-maintained index for characters, arcs, locations, and terminology.",
	},
	{
		title: "Character Lore Videos",
		type: "Video Search",
		url: "https://www.youtube.com/results?search_query=Berserk+character+lore",
		description: "A starting shelf for long-form character explanations and arc breakdowns.",
	},
	{
		title: "Berserk Analysis Essays",
		type: "Video Search",
		url: "https://www.youtube.com/results?search_query=Berserk+analysis+Kentaro+Miura",
		description: "Theme, paneling, symbolism, and storytelling commentary from the wider fandom.",
	},
	{
		title: "Studio Gaga and Continuation News",
		type: "Search",
		url: "https://www.google.com/search?q=Berserk+Studio+Gaga+news",
		description: "A practical way to check current continuation coverage without locking the site to one outlet.",
	},
];

export const ARTIFACTS = [
	{
		name: "Brand of Sacrifice",
		type: "Mark",
		description:
			"The Brand turns the body into a signal fire for restless spirits and apostles. In Berserk it is both a metaphysical wound and a visual thesis: survival always has a cost.",
		notes: [
			"It marks someone chosen as an offering in a sacrifice.",
			"It bleeds or aches when evil forces draw near.",
			"It makes even quiet moments feel temporary.",
		],
		gallery: makeArtifactGallery("brand-of-sacrifice", "Brand of Sacrifice"),
	},
	{
		name: "Dragonslayer",
		type: "Weapon",
		description:
			"At first glance it is absurdly large, almost a joke about impossible swords. Then Miura makes it believable by giving it weight, exhaustion, and consequence every time Guts swings it.",
		notes: [
			"It is less a sword than a slab of iron given purpose.",
			"It becomes spiritually tainted through apostle blood and constant battle.",
			"It reflects Guts' refusal to become elegant for the world's comfort.",
		],
		gallery: makeArtifactGallery("dragonslayer", "Dragonslayer"),
	},
	{
		name: "Behelit",
		type: "Relic",
		description:
			"The Behelit is a grotesque key disguised as an object. It looks accidental and organic, but it opens directly into one of Berserk's most horrifying ideas: ambition presented with a price.",
		notes: [
			"It awakens at a moment of total despair.",
			"It serves as a bridge between human collapse and apostle transformation.",
			"It makes fate feel tactile and obscene.",
		],
		gallery: makeArtifactGallery("behelit", "Behelit"),
	},
	{
		name: "Berserker Armor",
		type: "Armor",
		description:
			"The armor gives Guts what he thinks he needs by silencing pain and sharpening violence. It is one of Berserk's clearest examples of power arriving as a bargain with the self.",
		notes: [
			"It pushes the wearer beyond normal physical limits.",
			"It also strips away restraint, memory, and bodily safety.",
			"It needs companions around Guts to matter narratively.",
		],
		gallery: makeArtifactGallery("berserker-armor", "Berserker Armor"),
	},
	{
		name: "Falconia",
		type: "Concept / City",
		description:
			"Falconia is not just a city. It is Griffith's dream given clean walls, safe streets, and the terrible question of whether salvation is still salvation when it comes from him.",
		notes: [
			"It gathers humanity under a single miraculous shelter.",
			"It is beautiful in a way that makes readers suspicious.",
			"It turns utopia into one of Berserk's sharpest moral tensions.",
		],
		gallery: makeArtifactGallery("falconia", "Falconia"),
	},
	{
		name: "God Hand",
		type: "Entity / Concept",
		description:
			"The God Hand sit above the human scale of Berserk like a blasphemous court of causality. They are not just villains to defeat, but embodiments of the system that keeps turning despair into sacrifice.",
		notes: [
			"They frame destiny as a structure rather than a sequence of accidents.",
			"They transform private suffering into cosmic ritual.",
			"They make Berserk's horror philosophical as well as physical.",
		],
		gallery: makeArtifactGallery("godhand", "God Hand"),
	},
	{
		name: "Sword of Actuation",
		type: "Relic / Blade",
		description:
			"Skull Knight's blade is one of Berserk's cleanest images of metaphysical violence: a weapon that cuts through physical reality because it is already aimed at deeper layers of the world.",
		notes: [
			"It is tied to beherits and the manipulation of space.",
			"It makes causality feel less abstract and more surgical.",
			"It extends Skull Knight's role as an enemy of larger systems rather than single foes.",
		],
		gallery: makeArtifactGallery("sword-of-actuation", "Sword of Actuation"),
	},
	{
		name: "Astral World",
		type: "Concept / Realm",
		description:
			"The Astral World is where Berserk's monsters, gods, memories, and symbolic structures stop pretending to be separate from daily life. When it bleeds through, reality changes shape.",
		notes: [
			"It explains why myth and matter can collide so cleanly in the series.",
			"It turns folklore into geography.",
			"It widens Berserk from revenge drama into cosmic fantasy-horror.",
		],
		gallery: makeArtifactGallery("astral-world", "Astral World"),
	},
];

export const COMMUNITY_ITEMS = [
	{
		title: "Panel Study Nights",
		source: "Referenced from manga-reading communities and art study threads.",
		image: portraits.skullKnight,
		description:
			"Fans gather around Miura's dense pages to study hatching, silhouette, armor design, and how motion is carved into still panels.",
	},
	{
		title: "Cosplay and Prop Builds",
		source: "Referenced from convention showcases, maker forums, and video build logs.",
		image: portraits.guts,
		description:
			"The Dragonslayer, Berserker Armor, and Brand of Sacrifice remain favorite challenges for builders who like their craft heavy and dramatic.",
	},
	{
		title: "Music for the Long Road",
		source: "Referenced from fan playlists and ambient mixes inspired by the manga.",
		image: uiBrand,
		description:
			"From Susumu Hirasawa-inspired mixes to rain-soaked reading playlists, the community has built a whole listening ritual around Berserk.",
	},
	{
		title: "Theory Archives",
		source: "Referenced from long-running forum discussions and subreddit theory posts.",
		image: portraits.casca,
		description:
			"Causality, the Moonlight Boy, Skull Knight's history, and Falconia's future keep readers returning to older chapters with fresh eyes.",
	},
	{
		title: "Character Essays",
		source: "Referenced from video essays, blog posts, and reread threads.",
		image: portraits.judeau,
		description:
			"Fans love writing about the emotional engineering of characters like Judeau, Farnese, Casca, and Griffith because Berserk rewards close rereading.",
	},
	{
		title: "Tattoo and Symbol Design",
		source: "Referenced from tattoo portfolios and fan art circles.",
		image: uiBrand,
		description:
			"The Brand of Sacrifice and Hawk imagery have become some of the series' most enduring forms of personal homage.",
	},
	{
		title: "Figure and Merchandise Hunting",
		source: "Referenced from collector threads and hobby marketplaces.",
		image: portraits.zodd,
		description:
			"Collectors trade tips on Art of War statues, deluxe editions, older figures, soundtracks, and the weird corners of Berserk merch history.",
	},
	{
		title: "Reread Clubs",
		source: "Referenced from forum clubs, subreddits, and read-along threads.",
		image: portraits.puck,
		description:
			"Some of the best Berserk discussion comes from slower rereads where readers track tone shifts, foreshadowing, and the changing shape of Guts' relationships.",
	},
];

export const COMMUNITY_HUBS = [
	{
		name: "SkullKnight.net",
		type: "Forum",
		url: "https://www.skullknight.net/forum/index.php",
		description:
			"Long-running Berserk forum with dedicated sections for continuation discussion, theories, merchandise, fan creations, and podcasts.",
	},
	{
		name: "r/Berserk",
		type: "Reddit",
		url: "https://www.reddit.com/r/Berserk/",
		description:
			"The biggest public social feed for memes, chapter reactions, tattoos, shelf posts, questions, and fan art.",
	},
	{
		name: "MyAnimeList Berserk Club & Boards",
		type: "Forum",
		url: "https://myanimelist.net/manga/2/Berserk",
		description:
			"A general anime/manga home base where new readers often start discussion, reviews, and recommendation threads.",
	},
	{
		name: "DISBOARD Berserk Tag",
		type: "Discord Directory",
		url: "https://disboard.org/servers/tag/berserk",
		description:
			"A living directory of currently active Berserk-tagged Discord servers, useful because specific invites age fast.",
	},
	{
		name: "Discord Directory: Berserk",
		type: "Discord Directory",
		url: "https://discord.directory/servers/berserk",
		description:
			"Another directory-style jumping-off point if you want chat communities rather than forum threads.",
	},
];

export const CHARACTER_GALLERIES = {
	guts: makeCharacterGallery("guts", "Guts"),
	griffith: makeCharacterGallery("griffith", "Griffith"),
	casca: makeCharacterGallery("casca", "Casca"),
	zodd: makeCharacterGallery("zodd", "Zodd"),
	"skull-knight": makeCharacterGallery("skullknight", "Skull Knight"),
	farnese: makeCharacterGallery("farnese", "Farnese"),
	charlotte: makeCharacterGallery("charlotte", "Charlotte"),
	schierke: makeCharacterGallery("schierke", "Schierke"),
	serpico: makeCharacterGallery("serpico", "Serpico"),
	judeau: makeCharacterGallery("judeau", "Judeau"),
	pippin: makeCharacterGallery("pippin", "Pippin"),
	puck: makeCharacterGallery("puck", "Puck"),
	rickert: makeCharacterGallery("rickert", "Rickert"),
	corkus: makeCharacterGallery("corkus", "Corkus"),
	godot: makeCharacterGallery("godot", "Godot"),
	vargas: makeCharacterGallery("vargas", "Vargas"),
};

export const CHARACTER_MEDIA = {
	guts: { image: portraits.guts, cutout: cutouts.guts },
	griffith: { image: portraits.griffith, cutout: cutouts.griffith },
	casca: { image: portraits.casca, cutout: cutouts.casca },
	zodd: { image: portraits.zodd, cutout: cutouts.zodd },
	"skull-knight": { image: portraits.skullKnight, cutout: cutouts.skullKnight },
	farnese: { image: portraits.farnese, cutout: cutouts.farnese },
	charlotte: { image: portraits.charlotte, cutout: cutouts.charlotte },
	schierke: { image: portraits.schierke, cutout: cutouts.schierke },
	serpico: { image: portraits.serpico, cutout: cutouts.serpico },
	judeau: { image: portraits.judeau, cutout: cutouts.judeau },
	pippin: { image: portraits.pippin, cutout: cutouts.pippin },
	puck: { image: portraits.puck, cutout: cutouts.puck },
	rickert: { image: portraits.rickert, cutout: cutouts.rickert },
	corkus: { image: portraits.corkus, cutout: cutouts.corkus },
	godot: { image: portraits.godot, cutout: cutouts.godot },
	horse: { image: portraits.horse, cutout: null },
	vargas: { image: portraits.vargas, cutout: cutouts.vargas },
};
