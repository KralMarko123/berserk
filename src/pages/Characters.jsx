import React, { useMemo, useState } from "react";
import Character from "../components/Character";
import Header from "../components/layout/Header";
import { motion } from "framer-motion";
import { CHARACTERS } from "../constants/Characters";
import Footer from "../components/layout/Footer";
import "../styles/pages/Characters.css";

const CATEGORY_ORDER = [
	"All",
	"Strugglers",
	"Hawks",
	"Allies",
	"Midland",
	"Falconia",
	"Apostles",
	"Mythic",
	"Victims",
];

const Characters = () => {
	const [activeCategory, setActiveCategory] = useState("All");
	const categoryCounts = useMemo(() => {
		const counts = CHARACTERS.reduce(
			(acc, character) => ({
				...acc,
				[character.category]: (acc[character.category] || 0) + 1,
			}),
			{}
		);

		return {
			All: CHARACTERS.length,
			...counts,
		};
	}, []);
	const categories = useMemo(
		() => CATEGORY_ORDER.filter((category) => categoryCounts[category]),
		[categoryCounts]
	);
	const visibleCharacters = useMemo(
		() =>
			activeCategory === "All"
				? CHARACTERS
				: CHARACTERS.filter((character) => character.category === activeCategory),
		[activeCategory]
	);

	return (
		<>
			<Header shouldAnimate={false} />
			<div className="characters page">
				<div className="container">
					<div className="characters__desc">
						<motion.p
							animate={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -50 }}
							transition={{ type: "tween", duration: 0.5 }}
						>
							Each character has their own story. Every step along the way has brought joy or sorrow
							into their lives. They represent different traits, beliefs, and philosophies. Kentaro
							highlights every single one throughout the manga using exhilarating action, compelling
							dialog, and spectacular panels.
						</motion.p>
						<motion.p
							animate={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -50 }}
							transition={{ type: "tween", duration: 0.5, delay: 0.25 }}
						>
							Click on any one of them down below to immerse yourself in their world.
						</motion.p>
					</div>
					<div className="characters__filters" aria-label="Character categories">
						{categories.map((category) => (
							<button
								key={category}
								type="button"
								className={`characters__chip ${activeCategory === category ? "is-active" : ""}`}
								onClick={() => setActiveCategory(category)}
							>
								<span>{category}</span>
								<strong>{categoryCounts[category]}</strong>
							</button>
						))}
					</div>
					<div key={activeCategory} className="characters__list">
						{visibleCharacters.map((character, i) => (
							<Character key={`${activeCategory}-${character.slug}`} character={character} index={i} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Characters;
