import React from "react";
import Header from "../components/layout/Header";
import { Link, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { CHARACTERS } from "../constants/Characters";
import ImageCarousel from "../components/ImageCarousel";
import "../styles/pages/Details.css";
import Footer from "../components/layout/Footer";

const Details = () => {
	const { state } = useLocation();
	const { slug } = useParams();
	const character = state || CHARACTERS.find((entry) => entry.slug === slug);

	if (!character) {
		return (
			<>
				<Header shouldAnimate={false} />
				<main className="details page">
					<div className="container">
						<section className="details__missing">
							<h1>Character not found</h1>
							<Link className="button button--primary" to="/characters">
								Back to characters
							</Link>
						</section>
					</div>
				</main>
				<Footer />
			</>
		);
	}

	const { name, cutout, image, intro, traits, epithet, arc, gallery, videos } = character;
	const galleryItems = (gallery || []).map((galleryItem, index) => ({
		src: galleryItem.src || galleryItem,
		alt: galleryItem.alt || `${name} gallery ${index + 1}`,
		caption: galleryItem.caption,
	}));

	return (
		<>
			<Header shouldAnimate={false} />
			<main className="details page">
				<div className="container">
					<section className="details__hero">
						<div className="details__portrait">
							<motion.img
								className="details__cutout"
								src={cutout || image}
								alt={`${name}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ type: "tween", duration: 0.5 }}
							/>
						</div>
						<div className="details__intro">
							<motion.p
								className="details__eyebrow"
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ type: "tween", duration: 0.45 }}
							>
								{epithet}
							</motion.p>
							<motion.h1
								className="details__name"
								initial={{ opacity: 0, x: 30 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ type: "tween", duration: 0.45, delay: 0.1 }}
							>
								{name}
							</motion.h1>
							<p className="details__arc">{arc}</p>
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
					</section>
					<section className="details__personality">
						<h2 className="section-title">Personality</h2>
						<div className="traits__list">
							{traits.map((trait) => (
								<span key={trait} className="trait">
									{trait}
								</span>
							))}
						</div>
					</section>
					<section className="details__gallery">
						<h2 className="section-title">Image gallery</h2>
						<ImageCarousel title={`${name} gallery`} items={galleryItems} />
					</section>
					<section className="details__links">
						<h2 className="section-title">Lore videos</h2>
						<div className="details__video-list">
							{videos?.map((video) => (
								<a key={video.url} href={video.url} target="_blank" rel="noreferrer">
									{video.label}
								</a>
							))}
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Details;
