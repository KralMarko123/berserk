import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { RESOURCES } from "../constants/Collections";
import "../styles/pages/Resources.css";

const Resources = () => {
	return (
		<>
			<Header shouldAnimate={false} />
			<main className="resources page">
				<div className="container">
					<section className="page-intro">
						<p className="page-kicker">Reading shelf</p>
						<h1>Resources</h1>
						<p>
							A compact shelf for official releases, reference hubs, and searches that lead into
							long-form lore, analysis, and current Berserk material.
						</p>
					</section>
					<section className="resources__grid">
						{RESOURCES.map((resource) => (
							<a
								className="resource-card"
								key={resource.url}
								href={resource.url}
								target="_blank"
								rel="noreferrer"
							>
								<span>{resource.type}</span>
								<h2>{resource.title}</h2>
								<p>{resource.description}</p>
							</a>
						))}
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Resources;
