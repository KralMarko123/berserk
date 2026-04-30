import React from "react";
import Header from "../components/layout/Header";
import { motion } from "framer-motion";
import "../styles/pages/Home.css";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";
import { getImageAsset } from "../constants/media";

const berserkLogo = getImageAsset("berserk_logo.png");
const gutsCutout = getImageAsset("characters/guts/guts_cutout.png");

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
								A place to linger with Miura's world for a while: the people, the damage they
								carry, the symbols that keep returning, and the fan rituals that grow around a
								story this heavy.
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
							<p>Profiles, image sets, and the frayed lines that tie people to the larger tragedy.</p>
						</Link>
						<Link to="/plot" className="home__entry">
							<span>02</span>
							<strong>Plot</strong>
							<p>A visual walk through the arcs, from battlefield ambition to something almost mythic.</p>
						</Link>
						<Link to="/resources" className="home__entry">
							<span>03</span>
							<strong>Resources</strong>
							<p>Places to read more, watch more, and keep following the work without drifting into junk.</p>
						</Link>
						<Link to="/artifacts" className="home__entry">
							<span>04</span>
							<strong>Artifacts</strong>
							<p>Marks, weapons, relics, and ideas that keep pressing the story toward fate and ruin.</p>
						</Link>
						<Link to="/adaptations" className="home__entry">
							<span>05</span>
							<strong>Adaptations</strong>
							<p>Official anime, fan attempts, games, and the messy history of bringing Berserk off the page.</p>
						</Link>
						<Link to="/community" className="home__entry">
							<span>06</span>
							<strong>Community</strong>
							<p>The essays, builds, playlists, rereads, and forums where Berserk keeps being shared.</p>
						</Link>
					</section>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
