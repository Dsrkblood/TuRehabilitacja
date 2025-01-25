import { useRef, useState, useEffect } from "react";
import classes from "./OfferItem.module.css";
export default function Offer({ data }) {
	const [isOpen, setIsOpen] = useState(false);
	const summaryRef = useRef(null);
	const offerOption = Object.values(data.summaryOptions).map(offer => offer);

	function handleOpenSumary() {
		setIsOpen(prevState => !prevState);
	}

	if (data.id === 12) {
		null;
	} else {
		return (
			<div className={classes.offerInfo}>
				<p
					ref={summaryRef}
					onClick={handleOpenSumary}
					className={classes.titleOffer}>
					{data.title}
				</p>
				<div className={`${classes.hiddenDetails} ${isOpen ? classes.open : ""}`}>
					<p className={classes.extendedInfo}>{data.summary}</p>
					{offerOption.length > 0 && (
						<ul className={classes.listOffer}>
							{offerOption.map((item, index) => (
								<li className={classes.listItem} key={index}>
									{item}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		);
	}
}
