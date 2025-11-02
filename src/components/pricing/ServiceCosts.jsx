import classes from "./ServiceCosts.module.css";
import { DATA, defaultOffer } from "../../data.js";
import Sale from "./Sale.jsx";

export default function ServiceCosts() {
  const offersWithDefaults = DATA.offers.map((offer) => {
    const mergedVariants = {
      ...defaultOffer.variants,
      ...(offer.variants || {}),
    };
    return { ...defaultOffer, ...offer, variants: mergedVariants };
  });

  const today = new Date();
  const endSale = new Date(DATA.sales.endDate);
  endSale.setHours(23, 59, 0, 0);
  const fullDate = endSale.toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const newOffer = new Date(DATA.sales.newOffer).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.containerWrapper}>
      <h1 className={classes.heading}>Cennik</h1>
      <h2 className={classes.headingNewOffer}>Nowe ceny od {newOffer}r.</h2>
      {today <= endSale && DATA.sales.isActive && (
        <div>
          <h2 className={classes.headingHighlighted}>{DATA.sales.title}</h2>
          <p className={classes.paragrapHighlighted}>
            Skorzystaj z oferty do {fullDate}r.
          </p>{" "}
        </div>
      )}

      <ul className={classes.offerList}>
        {offersWithDefaults.map((offer) => (
          <li className={classes.listItem} key={offer.id}>
            <p className={classes.itemTitle}>{offer.title}</p>
            <div className={classes.itemContainer}>
              <div className={classes.priceContainer}>
                {offer.variants.basic.price ? (
                  <>
                    <p
                      className={`${classes.standard} ${
                        DATA.sales.isActive &&
                        endSale >= today &&
                        offer.variants.sales.basic
                          ? classes.saleOn
                          : ""
                      }
                                      `}
                    >
                      {offer.variants.basic.price}zł
                    </p>
                    /
                  </>
                ) : (
                  <p></p>
                )}
                {offer.variants.extended.price ? (
                  <p
                    className={`${classes.standard} ${
                      DATA.sales.isActive &&
                      endSale >= today &&
                      offer.variants.sales.extended
                        ? classes.saleOn
                        : ""
                    }
                                      }`}
                  >
                    {offer.variants.extended.price}
                    zł
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className={`${classes.priceContainer} ${classes.time}`}>
                {offer.variants.basic.time ? (
                  <>
                    <p>
                      {offer.variants.basic.time}
                      min
                    </p>
                    /
                  </>
                ) : (
                  <p></p>
                )}
                {offer.variants.extended.time ? (
                  <p>
                    {offer.variants.extended.time}
                    min
                  </p>
                ) : (
                  <p></p>
                )}
              </div>

              <div className={classes.priceContainer}>
                {DATA.sales.isActive && endSale >= today ? (
                  <Sale data={offer} />
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className={classes.bonusOffer}>
        Dodatkowo do pakietu 10 zabiegów jest 10% zniżki!
      </p>
    </section>
  );
}
