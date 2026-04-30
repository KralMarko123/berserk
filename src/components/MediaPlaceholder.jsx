import React from "react";
import "../styles/components/MediaPlaceholder.css";

const MediaPlaceholder = ({ eyebrow = "Placeholder", title, note, className = "" }) => {
	return (
		<div className={`media-placeholder ${className}`.trim()}>
			<span className="media-placeholder__eyebrow">{eyebrow}</span>
			<strong className="media-placeholder__title">{title}</strong>
			{note ? <p className="media-placeholder__note">{note}</p> : null}
		</div>
	);
};

export default MediaPlaceholder;
