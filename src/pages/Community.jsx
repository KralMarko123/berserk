import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { COMMUNITY_HUBS, COMMUNITY_ITEMS } from "../constants/Collections";
import "../styles/pages/Community.css";

const Community = () => {
	return (
		<>
			<Header shouldAnimate={false} />
			<main className="community page">
				<div className="container">
					<section className="page-intro">
						<p className="page-kicker">Around the campfire</p>
						<h1>Community</h1>
						<p>
							Berserk fandom has always felt a little handmade. People do not just post reactions;
							they build swords, annotate panels, trade theories, make playlists, and keep finding
							new ways to sit with the same wounds together.
						</p>
					</section>
					<section className="community__grid">
						{COMMUNITY_ITEMS.map((item) => (
							<article className="community-card" key={item.title}>
								<img src={item.image} alt={item.title} />
								<div>
									<span>{item.source}</span>
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</article>
						))}
					</section>
					<section className="community__hubs">
						<div className="community__hubs-copy">
							<p className="page-kicker">Forums, chats, threads</p>
							<h2>Places to keep reading with other people</h2>
							<p>
								Some people want long theory threads. Some want a fast-moving server. Some just
								want somewhere decent to ask a question without being buried. These are the doors
								most worth leaving open here.
							</p>
						</div>
						<div className="community__hub-grid">
							{COMMUNITY_HUBS.map((hub) => (
								<a key={hub.url} className="community-hub" href={hub.url} target="_blank" rel="noreferrer">
									<span>{hub.type}</span>
									<h3>{hub.name}</h3>
									<p>{hub.description}</p>
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

export default Community;
