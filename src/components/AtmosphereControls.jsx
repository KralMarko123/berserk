import React, { useEffect, useRef, useState } from "react";
import ambientTrack from "../assets/audio/berserk-ambient-compressed.mp3";
import "../styles/components/AtmosphereControls.css";

const AtmosphereControls = () => {
	const audioRef = useRef(null);
	const [theme, setTheme] = useState(() => localStorage.getItem("berserk-theme") || "dark");
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		document.body.dataset.theme = theme;
		localStorage.setItem("berserk-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === "dark" ? "ember" : "dark"));
	};

	const toggleAudio = async () => {
		if (!audioRef.current) return;

		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
			return;
		}

		try {
			audioRef.current.volume = 0.28;
			await audioRef.current.play();
			setIsPlaying(true);
		} catch {
			setIsPlaying(false);
		}
	};

	return (
		<div className="atmosphere" aria-label="Atmosphere controls">
			<audio ref={audioRef} src={ambientTrack} loop />
			<button
				className="atmosphere__button"
				type="button"
				onClick={toggleTheme}
				aria-label="Toggle ember theme"
				title="Toggle theme"
			>
				<span className={`atmosphere__icon atmosphere__icon--${theme === "dark" ? "moon" : "sun"}`} />
			</button>
			<button
				className={`atmosphere__button ${isPlaying ? "is-active" : ""}`}
				type="button"
				onClick={toggleAudio}
				aria-label={isPlaying ? "Pause ambient audio" : "Play ambient audio"}
				title={isPlaying ? "Pause ambient audio" : "Play ambient audio"}
			>
				<span className={`atmosphere__icon atmosphere__icon--${isPlaying ? "pause" : "play"}`} />
			</button>
		</div>
	);
};

export default AtmosphereControls;
