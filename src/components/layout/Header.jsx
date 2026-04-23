import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { VARIANTS } from "../../constants/AnimationVariants";
import logo from "../../assets/images/brand.png";
import "../../styles/components/Header.css";

const Header = ({ shouldAnimate }) => {
	let navigate = useNavigate();

	return (
		<motion.header
			className="header"
			variants={VARIANTS.header}
			initial={shouldAnimate ? "hidden" : {}}
			animate={shouldAnimate ? "show" : {}}
			transition={shouldAnimate ? VARIANTS.header.timing : {}}
		>
			<nav className="header__nav">
				<img
					className="header__logo"
					src={logo}
					alt="berserk-brand"
					onClick={() => navigate("/")}
				/>
				<ul className="header__nav__list">
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
