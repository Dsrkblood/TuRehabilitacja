import { useState } from "react";
import classes from "./CirclePhoto.module.css";

export default function CirclePhoto({ data }) {
	const [isShow, setIsShow] = useState(false);

	function handleShowAdditionalInfo() {
		setIsShow(prevShow => !prevShow);
	}

	const summaryTable = Object.values(data.summaryOptions).map(offer => offer);
	if (data.id === 14 || data.id === 4 || data.id === 10) {
		null;
	} else {
		return (
			<>
				<div className={classes.containerWrapper}>
					<div className={classes.imgBackground}>
						<img
							src={data.image}
							alt={data.imageAlt}
							className={classes.imgOffer}
							loading='lazy'></img>
					</div>

					<div className={classes.offerInfo}>
						<h6
							className={classes.treatmentTitle}
							onClick={handleShowAdditionalInfo}>
							{data.title}
						</h6>

						<div className={classes.treatmentInfo}>
							<button
								aria-label='Pokaż więcej informacji'
								name='Pokaż więcej informacji'
								className={classes.toggleButton}
								onClick={handleShowAdditionalInfo}>
								{isShow ? `Ukryj szczegóły` : `Pokaż szczegóły`}
								<i
									className={`${classes.fontAwesome} fa-solid ${
										isShow ? "fa-arrow-up" : "fa-arrow-down"
									}`}></i>
							</button>
							<div
								className={`${classes.hiddenDetails} ${
									isShow ? classes.show : ""
								}`}>
								<p className={classes.extendedInfo}>{data.summary}</p>
								{summaryTable.length > 0 && (
									<ul className={classes.listInfo}>
										{summaryTable.map((item, index) => (
											<li className={classes.listItem} key={index}>
												{item}
											</li>
										))}
									</ul>
								)}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
