import React from "react";
import "../../styles/components/Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__text">
				<p>© 1990 Berserk, Kentaro Miura.</p>
				<p>
					<a href="https://github.com/KralMarko123/berserk" target="_blank">
						Source code here.
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
