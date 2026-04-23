import gutsImage from "../assets/images/guts.jpg";
import griffithImage from "../assets/images/griffith.jpg";
import cascaImage from "../assets/images/casca.jpg";
import zoddImage from "../assets/images/zodd.jpg";
import skullKnightImage from "../assets/images/skull-knight.jpg";
import schierkeImage from "../assets/images/schierke.jpg";
import farneseImage from "../assets/images/farnese.jpg";
import serpicoImage from "../assets/images/serpico.jpg";
import judeauImage from "../assets/images/judeau.jpg";
import charlotteImage from "../assets/images/charlotte.jpg";
import gutsCutout from "../assets/images/guts_cutout.png";
import griffithCutout from "../assets/images/griffith_cutout.png";
import cascaCutout from "../assets/images/casca_cutout.png";
import zoddCutout from "../assets/images/zodd_cutout.png";
import brandImage from "../assets/images/brand.png";
import puckImage from "../assets/images/puck.jpg";
import rickertImage from "../assets/images/rickert.jpg";
import pippinImage from "../assets/images/pippin.jpg";
import corkusImage from "../assets/images/corkus.jpg";
import godotImage from "../assets/images/godot.jpg";
import horseImage from "../assets/images/horse.jpg";

const galleryItem = (src, alt, caption) => ({ src, alt, caption });

export const PLOT_BEATS = [
	{
		title: "The Black Swordsman",
		kicker: "A man too angry to die",
		image: gutsImage,
		text:
			"Guts wanders through a hostile world with the Brand of Sacrifice pulling the dead toward him. The early story frames him as a terrifying myth before slowly revealing the wound beneath the armor.",
	},
	{
		title: "Golden Age",
		kicker: "Brotherhood, ambition, and the dream",
		image: griffithImage,
		text:
			"The Band of the Hawk gives Guts a place to belong, while Griffith's impossible dream lifts common mercenaries into history. The warmth of that bond is what makes its collapse unbearable.",
	},
	{
		title: "The Eclipse",
		kicker: "Causality closes its hand",
		image: cascaImage,
		text:
			"The sacrifice of the Hawks turns friendship into a cosmic wound. Guts and Casca survive, but survival in Berserk is never clean; it becomes a sentence, a duty, and a reason to keep moving.",
	},
	{
		title: "Conviction",
		kicker: "Faith under a poisoned sky",
		image: farneseImage,
		text:
			"Religious terror, refugees, apostles, and the Holy See collide at St. Albion. The arc turns moral certainty into something unstable and introduces companions who will change Guts' path.",
	},
	{
		title: "Millennium Falcon",
		kicker: "The world cracks open",
		image: zoddImage,
		text:
			"Griffith returns to the physical world and builds toward Falconia while Guts gathers a fragile party around Casca. Monsters stop being hidden rumors and become the new weather of the world.",
	},
	{
		title: "Fantasia",
		kicker: "Healing is not the ending",
		image: schierkeImage,
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
		gallery: [
			galleryItem(brandImage, "Brand of Sacrifice symbol", "The symbol that turns existence into a nightly siege."),
			galleryItem(gutsImage, "Guts", "On Guts, the Brand becomes part of his silhouette and legend."),
			galleryItem(cascaImage, "Casca", "On Casca, it underscores the tragedy carried past the Eclipse."),
		],
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
		gallery: [
			galleryItem(gutsCutout, "Guts cutout with Dragonslayer", "The sword reads as architecture before it reads as steel."),
			galleryItem(gutsImage, "Guts holding the Dragonslayer", "Its silhouette is one of the series' defining images."),
			galleryItem(zoddImage, "Zodd in battle", "The blade feels most alive when matched against monsters that justify its size."),
		],
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
		gallery: [
			galleryItem(griffithImage, "Griffith portrait", "Griffith and the crimson Behelit are inseparable in the reader's memory."),
			galleryItem(charlotteImage, "Charlotte portrait", "The dream of a kingdom gives the Behelit its cruelest context."),
			galleryItem(skullKnightImage, "Skull Knight portrait", "Even when absent from frame, the Behelit haunts the larger war against causality."),
		],
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
		gallery: [
			galleryItem(gutsCutout, "Guts cutout", "Even outside the exact armor design, Guts' silhouette foreshadows this state."),
			galleryItem(schierkeImage, "Schierke portrait", "Schierke's role is essential in helping Guts return from the edge."),
			galleryItem(skullKnightImage, "Skull Knight portrait", "The armor's history echoes through Skull Knight's own past."),
		],
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
		gallery: [
			galleryItem(griffithCutout, "Griffith cutout", "Falconia is inseparable from Griffith's controlled radiance."),
			galleryItem(charlotteImage, "Charlotte portrait", "The city also fulfills the pageantry of Midland's royal fantasy."),
			galleryItem(zoddCutout, "Zodd cutout", "The monsters serving its order are part of what makes the peace uneasy."),
		],
	},
];

