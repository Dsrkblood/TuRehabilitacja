import classes from "./ServiceCosts.module.css";
import { DATA } from "../../data.js";

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
	return (
		<section className={classes.section}>
			<h1 className={classes.header}>Cennik</h1>
			<ul className={classes.listTable}>
				{offers.map(offer => (
					<li className={classes.listItem} key={offer.id}>
						<p className={classes.listItemTitle}>{offer.title}</p>
						<div className={classes.listItemCol}>
							{/* Czas zabiegu */}
							<div className={classes.priceBox}>
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
							<div className={classes.priceBox}>
								{offer.priceShort ? (
									<>
										<p
											className={`${classes.standard} ${
												offer.saleShort ? classes.saleOn : ""
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
											offer.saleLong ? classes.saleOn : ""
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
							<div className={classes.priceBox}>
								{offer.saleShort ? (
									<>
										<p className={classes.sale}>
											{offer.saleShort}
											zł
										</p>
										/
									</>
								) : (
									<p></p>
								)}
								{offer.saleLong ? (
									<p className={classes.sale}>
										{offer.saleLong}
										zł
									</p>
								) : (
									<p></p>
								)}
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
