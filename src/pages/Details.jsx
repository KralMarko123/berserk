import React from "react";
import Header from "../components/layout/Header";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/pages/Details.css";
import Footer from "../components/layout/Footer";

const Details = () => {
	const { state } = useLocation();
	const { name, cutout, intro, traits } = state;

	return (
		<>
			<Header shouldAnimate={false} />
			<div className="details page">
				<div className="container">
					<div className="details__intro">
						<motion.img
							className="details__cutout"
							src={cutout}
							alt={`${name}-cutout`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ type: "tween", duration: 0.5 }}
						/>
						<div className="details__intro__desc">
							<motion.span
								className="details__name"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ type: "tween", duration: 0.5 }}
							>
								{name}
							</motion.span>
							{intro?.map((paragraph, i) => (
								<motion.p
									key={i}
									initial={{ opacity: 0, x: 50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ type: "tween", duration: 0.5, delay: 0.25 + 0.15 * i }}
								>
									{paragraph}
								</motion.p>
							))}
						</div>
					</div>
					<div className="details__personality">
						<span className="personality__title">Personality</span>
						<div className="traits__list">
							{traits.map((trait) => (
								<p key={trait} className="trait">
									{trait}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Details;
