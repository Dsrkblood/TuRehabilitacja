import { DATA } from "../../data.js";
import classes from "./Footer.module.css";

export default function Footer() {
	const phone = DATA.contact.phone.replace(/\s+/g, "");
	const year = new Date().getFullYear();
	return (
		<>
			<div className={classes.footer}>
				<div className={classes.container}>
					<div className={classes.box}>
						<a
							className={classes.box}
							href='https://maps.app.goo.gl/mLwYxHpzQqbk8jem8'
							target='_blank'
							rel='noopener noreferrer'>
							<p>{`${DATA.contact.postcode} ${DATA.contact.city}`}</p>
							<p>{DATA.contact.street}</p>
						</a>
					</div>
					<div className={classes.box}>
						<a
							target='_blank'
							className={classes.facebook}
							href={DATA.contact.facebook}>
							<i className='fa-brands fa-square-facebook'></i>Facebook
						</a>
						<a
							target='_blank'
							className={classes.instagram}
							href={DATA.contact.instagram}>
							<i className='fa-brands fa-instagram'></i>Instagram
						</a>
					</div>
					<div className={classes.box}>
						<a href={`mailto:${DATA.contact.email}`}>{DATA.contact.email}</a>
						<a href={`tel:${phone}`}>{DATA.contact.phone}</a>
					</div>
				</div>
				<div className={classes.brand}>
					<p>
						{DATA.aboutUs.company} &copy; {year}
					</p>

					<p className={classes.gitPromo}>
						created by
						<a
							href='https://github.com/Dsrkblood'
							target='_blank'
							rel='noopener noreferrer'>
							&nbsp;Dsrkblood
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
