import { createGalleryItems, getImageAsset } from "./media";

const uiBrand = getImageAsset("brand.png");

const image = (path) => getImageAsset(path);

const portraits = {
	guts: image("characters/guts/guts.jpg"),
	griffith: image("characters/griffith/griffith.jpg"),
	casca: image("characters/casca/casca.jpg"),
	conrad: image("characters/conrad/conrad.webp"),
	zodd: image("characters/zodd/zodd.jpg"),
	femto: image("characters/femto/femto.webp"),
	flora: image("characters/flora/flora.jpg"),
	ganishka: image("characters/ganishka/ganishka.jpg"),
	skullKnight: image("characters/skullknight/skullknight.jpg"),
	isidro: image("characters/isidro/isidro.jpg"),
	isma: image("characters/isma/isma.webp"),
	moonlightBoy: image("characters/moonlightboy/moonlightboy.webp"),
	mozgus: image("characters/mozgus/mozgus.jpg"),
	roderick: image("characters/roderick/roderick.jpg"),
	schierke: image("characters/schierke/schierke.jpg"),
	farnese: image("characters/farnese/farnese.jpg"),
	serpico: image("characters/serpico/serpico.jpg"),
	slan: image("characters/slan/slan.jpg"),
	judeau: image("characters/judeau/judeau.jpg"),
	charlotte: image("characters/charlotte/charlotte.jpg"),
	puck: image("characters/puck/puck.jpg"),
	rickert: image("characters/rickert/rickert.jpg"),
	pippin: image("characters/pippin/pippin.jpg"),
	corkus: image("characters/corkus/corkus.jpg"),
	godot: image("characters/godot/godot.jpg"),
	horse: image("characters/horse/horse.jpg"),
	ubik: image("characters/ubik/ubik.webp"),
	vargas: image("characters/vargas/vargas.jpg"),
	void: image("characters/void/void.webp"),
};

const cutouts = {
	guts: image("characters/guts/guts_cutout.png"),
	griffith: image("characters/griffith/griffith_cutout.png"),
	casca: image("characters/casca/casca_cutout.png"),
	conrad: image("characters/conrad/conrad_cutout.webp"),
	zodd: image("characters/zodd/zodd_cutout.png"),
	femto: image("characters/femto/femto_cutout.png"),
	skullKnight: image("characters/skullknight/skullknight_cutout.png"),
	ganishka: image("characters/ganishka/ganishka_cutout.png"),
	isidro: image("characters/isidro/isidro_cutout.png"),
	isma: image("characters/isma/isma_cutout.png"),
	moonlightBoy: image("characters/moonlightboy/moonlightboy_cutout.png"),
	mozgus: image("characters/mozgus/mozgus_cutout.png"),
	roderick: image("characters/roderick/roderick_cutout.png"),
	schierke: image("characters/schierke/schierke_cutout.png"),
	farnese: image("characters/farnese/farnese_cutout.png"),
	serpico: image("characters/serpico/serpico_cutout.png"),
	slan: image("characters/slan/slan_cutout.png"),
	judeau: image("characters/judeau/judeau_cutout.png"),
	charlotte: image("characters/charlotte/charlotte_cutout.png"),
	puck: image("characters/puck/puck_cutout.png"),
	rickert: image("characters/rickert/rickert_cutout.png"),
	pippin: image("characters/pippin/pippin_cutout.png"),
	corkus: image("characters/corkus/corkus_cutout.png"),
	godot: image("characters/godot/godot_cutout.png"),
	ubik: image("characters/ubik/ubik_cutout.png"),
	vargas: image("characters/vargas/vargas_cutout.webp"),
	void: image("characters/void/void_cutout.webp"),
};

const makeCharacterGallery = (folder, altPrefix) =>
	createGalleryItems(`characters/${folder}/gallery/`, `${altPrefix} gallery`, "Archive image");

