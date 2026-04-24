import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "../styles/components/Character.css";

const Character = ({ character, index }) => {
	const characterDetails = {
		...character,
	};
	let navigate = useNavigate();
	const handleCharacterClick = () => {
		navigate(`details/${character.slug}`, { state: { ...characterDetails } });
	};

	return (
		<motion.div
			className="character"
			layout
			initial={{ opacity: 0, y: 28, scale: 0.985 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.04 * index }}
			onClick={() => handleCharacterClick()}
		>
			<img src={character.image} alt={`${character.name}`} className="character__image" />
			<div className="character__overlay">
				<span className="character__epithet">{character.epithet}</span>
				<h3 className="character__name">{character.name}</h3>
				<p className="character__arc">{character.arc}</p>
			</div>
		</motion.div>
	);
};

export default Character;
