import React, { useEffect, useMemo, useState } from "react";
import "../styles/components/ImageCarousel.css";

const ImageCarousel = ({ title, items = [], emptyMessage = "No archived images have been added here yet." }) => {
	const slides = useMemo(() => items.filter(Boolean), [items]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isLightboxOpen, setIsLightboxOpen] = useState(false);

	if (!slides.length) {
		return (
			<section className="carousel" aria-label={title}>
				<div className="carousel__empty">
					<p>{emptyMessage}</p>
				</div>
			</section>
		);
	}

	const activeSlide = slides[activeIndex];
	const showSlide = (nextIndex) => {
		const total = slides.length;
		setActiveIndex((nextIndex + total) % total);
	};

	useEffect(() => {
		if (!isLightboxOpen) return undefined;

		const handleKeyDown = (event) => {
			if (event.key === "Escape") setIsLightboxOpen(false);
			if (event.key === "ArrowLeft") showSlide(activeIndex - 1);
			if (event.key === "ArrowRight") showSlide(activeIndex + 1);
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeIndex, isLightboxOpen]);

	return (
		<>
			<section className="carousel" aria-label={title}>
				<div className="carousel__stage">
					<button
						className="carousel__nav carousel__nav--prev"
						type="button"
						onClick={() => showSlide(activeIndex - 1)}
						aria-label="Previous image"
					>
						<span />
					</button>
					<button
						className="carousel__focus"
						type="button"
						onClick={() => setIsLightboxOpen(true)}
						aria-label={`Open ${activeSlide.alt} larger`}
					>
						<img src={activeSlide.src} alt={activeSlide.alt} className="carousel__image" />
					</button>
					{activeSlide.caption ? <p className="carousel__caption">{activeSlide.caption}</p> : null}
					<button
						className="carousel__nav carousel__nav--next"
						type="button"
						onClick={() => showSlide(activeIndex + 1)}
						aria-label="Next image"
					>
						<span />
					</button>
				</div>
				<div className="carousel__thumbs" role="tablist" aria-label={`${title} thumbnails`}>
					{slides.map((slide, index) => (
						<button
							key={`${slide.src}-${index}`}
							className={`carousel__thumb ${index === activeIndex ? "is-active" : ""}`}
							type="button"
							onClick={() => setActiveIndex(index)}
							aria-label={`Show image ${index + 1}`}
							aria-pressed={index === activeIndex}
						>
							<img src={slide.src} alt={slide.alt} />
						</button>
					))}
				</div>
			</section>
			{isLightboxOpen ? (
				<button
					className="carousel__lightbox"
					type="button"
					onClick={() => setIsLightboxOpen(false)}
					aria-label="Close large image view"
				>
					<span className="carousel__lightbox-backdrop" />
					<span className="carousel__lightbox-frame" onClick={(event) => event.stopPropagation()}>
						<img src={activeSlide.src} alt={activeSlide.alt} className="carousel__lightbox-image" />
						{activeSlide.caption ? <span className="carousel__lightbox-caption">{activeSlide.caption}</span> : null}
					</span>
				</button>
			) : null}
		</>
	);
};

export default ImageCarousel;