const makeArtifactGallery = (folder, altPrefix) =>
	createGalleryItems(`artifacts/${folder}/`, `${altPrefix} artifact`, "Artifact archive");

export const PLOT_BEATS = [
	{
		title: "The Black Swordsman",
		kicker: "A man too angry to die",
		image: image("plot/blackswordsman.jpg"),
		text:
			"Guts moves through a world that barely lets him sleep, let alone heal. At first he reads like a monster story told from the wrong side, until the armor starts to crack and the grief underneath shows through.",
	},
	{
		title: "Golden Age",
		kicker: "Brotherhood, ambition, and the dream",
		image: image("plot/goldenage.webp"),
		text:
			"The Band of the Hawk gives Guts a place to belong, and for a while that feeling is almost enough to make the world seem survivable. That warmth is exactly what makes the collapse hurt so much.",
	},
	{
		title: "The Eclipse",
		kicker: "Causality closes its hand",
		image: image("plot/eclipse.webp"),
		text:
			"The Eclipse turns love, loyalty, and ambition into one enormous wound. Guts and Casca live through it, but Berserk never treats survival as a happy ending. It becomes a burden, a duty, and a reason to keep walking.",
	},
	{
		title: "Conviction",
		kicker: "Faith under a poisoned sky",
		image: image("plot/conviction.webp"),
		text:
			"Religious terror, refugees, apostles, and the Holy See all pile into the same cursed space. Conviction is where Berserk starts asking what belief looks like when fear is doing most of the talking.",
	},
	{
		title: "Millennium Falcon",
		kicker: "The world cracks open",
		image: image("plot/mlleniumfalcon.webp"),
		text:
			"Griffith returns in a body the world can kneel to, while Guts slowly gathers people he cannot afford to lose. By this point the monstrous is no longer hidden. It is just the weather everyone has to live under.",
	},
	{
		title: "Fantasia",
		kicker: "Healing is not the ending",
		image: image("plot/fantasia.webp"),
		text:
			"Magic, memory, and distance start to matter as much as brute force. Fantasia lets Berserk become strangely tender for stretches, then reminds you how fragile that tenderness still is.",
	},
];

export const RESOURCES = [
	{
		title: "Official Dark Horse Manga",
		type: "Publisher",
		url: "https://www.darkhorse.com/Search/Berserk",
		image: image("resources/darkhorse.png"),
		description: "The practical place to check editions, releases, and what is officially in print.",
	},
	{
		title: "SkullKnight.net Encyclopedia",
		type: "Reference",
		url: "https://www.skullknight.net/encyclopedia/",
		image: image("resources/skullknightnet.png"),
		description: "Old-school Berserk internet in the best sense: reference material, podcasts, and years of discussion.",
	},
	{
		title: "Berserk Wiki",
		type: "Reference",
		url: "https://berserk.fandom.com/wiki/Berserk_Wiki",
		image: image("resources/berserkwiki.png"),
		description: "Useful when you need to check a name, arc, location, or weird bit of terminology quickly.",
	},
	{
		title: "Character Lore Videos",
		type: "Video Search",
		url: "https://www.youtube.com/results?search_query=Berserk+character+lore",
		image: image("resources/characterlore.jpg"),
		description: "A decent first stop when you want someone to talk through a character or arc out loud.",
	},
	{
		title: "Berserk Analysis Essays",
		type: "Video Search",
		url: "https://www.youtube.com/results?search_query=Berserk+analysis+Kentaro+Miura",
		image: image("resources/readingessay.jpg"),
		description: "Good for themes, symbolism, page construction, and the kind of long-form reading Berserk invites.",
	},
	{
		title: "Studio Gaga and Continuation News",
		type: "Search",
		url: "https://www.google.com/search?q=Berserk+Studio+Gaga+news",
		image: image("resources/studiogaga.webp"),
		description: "A simple way to keep up with current continuation coverage without pretending one source owns the whole story.",
	},
];

