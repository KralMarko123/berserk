import { createGalleryItems, getImageAsset } from "./media";

const uiBrand = getImageAsset("brand.png");

const image = (path) => getImageAsset(path);

const portraits = {
	guts: image("guts/guts.jpg"),
	griffith: image("griffith/griffith.jpg"),
	casca: image("casca/casca.jpg"),
	conrad: image("conrad/conrad.webp"),
	zodd: image("zodd/zodd.jpg"),
	femto: image("femto/femto.webp"),
	flora: image("flora/flora.jpg"),
	ganishka: image("ganishka/ganishka.jpg"),
	skullKnight: image("skullknight/skullknight.jpg"),
	isidro: image("isidro/isidro.jpg"),
	isma: image("isma/isma.webp"),
	moonlightBoy: image("moonlightboy/moonlightboy.webp"),
	mozgus: image("mozgus/mozgus.jpg"),
	roderick: image("roderick/roderick.jpg"),
	schierke: image("schierke/schierke.jpg"),
	farnese: image("farnese/farnese.jpg"),
	serpico: image("serpico/serpico.jpg"),
	slan: image("slan/slan.jpg"),
	judeau: image("judeau/judeau.jpg"),
	charlotte: image("charlotte/charlotte.jpg"),
	puck: image("puck/puck.jpg"),
	rickert: image("rickert/rickert.jpg"),
	pippin: image("pippin/pippin.jpg"),
	corkus: image("corkus/corkus.jpg"),
	godot: image("godot/godot.jpg"),
	horse: image("horse/horse.jpg"),
	ubik: image("ubik/ubik.webp"),
	vargas: image("vargas/vargas.jpg"),
	void: image("void/void.webp"),
};

const cutouts = {
	guts: image("guts/guts_cutout.png"),
	griffith: image("griffith/griffith_cutout.png"),
	casca: image("casca/casca_cutout.png"),
	conrad: image("conrad/conrad_cutout.webp"),
	zodd: image("zodd/zodd_cutout.png"),
	femto: image("femto/femto_cutout.png"),
	skullKnight: image("skullknight/skullknight_cutout.png"),
	ganishka: image("ganishka/ganishka_cutout.png"),
	isidro: image("isidro/isidro_cutout.png"),
	isma: image("isma/isma_cutout.png"),
	moonlightBoy: image("moonlightboy/moonlightboy_cutout.png"),
	mozgus: image("mozgus/mozgus_cutout.png"),
	roderick: image("roderick/roderick_cutout.png"),
	schierke: image("schierke/schierke_cutout.png"),
	farnese: image("farnese/farnese_cutout.png"),
	serpico: image("serpico/serpico_cutout.png"),
	slan: image("slan/slan_cutout.png"),
	judeau: image("judeau/judeau_cutout.png"),
	charlotte: image("charlotte/charlotte_cutout.png"),
	puck: image("puck/puck_cutout.png"),
	rickert: image("rickert/rickert_cutout.png"),
	pippin: image("pippin/pippin_cutout.png"),
	corkus: image("corkus/corkus_cutout.png"),
	godot: image("godot/godot_cutout.png"),
	ubik: image("ubik/ubik_cutout.png"),
	vargas: image("vargas/vargas_cutout.webp"),
	void: image("void/void_cutout.webp"),
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
			"Guts moves through a world that barely lets him sleep, let alone heal. At first he reads like a monster story told from the wrong side, until the armor starts to crack and the grief underneath shows through.",
	},
	{
		title: "Golden Age",
		kicker: "Brotherhood, ambition, and the dream",
		image: portraits.griffith,
		text:
			"The Band of the Hawk gives Guts a place to belong, and for a while that feeling is almost enough to make the world seem survivable. That warmth is exactly what makes the collapse hurt so much.",
	},
	{
		title: "The Eclipse",
		kicker: "Causality closes its hand",
		image: portraits.casca,
		text:
			"The Eclipse turns love, loyalty, and ambition into one enormous wound. Guts and Casca live through it, but Berserk never treats survival as a happy ending. It becomes a burden, a duty, and a reason to keep walking.",
	},
	{
		title: "Conviction",
		kicker: "Faith under a poisoned sky",
		image: portraits.farnese,
		text:
			"Religious terror, refugees, apostles, and the Holy See all pile into the same cursed space. Conviction is where Berserk starts asking what belief looks like when fear is doing most of the talking.",
	},
	{
		title: "Millennium Falcon",
		kicker: "The world cracks open",
		image: portraits.zodd,
		text:
			"Griffith returns in a body the world can kneel to, while Guts slowly gathers people he cannot afford to lose. By this point the monstrous is no longer hidden. It is just the weather everyone has to live under.",
	},
	{
		title: "Fantasia",
		kicker: "Healing is not the ending",
		image: portraits.schierke,
		text:
			"Magic, memory, and distance start to matter as much as brute force. Fantasia lets Berserk become strangely tender for stretches, then reminds you how fragile that tenderness still is.",
	},
];

