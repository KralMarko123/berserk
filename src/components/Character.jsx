import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "../styles/components/Character.css";

const Character = ({ character, index, shouldStagger }) => {
	const characterDetails = {
		...character,
	};
	const nameLength = character.name.length;
	const nameClassName = [
		"character__name",
		nameLength >= 14 ? "character__name--long" : "",
		nameLength >= 10 && nameLength < 14 ? "character__name--compact" : "",
	]
		.filter(Boolean)
		.join(" ");
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
			transition={{
				type: "spring",
				stiffness: 180,
				damping: 22,
				delay: shouldStagger ? 0.045 * index : 0,
			}}
			onClick={() => handleCharacterClick()}
		>
			<img src={character.image} alt={`${character.name}`} className="character__image" />
			<div className="character__overlay">
				<div className="character__text">
					<span className="character__epithet">{character.epithet}</span>
					<h3 className={nameClassName}>{character.name}</h3>
					<p className="character__arc">{character.arc}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Character;
