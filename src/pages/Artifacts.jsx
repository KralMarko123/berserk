import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ImageCarousel from "../components/ImageCarousel";
import { ARTIFACTS } from "../constants/Collections";
import "../styles/pages/Artifacts.css";

const Artifacts = () => {
	return (
		<>
			<Header shouldAnimate={false} />
			<main className="artifacts page">
				<div className="container">
					<section className="page-intro">
						<p className="page-kicker">Marks, relics, omens</p>
						<h1>Artifacts</h1>
						<p>
							Berserk's world is carried by objects and concepts that feel heavier than props:
							they wound, tempt, protect, and rewrite destiny. This page treats them like a field
							guide rather than a glossary.
						</p>
					</section>
					<section className="artifacts__list">
						{ARTIFACTS.map((artifact) => (
							<article className="artifact-card" key={artifact.name}>
								<div className="artifact-card__copy">
									<p className="page-kicker">{artifact.type}</p>
									<h2>{artifact.name}</h2>
									<p>{artifact.description}</p>
									<ul className="artifact-card__notes">
										{artifact.notes.map((note) => (
											<li key={note}>{note}</li>
										))}
									</ul>
								</div>
								<div className="artifact-card__gallery">
									<ImageCarousel title={`${artifact.name} gallery`} items={artifact.gallery} />
								</div>
							</article>
						))}
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Artifacts;
