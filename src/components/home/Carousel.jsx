import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import classes from "./Carousel.module.css";

export default function Carousel({ data }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) =>
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
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {data.map((item, index) => (
          <img
            key={index}
            src={item.highRes}
            srcSet={`${item.lowRes} 764w, ${item.highRes} 1200w`}
            sizes="(max-width: 764px) 100vw, 1200px"
            alt={item.alt}
            className={classes.carouselImage}
            loading="lazy"
            decoding="async"
          />
        ))}
      </motion.div>
    </div>
  );
}
