import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { VARIANTS } from "../../constants/AnimationVariants";
import { getImageAsset } from "../../constants/media";
import "../../styles/components/Header.css";

const logo = getImageAsset("brand.png");

const Header = ({ shouldAnimate }) => {
	let navigate = useNavigate();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		if (window.innerWidth > 767) {
			return undefined;
		}

		document.body.classList.toggle("menu-open", isMenuOpen);

		return () => {
			document.body.classList.remove("menu-open");
		};
	}, [isMenuOpen]);

	return (
		<motion.header
			className="header"
			variants={VARIANTS.header}
			initial={shouldAnimate ? "hidden" : {}}
			animate={shouldAnimate ? "show" : {}}
			transition={shouldAnimate ? VARIANTS.header.timing : {}}
		>
			<button
				type="button"
				className={`header__backdrop ${isMenuOpen ? "is-open" : ""}`}
				aria-label="Close navigation menu"
				aria-hidden={!isMenuOpen}
				tabIndex={isMenuOpen ? 0 : -1}
				onClick={() => setIsMenuOpen(false)}
			/>
			<nav className="header__nav">
				<div className="header__topbar">
					<img
						className="header__logo"
						src={logo}
						alt="berserk-brand"
						onClick={() => navigate("/")}
					/>
					<button
						type="button"
						className={`header__menu-button ${isMenuOpen ? "is-open" : ""}`}
						aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
						aria-expanded={isMenuOpen}
						aria-controls="mobile-site-navigation"
						onClick={() => setIsMenuOpen((current) => !current)}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
				<ul
					id="mobile-site-navigation"
					className={`header__nav__list ${isMenuOpen ? "is-open" : ""}`}
				>
					<li className="header__nav__label" aria-hidden="true">
						<span>Archive</span>
						<strong>Choose a page</strong>
					</li>
					<li>
						<NavLink className="nav__list__item" to="/characters">
							Characters
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__list__item" to="/plot">
							Plot
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__list__item" to="/resources">
							Resources
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__list__item" to="/adaptations">
							Adaptations
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__list__item" to="/artifacts">
							Artifacts
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__list__item" to="/community">
							Community
						</NavLink>
					</li>
				</ul>
			</nav>
		</motion.header>
	);
};

export default Header;
