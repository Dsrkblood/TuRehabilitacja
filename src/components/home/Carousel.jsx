import React, { useState, useEffect } from "react";
import { DATA } from "../../data.js";
import classes from "./Carousel.module.css";

const Carousel = () => {
	const images = [
		DATA.aboutUs.heroImg1,
		DATA.aboutUs.heroImg2,
		DATA.aboutUs.heroImg3,
		DATA.aboutUs.heroImg4,
	];
	const imagesAlt = [
		DATA.aboutUs.heroImgAlt1,
		DATA.aboutUs.heroImgAlt2,
		DATA.aboutUs.heroImgAlt3,
		DATA.aboutUs.heroImgAlt4,
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
		}, 5000); // zmiana co 5 sekundy

		return () => clearInterval(interval); // cleanup po zakończeniu
	}, []);
	console.log(currentIndex);
	return (
		<img
			className={classes.heroImg}
			src={images[currentIndex]}
			alt={imagesAlt[currentIndex]}
		/>
	);
};

export default Carousel;
