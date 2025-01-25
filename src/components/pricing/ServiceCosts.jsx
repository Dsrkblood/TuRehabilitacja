import classes from "./ServiceCosts.module.css";
import { DATA } from "../../data.js";
import Sale from "./Sale.jsx";

export default function ServiceCosts() {
	const offers = Object.values(DATA.offers).map(offer => ({
		id: offer.id,
		title: offer.title,
		priceShort: offer.priceShort,
		priceLong: offer.priceLong,
		timeShort: offer.timeShort,
		timeLong: offer.timeLong,
		saleShort: offer.saleShort,
		saleLong: offer.saleLong,
		img: offer.image,
	}));

	const today = new Date();
	const finishSale = new Date(DATA.contact.saleData);
	finishSale.setHours(23, 59, 0, 0);

	return (
		<section className={classes.containerWrapper}>
			<h1 className={classes.heading}>Cennik</h1>
			{today <= finishSale ? (
				<div>
					<h2 className={classes.headingHighlighted}>Promocja z okazji otwarcia!</h2>
					<p className={classes.paragrapHighlighted}>
						Skorzystaj z oferty do 31 stycznia 2025 r.
					</p>{" "}
				</div>
			) : null}
			<ul className={classes.offerList}>
				{offers.map(offer => (
					<li className={classes.listItem} key={offer.id}>
						<p className={classes.itemTitle}>{offer.title}</p>
						<div className={classes.itemContainer}>
							{/* Czas zabiegu */}
							<div className={classes.priceContainer}>
								{offer.timeShort ? (
									<>
										<p>
											{offer.timeShort}
											min
										</p>
										/
									</>
								) : (
									<p></p>
								)}
								{offer.timeLong ? (
									<p>
										{offer.timeLong}
										min
									</p>
								) : (
									<p></p>
								)}
							</div>
							{/* Cena standardowa */}
							<div className={classes.priceContainer}>
								{offer.priceShort ? (
									<>
										<p
											className={`${classes.standard} ${
												today <= finishSale && offer.saleShort
													? classes.saleOn
													: ""
											}
                                    }`}>
											{offer.priceShort}zł
										</p>
										/
									</>
								) : (
									<p></p>
								)}
								{offer.priceLong ? (
									<p
										className={`${classes.standard} ${
											today <= finishSale && offer.saleLong
												? classes.saleOn
												: ""
										}
                                    }`}>
										{offer.priceLong}
										zł
									</p>
								) : (
									<p></p>
								)}
							</div>
							{/* Wyprzedaż */}
							<div className={classes.priceContainer}>
								{today <= finishSale ? <Sale data={offer} /> : null}
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
