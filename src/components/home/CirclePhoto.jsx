import classes from "./CirclePhoto.module.css";

export default function CirclePhoto({ icon, offer, children }) {
	const dynamicClass = `${classes.offerImg} ${classes[icon]}`;
	return (
		// Naprawić wielkość kwadratów
		<>
			<div className={classes.offer}>
				<div className={classes.containerImg}>
					<div className={classes.circleImg}>
						<div className={dynamicClass}></div>
					</div>
				</div>
				<div className={classes.containerTitle}>
					<h3 className={classes.offerTitle}>{children}</h3>
				</div>
			</div>
		</>
	);
}
