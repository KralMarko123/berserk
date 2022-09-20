import React from "react";
import berserkLogo from "../assets/images/berserk_logo.png";
import Header from "../components/layout/Header";
import { motion } from "framer-motion";
import "../styles/pages/Home.css";
import Footer from "../components/layout/Footer";

const Home = () => {
	return (
		<>
			<Header shouldAnimate={true} />
			<div className="home page">
				<div className="container">
					<motion.img
						className="home__logo"
						src={berserkLogo}
						alt="berserk-logo"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ type: "spring", duration: 1 }}
					/>
					<motion.div
						className="home__desc"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ type: "spring", duration: 1, delay: 0.5 }}
					>
						<p>
							Welcome to a simple tribute page to the adventure that is the story of Berserk. The
							author deeply admires Kentaro's work and has invested himself in Guts's hardships and
							unbreakable will.
						</p>
						<p>
							Immerse yourself in the world of Berserk and check out the complex characters,
							intertwined storylines and beautiful designs. Enjoy this fanpage to its potential and
							use it as a simple tool to ease the pain, fellow strugglers.
						</p>
					</motion.div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