export const RESOURCES = [
	{
		title: "Official Dark Horse Manga",
		type: "Publisher",
		url: "https://www.darkhorse.com/Search/Berserk",
		description: "The practical place to check editions, releases, and what is officially in print.",
	},
	{
		title: "SkullKnight.net Encyclopedia",
		type: "Reference",
		url: "https://www.skullknight.net/encyclopedia/",
		description: "Old-school Berserk internet in the best sense: reference material, podcasts, and years of discussion.",
	},
	{
		title: "Berserk Wiki",
		type: "Reference",
		url: "https://berserk.fandom.com/wiki/Berserk_Wiki",
		description: "Useful when you need to check a name, arc, location, or weird bit of terminology quickly.",
	},
	{
		title: "Character Lore Videos",
		type: "Video Search",
		url: "https://www.youtube.com/results?search_query=Berserk+character+lore",
		description: "A decent first stop when you want someone to talk through a character or arc out loud.",
	},
	{
		title: "Berserk Analysis Essays",
		type: "Video Search",
		url: "https://www.youtube.com/results?search_query=Berserk+analysis+Kentaro+Miura",
		description: "Good for themes, symbolism, page construction, and the kind of long-form reading Berserk invites.",
	},
	{
		title: "Studio Gaga and Continuation News",
		type: "Search",
		url: "https://www.google.com/search?q=Berserk+Studio+Gaga+news",
		description: "A simple way to keep up with current continuation coverage without pretending one source owns the whole story.",
	},
];

export const ARTIFACTS = [
	{
		name: "Brand of Sacrifice",
		type: "Mark",
		description:
			"The Brand turns a body into a beacon for the dead and the monstrous. It is a wound, a sentence, and one of the clearest ways Berserk says survival never comes free.",
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
			"At first the Dragonslayer looks absurd. Then the story gives it weight, drag, and exhaustion until it feels less like a fantasy weapon and more like a life someone should not have had to build around.",
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
			"The Behelit looks almost stupid until it starts mattering, and then it becomes one of the ugliest ideas in the series: a door that only opens when someone is desperate enough to become worse than themselves.",
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
			"The armor gives Guts exactly the kind of help he should never trust. It answers pain with numbness and desperation with more force, which is why it feels powerful and frightening at the same time.",
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
			"Falconia is Griffith's dream cleaned up into architecture. It is beautiful, protective, and impossible to look at innocently once you know what paid for it.",
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
			"The God Hand feel less like bosses waiting at the top of a tower and more like the shape of the world's cruelty made visible. They are what despair looks like once it has a theology.",
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
			"Skull Knight's blade is one of those Berserk ideas that sounds impossible until the page makes it feel obvious. It is violence aimed past the surface of reality and into the structure underneath.",
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
			"The Astral World is where Berserk stops separating the symbolic from the literal. Memory, myth, fear, and creaturely reality all start occupying the same ground.",
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
			"People keep returning to Miura's pages the way art students return to a difficult painting: to slow down, stare hard, and figure out how the line work is doing so much.",
	},
	{
		title: "Cosplay and Prop Builds",
		source: "Referenced from convention showcases, maker forums, and video build logs.",
		image: portraits.guts,
		description:
			"The Dragonslayer, the armor, and the Brand keep pulling in builders who like their projects oversized, difficult, and a little ridiculous in the best way.",
	},
	{
		title: "Music for the Long Road",
		source: "Referenced from fan playlists and ambient mixes inspired by the manga.",
		image: uiBrand,
		description:
			"From Hirasawa-adjacent mixes to rainy reading playlists, people have built a whole atmosphere around how Berserk should sound in your room.",
	},
	{
		title: "Theory Archives",
		source: "Referenced from long-running forum discussions and subreddit theory posts.",
		image: portraits.casca,
		description:
			"Causality, Moonlight Boy, Skull Knight's past, Falconia's future: this fandom loves a theory that sends you back three arcs to check a face in the background.",
	},
	{
		title: "Character Essays",
		source: "Referenced from video essays, blog posts, and reread threads.",
		image: portraits.judeau,
		description:
			"People love writing about how Miura builds emotion, especially around characters like Casca, Judeau, Farnese, and Griffith, because rereading always reveals another seam.",
	},
	{
		title: "Tattoo and Symbol Design",
		source: "Referenced from tattoo portfolios and fan art circles.",
		image: uiBrand,
		description:
			"The Brand and Hawk imagery have become some of the most common ways fans carry Berserk into real life, whether that means tattoos, prints, or handmade things.",
	},
	{
		title: "Figure and Merchandise Hunting",
		source: "Referenced from collector threads and hobby marketplaces.",
		image: portraits.zodd,
		description:
			"Collectors swap notes on statues, deluxe volumes, older figures, soundtracks, and all the oddly specific side roads of Berserk merchandise.",
	},
	{
		title: "Reread Clubs",
		source: "Referenced from forum clubs, subreddits, and read-along threads.",
		image: portraits.puck,
		description:
			"Some of the best discussion comes from rereads where people stop rushing and start noticing tone shifts, planted images, and how Guts changes around other people.",
	},
];

