import classes from "./Footer.module.css";

export default function Footer() {
	return (
		<div className={classes.footer}>
			<div className={`${classes.container}`}>
				<p>
					Jesteśmy gabinetem fizjoterapii i masażu znajdującym się na
					warszawskich Bielanach.
				</p>
			</div>
			<div className={`${classes.container}`}>
				<p>01-866 Warszawa</p>
				<p>Podczaszyńskiego 31/U1</p>
			</div>
			<div className={`${classes.container}`}>
				<a href='mailto:turehabilitacja@gmail.com'>turehabilitacja@gmail.com</a>
				<a href='tel:501389646'>501 389 646</a>
			</div>
		</div>
	);
}