export const ADAPTATION_SECTIONS = [
	{
		title: "Studio Animation",
		kicker: "Official productions",
		description:
			"The official animated history of Berserk is uneven, but each version still tells you something about the period that made it and the part of the manga it chose to carry.",
		items: [
			{
				title: "Berserk (1997)",
				format: "TV Anime",
				year: "1997-1998",
				url: "https://en.wikipedia.org/wiki/Berserk_(1997_TV_series)",
				description:
					"For a lot of readers this is still the adaptation that lands best emotionally: spare, melancholic, and wise enough to let the Golden Age breathe.",
			},
			{
				title: "Berserk: The Golden Age Arc",
				format: "Film Trilogy / Memorial Edition",
				year: "2012-2013 / 2022",
				url: "https://en.wikipedia.org/wiki/Berserk:_The_Golden_Age_Arc",
				description:
					"The movie trilogy goes broader and more polished, and the later Memorial Edition smooths some of that material into a more complete watch.",
			},
			{
				title: "Berserk (2016-2017)",
				format: "TV Anime",
				year: "2016-2017",
				url: "https://en.wikipedia.org/wiki/Berserk_(2016_TV_series)",
				description:
					"An infamous attempt to continue beyond the Golden Age. It covers important material, but its visual choices are still the first thing most people remember.",
			},
		],
	},
	{
		title: "Fan Animation",
		kicker: "Work made out of love and obsession",
		description:
			"Berserk inspires the kind of fan labor that only happens when people cannot quite leave a world alone. Some of it is rough, some of it is astonishing, and almost all of it comes from care.",
		items: [
			{
				title: "Studio Eclypse - The Black Swordsman",
				format: "Fan Project",
				year: "In production",
				url: "https://www.youtube.com/@StudioEclypse",
				description:
					"The most visible current fan attempt to build a substantial Berserk adaptation from the Black Swordsman material outward.",
			},
			{
				title: "Motion Manga and Scene Tests",
				format: "Fan Animation Scene Work",
				year: "Various",
				url: "https://www.youtube.com/results?search_query=berserk+fan+animation",
				description:
					"Short-form tests, animated panels, and scene recreations that usually focus on one confrontation, one mood, or one impossible bit of action.",
			},
			{
				title: "Independent Tribute Shorts",
				format: "Fan Films / Shorts",
				year: "Various",
				url: "https://www.youtube.com/results?search_query=berserk+tribute+animation",
				description:
					"Small teams and solo artists keep making proof-of-concept work that doubles as tribute, portfolio piece, and argument for why Berserk still deserves another try.",
			},
		],
	},
	{
		title: "Other Adaptations",
		kicker: "Games, live-action talk, and side roads",
		description:
			"Not every adaptation of Berserk is a straight anime. Some are games, some are long-rumored projects, and some are strange edge cases that say more about the franchise's afterlife than its canon.",
		items: [
			{
				title: "Sword of the Berserk: Guts' Rage",
				format: "Dreamcast Game",
				year: "1999",
				url: "https://en.wikipedia.org/wiki/Sword_of_the_Berserk:_Guts%27_Rage",
				description:
					"An early game adaptation that feels very of its era, but still matters as one of the first big attempts to let players move through Berserk's world directly.",
			},
			{
				title: "Berserk and the Band of the Hawk",
				format: "Action Game",
				year: "2016",
				url: "https://en.wikipedia.org/wiki/Berserk_and_the_Band_of_the_Hawk",
				description:
					"A musou-style adaptation that turns major arcs into playable spectacle. Not subtle, but sometimes spectacle is exactly what the material is asking for.",
			},
			{
				title: "Live-Action Rumors and Pitch Talk",
				format: "Unmade / Speculative",
				year: "Various",
				url: "https://www.google.com/search?q=berserk+live+action+adaptation",
				description:
					"Berserk keeps being dragged into live-action wishlists and rumor cycles, usually because people want to believe someone, somewhere, will eventually take the risk.",
			},
		],
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
