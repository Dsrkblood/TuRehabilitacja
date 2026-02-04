import { DATA } from "../../data.js";
import OfferItem from "./OfferItem.jsx";
import classes from "./TreatmentsItems.module.css";

export default function TreatmentsItems() {
  const offerts = DATA.offers.map((offer) => ({
    id: offer.id,
    isActive: offer.isActive,
    title: offer.title,
    description: offer.description,
    hasDescriptionList: offer.hasDescriptionList,
    contraindications: offer.contraindications,
    recommendations: offer.recommendations,
    image: offer.image,
  }));

  return (
    <section className={classes.containerWrapper}>
      <h1 className={classes.heading}>Nasze usługi</h1>
      <div className={classes.treatmentsContainer}>
        {offerts.map((offer) => (
          <OfferItem key={offer.id} data={offer} />
        ))}
      </div>
    </section>
  );
}
