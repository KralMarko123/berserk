import React from "react";
import Header from "../components/layout/Header";
import { motion } from "framer-motion";
import { plotTextParagraphs } from "../constants/Texts";
import "../styles/general/page.css";
import "../styles/pages/Plot.css";

const Plot = () => {
	return (
		<>
			<Header shouldAnimate={false} />
			<div className="plot page">
				<div className="plot__container">
					{plotTextParagraphs.map((paragraph, i) => (
						<motion.p
							key={paragraph}
							className="plot__paragraph"
							animate={{ opacity: 1, y: 0 }}
							initial={{ opacity: 0, y: 100 }}
							transition={{ type: "tween", duration: 0.5, delay: 0.25 * i }}
						>
							{paragraph}
						</motion.p>
					))}
				</div>
			</div>
		</>
	);
};

export default Plot;