export const COMMUNITY_HUBS = [
	{
		name: "SkullKnight.net",
		type: "Forum",
		url: "https://www.skullknight.net/forum/index.php",
		description:
			"A long-running forum where Berserk discussion can still breathe a little instead of being swallowed by one endless feed.",
	},
	{
		name: "r/Berserk",
		type: "Reddit",
		url: "https://www.reddit.com/r/Berserk/",
		description:
			"The biggest public stream for memes, chapter reactions, shelf photos, tattoos, questions, and the usual chaos of a giant fandom.",
	},
	{
		name: "MyAnimeList Berserk Club & Boards",
		type: "Forum",
		url: "https://myanimelist.net/manga/2/Berserk",
		description:
			"A broad anime and manga home base where newer readers often start with reviews, recommendations, and first impressions.",
	},
	{
		name: "DISBOARD Berserk Tag",
		type: "Discord Directory",
		url: "https://disboard.org/servers/tag/berserk",
		description:
			"A useful directory because specific server invites go stale constantly.",
	},
	{
		name: "Discord Directory: Berserk",
		type: "Discord Directory",
		url: "https://discord.directory/servers/berserk",
		description:
			"Another decent starting point if you want live chat instead of forum-style discussion.",
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
	conrad: makeCharacterGallery("conrad", "Conrad"),
	femto: makeCharacterGallery("femto", "Femto"),
	flora: makeCharacterGallery("flora", "Flora"),
	ganishka: makeCharacterGallery("ganishka", "Ganishka"),
	isidro: makeCharacterGallery("isidro", "Isidro"),
	isma: makeCharacterGallery("isma", "Isma"),
	schierke: makeCharacterGallery("schierke", "Schierke"),
	serpico: makeCharacterGallery("serpico", "Serpico"),
	judeau: makeCharacterGallery("judeau", "Judeau"),
	moonlightboy: makeCharacterGallery("moonlightboy", "Moonlight Boy"),
	mozgus: makeCharacterGallery("mozgus", "Mozgus"),
	pippin: makeCharacterGallery("pippin", "Pippin"),
	puck: makeCharacterGallery("puck", "Puck"),
	rickert: makeCharacterGallery("rickert", "Rickert"),
	roderick: makeCharacterGallery("roderick", "Roderick"),
	corkus: makeCharacterGallery("corkus", "Corkus"),
	godot: makeCharacterGallery("godot", "Godot"),
	slan: makeCharacterGallery("slan", "Slan"),
	ubik: makeCharacterGallery("ubik", "Ubik"),
	vargas: makeCharacterGallery("vargas", "Vargas"),
	void: makeCharacterGallery("void", "Void"),
};

export const CHARACTER_MEDIA = {
	guts: { image: portraits.guts, cutout: cutouts.guts },
	griffith: { image: portraits.griffith, cutout: cutouts.griffith },
	casca: { image: portraits.casca, cutout: cutouts.casca },
	zodd: { image: portraits.zodd, cutout: cutouts.zodd },
	"skull-knight": { image: portraits.skullKnight, cutout: cutouts.skullKnight },
	farnese: { image: portraits.farnese, cutout: cutouts.farnese },
	charlotte: { image: portraits.charlotte, cutout: cutouts.charlotte },
	conrad: { image: portraits.conrad, cutout: cutouts.conrad },
	femto: { image: portraits.femto, cutout: cutouts.femto },
	flora: { image: portraits.flora, cutout: null },
	ganishka: { image: portraits.ganishka, cutout: cutouts.ganishka },
	isidro: { image: portraits.isidro, cutout: cutouts.isidro },
	isma: { image: portraits.isma, cutout: cutouts.isma },
	moonlightboy: { image: portraits.moonlightBoy, cutout: cutouts.moonlightBoy },
	mozgus: { image: portraits.mozgus, cutout: cutouts.mozgus },
	roderick: { image: portraits.roderick, cutout: cutouts.roderick },
	schierke: { image: portraits.schierke, cutout: cutouts.schierke },
	serpico: { image: portraits.serpico, cutout: cutouts.serpico },
	slan: { image: portraits.slan, cutout: cutouts.slan },
	judeau: { image: portraits.judeau, cutout: cutouts.judeau },
	pippin: { image: portraits.pippin, cutout: cutouts.pippin },
	puck: { image: portraits.puck, cutout: cutouts.puck },
	rickert: { image: portraits.rickert, cutout: cutouts.rickert },
	corkus: { image: portraits.corkus, cutout: cutouts.corkus },
	godot: { image: portraits.godot, cutout: cutouts.godot },
	horse: { image: portraits.horse, cutout: null },
	ubik: { image: portraits.ubik, cutout: cutouts.ubik },
	vargas: { image: portraits.vargas, cutout: cutouts.vargas },
	void: { image: portraits.void, cutout: cutouts.void },
};
