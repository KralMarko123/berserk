import React from "react";
import Header from "../components/layout/Header";
import { motion } from "framer-motion";
import MediaPlaceholder from "../components/MediaPlaceholder";
import { PLOT_BEATS } from "../constants/Collections";
import "../styles/pages/Plot.css";
import Footer from "../components/layout/Footer";

const Plot = () => {
	return (
		<>
			<Header shouldAnimate={false} />
			<main className="plot page">
				<div className="container">
					<section className="page-intro">
						<p className="page-kicker">A path through causality</p>
						<h1>Plot</h1>
						<p>
							Berserk is easier to feel than to summarize. Every arc leaves behind a different kind
							of wreckage, and the story keeps asking what can still be carried forward after that.
							This page leans into that rhythm instead of flattening everything into one recap.
						</p>
					</section>
					<section className="plot__timeline">
						{PLOT_BEATS.map((beat, i) => (
							<motion.article
								key={beat.title}
								className="plot__beat"
								animate={{ opacity: 1, y: 0 }}
								initial={{ opacity: 0, y: 50 }}
								transition={{ type: "tween", duration: 0.5, delay: 0.12 * i }}
							>
								<div className="plot__image-wrap">
									{beat.image ? (
										<img src={beat.image} alt={beat.title} />
									) : (
										<MediaPlaceholder
											eyebrow="Panel needed"
											title={beat.title}
											note="Drop a manga panel or curated story image here."
										/>
									)}
								</div>
								<div className="plot__beat-copy">
									<span>{beat.kicker}</span>
									<h2>{beat.title}</h2>
									<p>{beat.text}</p>
								</div>
							</motion.article>
						))}
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Plot;
