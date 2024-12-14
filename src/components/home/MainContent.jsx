import CirclePhoto from "./CirclePhoto";
import classes from "./MainContent.module.css";

// import classic from "/massage/classic-640.jpg";
// import relax from "/massage/relax-640.jpg";

export default function MainContent() {
	return (
		<>
			<div>Tutaj możemy dać grafikę lokalu jeśli będzie już dostępna</div>
			<section className={classes.container}>
				<h1>o nas</h1>
				<div className={classes.containerDesktop}>
					<p className={classes.paragraph}>
						Jesteśmy gabinetem fizjoterapii i masażu znajdującym się na
						warszawskich Bielanach. Zajmujemy się leczeniem i profilaktyką
						schorzeń układu ruchu - bólu kręgosłupa i stawów obwodowych,
						przeciążeń spowodowanych m.in. wielogodzinną pracą przy biurku,
						rehabilitacją ortopedyczną po urazach i operacjach, treningiem
						funkcjonalnym oraz masażem (leczniczym, relaksacyjnym, masażem
						twarzy itp.). W naszej ofercie znajduje się również fala
						uderzeniowa, która ma szerokie zastosowanie zarówno w leczeniu
						takich schorzeń jak ostroga piętowa czy łokieć tenisisty i golfisty,
						jak również w walce z cellulitem. Do każdego pacjenta podchodzimy
						indywidualnie, z pełną dbałością o jak najlepszą diagnostykę i
						terapię dostosowaną do Państwa potrzeb.
					</p>
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
					<CirclePhoto icon='classic'>masaż klasyczny</CirclePhoto>
					<CirclePhoto icon='relax'>Masaż relaksacyjny</CirclePhoto>
					<CirclePhoto icon='sport'>masaż sportowy</CirclePhoto>
					<CirclePhoto icon='izometric'>Masaż izometryczny</CirclePhoto>
					<CirclePhoto icon=''>masaż leczniczy</CirclePhoto>
					<CirclePhoto icon=''>Drenaż limfatyczny</CirclePhoto>
					<CirclePhoto icon=''>Masaż bańką chińską</CirclePhoto>
					<CirclePhoto icon=''>masaż twarzy</CirclePhoto>
					<CirclePhoto icon=''>masaż dla kobiet w ciąży</CirclePhoto>
					<CirclePhoto icon=''>Fala uderzeniowa</CirclePhoto>
					<CirclePhoto icon=''>Kinezyterapia</CirclePhoto>
					<CirclePhoto icon=''>Trening funkcjonalny</CirclePhoto>
				</div>
			</section>
			<section></section>
		</>
	);
}
