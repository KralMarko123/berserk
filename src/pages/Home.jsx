import React from "react";
import berserkLogo from "../assets/images/berserk_logo.png";
import "../styles/general/page.css";
import "../styles/pages/Home.css";

const Home = () => {
	return (
		<div className="home page">
			<div className="home__container">
				<img className="home__logo" src={berserkLogo} alt="berserk-logo" />
				<div className="home__desc">
					<p>
						I personally started reading berserk a couple of years ago and have been hooked ever
						since. I dream of being as strong as Guts and can only hope to have the will needed to
						persevere through the hardships of life.
					</p>
					<p>
						Enjoy this little fanpage of mine and use it as a simple tool to ease the pain, my
						fellow strugglers.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
