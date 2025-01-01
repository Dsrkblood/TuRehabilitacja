import { useState } from "react";
import classes from "./CirclePhoto.module.css";

export default function CirclePhoto({ data }) {
	const [isShow, setIsShow] = useState(false);

	function handleShowAdditionalInfo() {
		setIsShow(prevShow => !prevShow);
	}

	const summaryTable = Object.values(data.summaryOptions).map(offer => offer);
	if (data.id === 12) {
		null;
	} else {
		return (
			<>
				<div className={classes.offer}>
					<div className={classes.circleImg}>
						<div
							className={classes.offerImg}
							style={{ backgroundImage: `url(${data.img})` }}></div>
					</div>

					<div className={classes.containerTitle}>
						<h3
							className={classes.offerTitle}
							onClick={handleShowAdditionalInfo}>
							{data.title}
						</h3>

						<div className={classes.moreInfoOffer}>
							<button
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
								className={`${classes.additionalInfo} ${
									isShow ? classes.show : ''
								}`}>
								<p className={classes.summaryOffer}>{data.summary}</p>
								{summaryTable.length > 0 && (
									<ul className={classes.listContainer}>
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