export const COMMUNITY_ITEMS = [
	{
		title: "Panel Study Nights",
		source: "Referenced from manga-reading communities and art study threads.",
		image: skullKnightImage,
		description:
			"Fans gather around Miura's dense pages to study hatching, silhouette, armor design, and how motion is carved into still panels.",
	},
	{
		title: "Cosplay and Prop Builds",
		source: "Referenced from convention showcases, maker forums, and video build logs.",
		image: gutsImage,
		description:
			"The Dragonslayer, Berserker Armor, and Brand of Sacrifice remain favorite challenges for builders who like their craft heavy and dramatic.",
	},
	{
		title: "Music for the Long Road",
		source: "Referenced from fan playlists and ambient mixes inspired by the manga.",
		image: brandImage,
		description:
			"From Susumu Hirasawa-inspired mixes to rain-soaked reading playlists, the community has built a whole listening ritual around Berserk.",
	},
	{
		title: "Theory Archives",
		source: "Referenced from long-running forum discussions and subreddit theory posts.",
		image: cascaImage,
		description:
			"Causality, the Moonlight Boy, Skull Knight's history, and Falconia's future keep readers returning to older chapters with fresh eyes.",
	},
	{
		title: "Character Essays",
		source: "Referenced from video essays, blog posts, and reread threads.",
		image: judeauImage,
		description:
			"Fans love writing about the emotional engineering of characters like Judeau, Farnese, Casca, and Griffith because Berserk rewards close rereading.",
	},
	{
		title: "Tattoo and Symbol Design",
		source: "Referenced from tattoo portfolios and fan art circles.",
		image: brandImage,
		description:
			"The Brand of Sacrifice and Hawk imagery have become some of the series' most enduring forms of personal homage.",
	},
	{
		title: "Figure and Merchandise Hunting",
		source: "Referenced from collector threads and hobby marketplaces.",
		image: zoddImage,
		description:
			"Collectors trade tips on Art of War statues, deluxe editions, older figures, soundtracks, and the weird corners of Berserk merch history.",
	},
	{
		title: "Reread Clubs",
		source: "Referenced from forum clubs, subreddits, and read-along threads.",
		image: puckImage,
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
	guts: [
		galleryItem(gutsImage, "Guts portrait", "The war-torn face most readers carry around after the first volume."),
		galleryItem(gutsCutout, "Guts cutout", "A cleaner figure shot for the archive page and quick visual recognition."),
		galleryItem(pippinImage, "Pippin", "A reminder that Guts' story is also shaped by the Band of the Hawk."),
		galleryItem(rickertImage, "Rickert", "The surviving witnesses matter as much as the fallen ones."),
	],
	griffith: [
		galleryItem(griffithImage, "Griffith portrait", "Charm, ambition, and menace occupying the same frame."),
		galleryItem(griffithCutout, "Griffith cutout", "An almost saint-like silhouette that the series constantly destabilizes."),
		galleryItem(charlotteImage, "Charlotte", "Midland's royal dream is part of Griffith's image-making."),
		galleryItem(corkusImage, "Corkus", "The Hawks also show Griffith through the people orbiting him."),
	],
	casca: [
		galleryItem(cascaImage, "Casca portrait", "One of the strongest emotional anchors in the entire manga."),
		galleryItem(cascaCutout, "Casca cutout", "A cleaner portrait treatment for the profile page."),
		galleryItem(judeauImage, "Judeau", "Casca's relationships in the Hawks sharpen her story's tragedy."),
		galleryItem(godotImage, "Godot", "The post-Eclipse caretaking world also shapes how we read Casca."),
	],
	zodd: [
		galleryItem(zoddImage, "Zodd portrait", "The battlefield stops feeling human the moment Zodd arrives."),
		galleryItem(zoddCutout, "Zodd cutout", "A blunt silhouette worthy of an apostle legend."),
		galleryItem(skullKnightImage, "Skull Knight", "His rivalry with Skull Knight gives his violence history."),
		galleryItem(horseImage, "War horse", "Even the setting around Zodd tends to feel feral and charging."),
	],
	"skull-knight": [
		galleryItem(skullKnightImage, "Skull Knight portrait", "A walking omen with just enough history exposed to be dangerous."),
		galleryItem(zoddImage, "Zodd portrait", "His longest conversations often happen through combat."),
		galleryItem(gutsImage, "Guts portrait", "He appears whenever Guts' path brushes against larger patterns."),
	],
	farnese: [
		galleryItem(farneseImage, "Farnese portrait", "A brittle public mask hiding terror, hunger, and change."),
		galleryItem(serpicoImage, "Serpico portrait", "Her story is impossible to separate from Serpico's watchfulness."),
		galleryItem(schierkeImage, "Schierke portrait", "Magic becomes part of her second life."),
		galleryItem(cascaImage, "Casca portrait", "Caregiving and restoration redefine Farnese's role."),
	],
};
