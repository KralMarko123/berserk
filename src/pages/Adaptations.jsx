import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MediaPlaceholder from "../components/MediaPlaceholder";
import { ADAPTATION_SECTIONS } from "../constants/Collections";
import "../styles/pages/Adaptations.css";

const Adaptations = () => {
	return (
		<>
			<Header shouldAnimate={false} />
			<main className="adaptations page">
				<div className="container">
					<section className="page-intro">
						<p className="page-kicker">Versions, attempts, echoes</p>
						<h1>Adaptations</h1>
						<p>
							Berserk has never had one clean adaptation history. It has a handful of official
							swings, a lot of fan stubbornness, and several side roads where people tried to carry
							Miura's world into another medium without losing the weight of it.
						</p>
					</section>
					<div className="adaptations__sections">
						{ADAPTATION_SECTIONS.map((section, sectionIndex) => (
							<section
								className={`adaptations__section adaptations__section--${sectionIndex + 1}`}
								key={section.title}
							>
								<div className="adaptations__heading">
									<div className="adaptations__heading-mark">
										<span>{String(sectionIndex + 1).padStart(2, "0")}</span>
										<p className="page-kicker">{section.kicker}</p>
									</div>
									<h2 className="section-title">{section.title}</h2>
									<p>{section.description}</p>
								</div>
								<div className="adaptations__grid">
									{section.items.map((item) => (
										<a
											key={item.title}
											className="adaptation-card"
											href={item.url}
											target="_blank"
											rel="noreferrer"
										>
											<div className="adaptation-card__image-wrap">
												<MediaPlaceholder
													eyebrow="Artwork needed"
													title={item.title}
													note="Drop a dedicated adaptation still, poster, or key visual here."
												/>
											</div>
											<div className="adaptation-card__copy">
												<div className="adaptation-card__meta">
													<span>{item.format}</span>
													<strong>{item.year}</strong>
												</div>
												<h3>{item.title}</h3>
												<p>{item.description}</p>
											</div>
										</a>
									))}
								</div>
							</section>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Adaptations;
