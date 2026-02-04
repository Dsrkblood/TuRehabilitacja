import { useState } from "react";
import classes from "./CirclePhoto.module.css";
import PropTypes from "prop-types";

export default function CirclePhoto({ data }) {
  const [isShow, setIsShow] = useState(false);
  function handleShowAdditionalInfo() {
    setIsShow((prevShow) => !prevShow);
  }

  if (data.isActive) {
    return (
      <>
        <div className={classes.containerWrapper}>
          <div className={classes.imgBackground}>
            <img
              src={data.image.src}
              alt={data.image.alt}
              className={classes.imgOffer}
              loading="lazy"
            ></img>
          </div>

          <div className={classes.offerInfo}>
            <h6
              className={classes.treatmentTitle}
              onClick={handleShowAdditionalInfo}
            >
              {data.title}
            </h6>

            <div className={classes.treatmentInfo}>
              <button
                aria-label="Pokaż więcej informacji"
                name="Pokaż więcej informacji"
                className={classes.toggleButton}
                onClick={handleShowAdditionalInfo}
              >
                {isShow ? `Ukryj szczegóły` : `Pokaż szczegóły`}
                <i
                  className={`${classes.fontAwesome} fa-solid ${
                    isShow ? "fa-arrow-up" : "fa-arrow-down"
                  }`}
                ></i>
              </button>
              <div
                className={`${classes.hiddenDetails} ${
                  isShow ? classes.show : ""
                }`}
              >
                {data.description.map((item, index) => (
                  <p key={index} className={classes.extendedInfo}>
                    {item}
                  </p>
                ))}

                {data.hasDescriptionList ? (
                  <ul className={classes.hasDescriptionList}>
                    {data.hasDescriptionList.map((item, index) => (
                      <li className={classes.hasDescriptionItem} key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {data.recommendations ? (
                  <>
                    <p className={classes.recommendationsTitle}>
                      Wskazania do terapii:
                    </p>
                    <ul className={classes.recommendationsList}>
                      {data.recommendations.map((item, index) => (
                        <li className={classes.recommendationsItem} key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {data.contraindications ? (
                  <>
                    <p className={classes.recommendationsTitle}>
                      Przeciwwskazania do terapii:
                    </p>
                    <ul className={classes.recommendationsList}>
                      {data.contraindications.map((item, index) => (
                        <li className={classes.recommendationsItem} key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

CirclePhoto.propTypes = {
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
