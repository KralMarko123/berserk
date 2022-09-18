import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/images/brand.png";
import "../../styles/components/Header.css";

const Header = ({ shouldAnimate }) => {
	let navigate = useNavigate();

	return (
		<motion.header
			className="header"
			initial={shouldAnimate ? { opacity: 0, y: -100 } : {}}
			animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
			transition={shouldAnimate ? { type: "spring", duration: 1, delay: 1 } : {}}
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
