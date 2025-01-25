import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import classes from "./Carousel.module.css";

export default function Carousel({ data }) {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setOffset(prevOffset =>
				prevOffset === data.length - 1 ? 0 : prevOffset + 1
			);
		}, 5000);

		return () => clearInterval(interval);
	}, [data.length]);

	return (
		<div className={classes.carouselWrapper}>
			<motion.div
				className={classes.carouselTrack}
				animate={{ x: `-${offset * 100}%` }}
				transition={{ duration: 2, ease: "easeInOut" }}>
				{data.map(item => (
					<img
						key={item.id}
						src={item.heroImgLowRes}
						srcSet={`${item.heroImgLowRes} 764w, ${item.heroImgHighRes} 1200w`}
						sizes='(max-width: 764px) 100vw, 1200px' 
						alt={item.alt}
						className={classes.carouselImage}
					/>
				))}
			</motion.div>
		</div>
	);
}
