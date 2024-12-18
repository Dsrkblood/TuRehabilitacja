import classes from "./CirclePhoto.module.css";

export default function CirclePhoto({ data }) {
	const summaryTable = Object.values(data.summaryOptions).map(offer => offer);
	if (data.id === 12) {
		null;
	} else {
		return (
			<>
				<div className={classes.offer}>
					<div className={classes.containerImg}>
						<div className={classes.circleImg}>
							<div
								className={classes.offerImg}
								style={{ backgroundImage: `url(${data.img})` }}></div>
						</div>
					</div>
					<div className={classes.containerTitle}>
						<h3 className={classes.offerTitle}>{data.title}</h3>
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
			</>
		);
	}
}
