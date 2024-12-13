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
				<p>00-000 Warszawa</p>
				<p>ul. warszawska 11/U5</p>
			</div>
			<div className={`${classes.container}`}>
				<a href='mailto:turehabilitacja@gmail.com'>
					<i className='fa-solid fa-envelope'></i> turehabilitacja@gmail.com
				</a>
				<a href='tel:000000000'>
					<i className='fa-solid fa-square-phone'></i> 123 456 789
				</a>
			</div>
		</div>
	);
}
