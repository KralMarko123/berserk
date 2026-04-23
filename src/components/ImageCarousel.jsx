import React, { useMemo, useState } from "react";
import "../styles/components/ImageCarousel.css";

const ImageCarousel = ({ title, items = [] }) => {
	const slides = useMemo(() => items.filter(Boolean), [items]);
	const [activeIndex, setActiveIndex] = useState(0);

	if (!slides.length) return null;

	const activeSlide = slides[activeIndex];
	const showSlide = (nextIndex) => {
		const total = slides.length;
		setActiveIndex((nextIndex + total) % total);
	};

	return (
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
				<img src={activeSlide.src} alt={activeSlide.alt} className="carousel__image" />
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
	);
};

export default ImageCarousel;
