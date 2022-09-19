import React from "react";
import Character from "../components/Character";
import { motion } from "framer-motion";
import { CHARACTERS } from "../constants/Characters";
import Header from "../components/layout/Header";
import "../styles/pages/Characters.css";

const Characters = () => {
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
							Each character has their own story. They follow a path which they themselves have yet
							to truly discover. Every step along the way brings light or darkness into their lives.
							They represent different traits, beliefs, and philosophies. Kentaro highlights every
							single one throughout the manga using exhilirating action, compelling dialog, and
							spectacular panels.
						</motion.p>
						<motion.p
							animate={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -50 }}
							transition={{ type: "tween", duration: 0.5, delay: 0.25 }}
						>
							Click on any one of them to immerse yourself in their world.
						</motion.p>
					</div>
					<div className="characters__list">
						{CHARACTERS.map((character, i) => (
							<Character
								key={i}
								name={character.name}
								image={character.image}
								color={character.color}
								index={i}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Characters;
