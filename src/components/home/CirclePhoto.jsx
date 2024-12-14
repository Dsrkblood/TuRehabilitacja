import classes from "./CirclePhoto.module.css";

export default function CirclePhoto({ icon, children }) {
	const dynamicClass = `${classes.offerImg} ${classes[icon]}`;
	return (
		<div className={classes.offer}>
			<div className={classes.container}>
				<div className={classes.circle}>
					<div className={dynamicClass}></div>
				</div>
			</div>
			<p className={classes.offerTitle}>{children}</p>
		</div>
	);
}
