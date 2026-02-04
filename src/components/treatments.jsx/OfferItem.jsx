import { useRef, useState } from "react";
import PropTypes from "prop-types";

import classes from "./OfferItem.module.css";
export default function Offer({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const summaryRef = useRef(null);

  function handleOpenSumary() {
    setIsOpen((prevState) => !prevState);
  }
  if (data.isActive) {
    return (
      <div className={classes.offerInfo}>
        <p
          ref={summaryRef}
          onClick={handleOpenSumary}
          className={classes.titleOffer}
        >
          {data.title}
        </p>
        <div
          className={`${classes.hiddenDetails} ${isOpen ? classes.open : ""}`}
        >
          {data.description.map((item, index) => (
            <p key={index} className={classes.extendedInfo}>
              {item}
            </p>
          ))}

          {data.hasDescriptionList !== false && (
            <ul className={classes.listOffer}>
              {data.hasDescriptionList.map((listItem, index) => (
                <li className={classes.listItem} key={index}>
                  {listItem}
                </li>
              ))}
            </ul>
          )}
          <div className={classes.recommendationsSection}>
            {data.recommendations !== false && (
              <div>
                <p className={classes.recommendationsTitle}>
                  Wskazania do terapii:
                </p>
                <ul className={classes.recomendationList}>
                  {data.recommendations.map((listItem, index) => (
                    <li className={classes.recomendationItem} key={index}>
                      &bull; {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {data.contraindications !== false && (
              <div>
                <p className={classes.recommendationsTitle}>
                  Przeciwwskazania do terapii:
                </p>
                <ul className={classes.recomendationList}>
                  {data.contraindications.map((listItem, index) => (
                    <li className={classes.recomendationItem} key={index}>
                      &bull; {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Offer.propTypes = {
  data: PropTypes.shape({
    isActive: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    hasDescriptionList: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    contraindications: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    recommendations: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  }).isRequired,
};
