import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MediaPlaceholder from "../components/MediaPlaceholder";
import { COMMUNITY_FEATURE_IMAGE, COMMUNITY_HUBS, COMMUNITY_ITEMS } from "../constants/Collections";
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
					<section className="community__feature">
						<div className="community__feature-copy">
							<p className="page-kicker">What the fandom actually does</p>
							<h2 className="section-title">Not just reactions, but rituals</h2>
							<p>
								A lot of Berserk community work is really a form of rereading. People rebuild the
								swords, restudy the pages, cut together music, and keep trying to name what this
								story does to them without flattening it.
							</p>
						</div>
						<div className="community__feature-plate">
							{COMMUNITY_FEATURE_IMAGE ? (
								<img src={COMMUNITY_FEATURE_IMAGE} alt="Berserk community collage" />
							) : (
								<MediaPlaceholder
									eyebrow="Community artwork needed"
									title="Featured community visual"
									note="Use this space for a collage, convention photo, fan wall, or other scene-setting image."
								/>
							)}
						</div>
					</section>
					<section className="community__grid">
						{COMMUNITY_ITEMS.map((item, index) => (
							<article className="community-card" key={item.title}>
								<div className="community-card__media">
									{item.image ? (
										<img src={item.image} alt={item.title} />
									) : (
										<MediaPlaceholder
											eyebrow="Community image needed"
											title={item.title}
											note="Drop a photo, screenshot, post capture, or fan-work image here."
										/>
									)}
								</div>
								<div className="community-card__copy">
									<div className="community-card__meta">
										<strong>{String(index + 1).padStart(2, "0")}</strong>
										<span>{item.source}</span>
									</div>
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
