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
				<h1>o nas</h1>
				<div className={classes.containerDesktop}>
					<p className={classes.paragraph}>{DATA.aboutUs.header}</p>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d610.2385654721944!2d20.956827265477006!3d52.28053233109384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecbcfda1815f7%3A0xa55a49d3977ec471!2sPodczaszy%C5%84skiego%2031%2Fu1%2C%2001-866%20Warszawa!5e0!3m2!1spl!2spl!4v1734173180643!5m2!1spl!2spl'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						className={classes.map}></iframe>
				</div>
			</section>
			<section className={classes.container}>
				<h2>W czym możemy Tobie pomóc?</h2>
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
