import { DATA } from "../../data.js";

import classes from "./ContactLink.module.css";

export default function ContactLink() {
	const phone = DATA.contact.phone.replace(/\s+/g, "");
	const openingHours = Object.values(DATA.contact.openinghours).map(item => ({
		weekDay: item.day,
		timeStart: item.timeStart,
		timeEnd: item.timeEnd,
	}));
	return (
		<section className={classes.section}>
			<div className={classes.container}>
				<h1 className={classes.header}>Godziny otwarcia</h1>
				<ul className={classes.listTab}>
					{openingHours.map((item, index) => (
						<li key={index} className={classes.listItem}>
							<p>{item.weekDay}</p>
							<p>
								{item.timeStart ? (
									<>
										{item.timeStart}
										<sup>00</sup>
									</>
								) : (
									"nieczynne"
								)}
								{item.timeEnd ? (
									<>
										&nbsp;-&nbsp;{item.timeEnd}
										<sup>00</sup>
									</>
								) : (
									""
								)}
							</p>
						</li>
					))}
				</ul>
			</div>
			<div className={classes.container}>
				<h2 className={classes.header}>nasz adres</h2>
				<p className={classes.addresItem}>
					{DATA.contact.postcode} {DATA.contact.city}
				</p>
				<p className={classes.addresItem}>{DATA.contact.street}</p>
			</div>
			<div className={classes.container}>
				<h3 className={classes.header}>kontakt z nami</h3>
				<a className={classes.linkItem} href={`mailto:${DATA.contact.email}`}>
					{DATA.contact.email}
				</a>

				<a className={classes.linkItem} href={`tel:${phone}`}>
					{DATA.contact.phone}
				</a>
				<a
					className={classes.linkItem}
					href={DATA.contact.facebook}
					target='_blank'
					rel='noopener noreferrer'>
					Facebook
				</a>
				<a
					className={classes.linkItem}
					href={DATA.contact.booksy}
					target='_blank'
					rel='noopener noreferrer'>
					Zapisz się na <i className='fa-solid fa-share'></i>{" "}
					<span>Boosky</span>
				</a>
			</div>
			<div className={classes.container}>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2440.952131898628!2d20.957305!3d52.280571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecbcfda1815f7%3A0xee788b3ba9acee39!2sPodczaszy%C5%84skiego%2031%2C%2001-866%20Warszawa!5e0!3m2!1spl!2spl!4v1734554943446!5m2!1spl!2spl'
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className={classes.mapGoogle}></iframe>
			</div>
		</section>
	);
}
