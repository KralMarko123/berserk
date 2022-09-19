import React from "react";
import { useNavigate } from "react-router-dom";
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
					<li className="nav__list__item" onClick={() => navigate("/characters")}>
						Characters
					</li>
					<li className="nav__list__item" onClick={() => navigate("/plot")}>
						Plot
					</li>
				</ul>
			</nav>
		</motion.header>
	);
};

export default Header;
