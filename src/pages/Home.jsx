import React from "react";
import berserkLogo from "../assets/images/berserk_logo.png";
import gutsCutout from "../assets/images/guts_cutout.png";
import Header from "../components/layout/Header";
import { motion } from "framer-motion";
import "../styles/pages/Home.css";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<Header shouldAnimate={true} />
			<div className="home page">
				<div className="container">
					<section className="home__hero">
						<motion.div
							className="home__copy"
							initial={{ opacity: 0, x: -40 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ type: "spring", duration: 0.8 }}
						>
							<img className="home__logo" src={berserkLogo} alt="Berserk" />
							<p className="home__eyebrow">A quiet archive for strugglers</p>
							<h1>Berserk</h1>
							<p>
								A cozy, ash-dark tribute to Kentaro Miura's world: characters, arcs, lore
								materials, and the community rituals that keep the story alive between reads.
							</p>
							<div className="home__actions">
								<Link className="button button--primary" to="/characters">
									Enter characters
								</Link>
								<Link className="button button--ghost" to="/plot">
									Read the plot
								</Link>
							</div>
						</motion.div>
						<motion.div
							className="home__figure"
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ type: "spring", duration: 0.9, delay: 0.2 }}
						>
							<img src={gutsCutout} alt="Guts with Dragonslayer" />
						</motion.div>
					</section>
					<section className="home__entry-grid" aria-label="Archive sections">
						<Link to="/characters" className="home__entry">
							<span>01</span>
							<strong>Characters</strong>
							<p>Portraits, traits, galleries, and lore trails.</p>
						</Link>
						<Link to="/plot" className="home__entry">
							<span>02</span>
							<strong>Plot</strong>
							<p>A visual arc path through the manga's major movements.</p>
						</Link>
						<Link to="/resources" className="home__entry">
							<span>03</span>
							<strong>Resources</strong>
							<p>Official links, reference hubs, and video searches.</p>
						</Link>
						<Link to="/artifacts" className="home__entry">
							<span>04</span>
							<strong>Artifacts</strong>
							<p>Marks, relics, armor, blades, and concepts that shape fate.</p>
						</Link>
						<Link to="/community" className="home__entry">
							<span>05</span>
							<strong>Community</strong>
							<p>Fan practices, references, builds, theories, and study rituals.</p>
						</Link>
					</section>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
