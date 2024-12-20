import CirclePhoto from "./CirclePhoto";
import classes from "./MainContent.module.css";
import { DATA } from "../../data.js";

export default function MainContent() {
	const offers = Object.values(DATA.offers).map(offer => ({
		id: offer.id,
		title: offer.title,
		summary: offer.summary,
		summaryOptions: offer.summaryOptions,
		img: offer.image,
	}));

	return (
		<>
			<div
				className={classes.mainPhoto}
				style={{
					backgroundImage: `url(${DATA.aboutUs.photo})`,
				}}></div>

			<section className={classes.container}>
				<h1 className={classes.headerOne}>o nas</h1>
				<div className={classes.containerDesktop}>
					<p className={classes.paragraph}>{DATA.aboutUs.header}</p>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2440.952131898628!2d20.957305!3d52.280571!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecbcfda1815f7%3A0xee788b3ba9acee39!2sPodczaszy%C5%84skiego%2031%2C%2001-866%20Warszawa!5e0!3m2!1spl!2spl!4v1734554943446!5m2!1spl!2spl'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						className={classes.map}></iframe>
				</div>
			</section>
			<section className={classes.container}>
				<h2 className={classes.headerOther}>Nasz personel</h2>
				<div className={classes.containerPersonel}>
					<div className={classes.aboutMe}>
						<p>{DATA.aboutUs.Emilia.aboutMe}</p>
					</div>
					<div className={classes.person}>
						<div className={classes.personBackground}>
							<div
								className={classes.imgaPerson}
								style={{
									backgroundImage: `url(${DATA.aboutUs.Emilia.imgPerson})`,
								}}></div>
						</div>
						<p className={classes.personName}>{DATA.aboutUs.Emilia.name}</p>
					</div>
				</div>
			</section>
			<section className={classes.container}>
				<h3 className={classes.headerOther}>W czym możemy Tobie pomóc?</h3>
				<div className={classes.row}>
					{offers.map(offer => (
						<CirclePhoto key={offer.id} data={offer} />
					))}
				</div>
			</section>
			<section></section>
		</>
	);
}
