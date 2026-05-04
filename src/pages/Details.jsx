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

	const { name, category, cutout, image, intro, plotConnection, quote, traits, epithet, arc, gallery, videos } =
		character;
	const galleryItems = (gallery || []).map((galleryItem, index) => ({
		src: galleryItem.src || galleryItem,
		alt: galleryItem.alt || `${name} gallery ${index + 1}`,
		caption: galleryItem.caption,
	}));
	const plotRoleCopy =
		plotConnection && plotConnection.length
			? plotConnection
			: [
					`${name} matters to Berserk less as background decoration and more as part of the emotional machinery around the people at the center.`,
					`Even when the role is brief, the character helps shape the tone, pressure, or aftermath of the arcs they appear in.`,
			  ];

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
							<div className="details__meta" aria-label={`${name} at a glance`}>
								<div className="details__meta-item">
									<span>Category</span>
									<strong>{category}</strong>
								</div>
								<div className="details__meta-item">
									<span>Traits</span>
									<strong>{traits.length}</strong>
								</div>
								<div className="details__meta-item">
									<span>Gallery</span>
									<strong>{galleryItems.length ? `${galleryItems.length} images` : "Not yet archived"}</strong>
								</div>
							</div>
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
					<section className="details__context">
						<div className="details__personality">
							<h2 className="section-title">Personality</h2>
							<div className="traits__list">
								{traits.map((trait) => (
									<span key={trait} className="trait">
										{trait}
									</span>
								))}
							</div>
						</div>
						<div className="details__plot-role">
							<h2 className="section-title">Connection To The Plot</h2>
							<div className="details__plot-copy">
								{plotRoleCopy.map((paragraph, index) => (
									<p key={`${name}-plot-${index}`}>{paragraph}</p>
								))}
							</div>
						</div>
					</section>
					{quote ? (
						<section className="details__quote" aria-label={`${name} quote`}>
							<p className="details__quote-mark">Archive quote</p>
							<blockquote>{quote}</blockquote>
							<cite>{name}</cite>
						</section>
					) : null}
					<section className="details__gallery">
						<h2 className="section-title">Image gallery</h2>
						<ImageCarousel
							title={`${name} gallery`}
							items={galleryItems}
							emptyMessage={`No gallery images have been catalogued for ${name} yet.`}
						/>
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
