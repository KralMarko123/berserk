import React from "react";
import { motion } from "framer-motion";
import "../styles/components/Character.css";

const Character = ({ name, image, color, index }) => {
	return (
		<motion.div
			className="character"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", duration: 0.25, delay: 0.75 + 0.15 * index }}
		>
			<img src={image} alt={`${name}-image`} className="character__image" />
			<div className="character__overlay">
				<h3 className="character__name">{name}</h3>
			</div>
		</motion.div>
	);
};

export default Character;
