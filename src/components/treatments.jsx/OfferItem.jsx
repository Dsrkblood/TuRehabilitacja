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
          <p className={classes.extendedInfo}>{data.description}</p>
          {data.hasDescriptionList !== false && (
            <ul className={classes.listOffer}>
              {data.hasDescriptionList.map((listItem, index) => (
                <li className={classes.listItem} key={index}>
                  {listItem}
                </li>
              ))}
            </ul>
          )}
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
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  }).isRequired,
};
