import React from "react";
import "../../styles/components/Header.css";

const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__nav__list">
					<li className="nav__list__item">Characters</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
