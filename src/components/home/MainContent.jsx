import CirclePhoto from "./CirclePhoto";
import classes from "./MainContent.module.css";
import { DATA } from "../../data.js";
import Carousel from "./Carousel.jsx";

export default function MainContent() {
	const offers = Object.values(DATA.offers).map(offer => ({
		id: offer.id,
		title: offer.title,
		summary: offer.summary,
		summaryOptions: offer.summaryOptions,
		image: offer.image,
		imageAlt: offer.imageAlt,
	}));

	return (
		<>
			{/* <img
				src={DATA.aboutUs.heroImg}
				alt={DATA.aboutUs.heroImgAlt}
				className={classes.heroImg}
				loading='lazy'></img> */}
			<Carousel />
			<section className={classes.containerWrapper}>
				<h1 className={classes.heading}>o nas</h1>
				<div className={classes.containerWrapperDesktop}>
					<div className={classes.flexContainer}>
						<p className={classes.sectionParagraph}>
							{DATA.aboutUs.header.text1}
						</p>
						<p className={classes.sectionParagraph}>
							{DATA.aboutUs.header.text2}
						</p>
						<ul className={classes.sectionList}>
							{DATA.aboutUs.header.list1.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
						<p className={classes.sectionParagraph}>
							{DATA.aboutUs.header.text3}
							<span className={classes.highlight}>
								{DATA.aboutUs.header.span1}
							</span>
							{DATA.aboutUs.header.text4}
						</p>
						<ul className={classes.sectionList}>
							{DATA.aboutUs.header.list2.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
						<p className={classes.sectionParagraph}>
							<span className={classes.highlight}>
								{DATA.aboutUs.header.span2}
							</span>
							{DATA.aboutUs.header.text5}
						</p>
					</div>
					<div className={classes.flexContainerMap}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.952267404277!2d20.955327156148073!3d52.28056853996331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb00457e2ecd%3A0xb15262a59cffec36!2sTuRehabilitacja!5e0!3m2!1spl!2spl!4v1735468663199!5m2!1spl!2spl'
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							className={classes.map}
							sandbox='allow-scripts allow-same-origin'></iframe>
					</div>
				</div>
			</section>
			<section className={classes.containerWrapper}>
				<h2 className={classes.heading}>Mój gabinet</h2>
				<div className={classes.employeeContainer}>
					<div className={classes.employeeInfo}>
						<p className={classes.sectionParagraph}>
							{DATA.aboutUs.Emilia.aboutMe.text1}
						</p>
						<p className={classes.sectionParagraph}>
							{DATA.aboutUs.Emilia.aboutMe.text2}
						</p>
						<ul className={classes.sectionList}>
							{DATA.aboutUs.Emilia.aboutMe.list.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
						<p className={classes.sectionParagraph}>
							{DATA.aboutUs.Emilia.aboutMe.text3}
						</p>
					</div>
					<div className={classes.employeePhoto}>
						<div className={classes.photoBackground}>
							<img
								src={DATA.aboutUs.Emilia.imgPerson}
								alt={DATA.aboutUs.Emilia.imgPersonAlt}
								className={classes.photoEmployee}
								loading='lazy'></img>
						</div>
						<p className={classes.employeeName}>{DATA.aboutUs.Emilia.name}</p>
					</div>
				</div>
			</section>
			<section className={classes.containerWrapper}>
				<h3 className={classes.heading}>W czym możemy Tobie pomóc?</h3>
				<div className={classes.flexContainerOffer}>
					{offers.map(offer => (
						<CirclePhoto key={offer.id} data={offer} />
					))}
				</div>
			</section>
		</>
	);
}
