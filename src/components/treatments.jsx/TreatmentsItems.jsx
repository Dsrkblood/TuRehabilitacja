import { DATA } from "../../data.js";
import OfferItem from "./OfferItem.jsx";
import classes from "./TreatmentsItems.module.css";

export default function TreatmentsItems() {
	const offerts = Object.values(DATA.offers).map(offer => ({
		id: offer.id,
		title: offer.title,
		summary: offer.summary,
		summaryOptions: offer.summaryOptions,
		img: offer.image,
	}));

	return (
		<section className={classes.containerWrapper}>
			<h1 className={classes.heading}>Nasze usługi</h1>
			<div className={classes.treatmentsContainer}>
				{offerts.map(offer => (
					<OfferItem key={offer.id} data={offer} />
				))}
			</div>
		</section>
	);
}
