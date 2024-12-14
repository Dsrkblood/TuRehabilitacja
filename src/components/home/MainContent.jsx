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
				<p>
					Jesteśmy gabinetem fizjoterapii i masażu znajdującym się na
					warszawskich Bielanach. Zajmujemy się leczeniem i profilaktyką
					schorzeń układu ruchu - bólu kręgosłupa i stawów obwodowych,
					przeciążeń spowodowanych m.in. wielogodzinną pracą przy biurku,
					rehabilitacją ortopedyczną po urazach i operacjach, treningiem
					funkcjonalnym oraz masażem (leczniczym, relaksacyjnym, masażem twarzy
					itp.). W naszej ofercie znajduje się również fala uderzeniowa, która
					ma szerokie zastosowanie zarówno w leczeniu takich schorzeń jak
					ostroga piętowa czy łokieć tenisisty i golfisty, jak również w walce z
					cellulitem. Do każdego pacjenta podchodzimy indywidualnie, z pełną
					dbałością o jak najlepszą diagnostykę i terapię dostosowaną do Państwa
					potrzeb.
				</p>
			</section>
			<section className={classes.container}>
				<h2>W czym możemy Tobie pomóc?</h2>
				<CirclePhoto icon='classic'>masaż klasyczny</CirclePhoto>
				<CirclePhoto icon='relax'>Masaż relaksacyjny</CirclePhoto>
				<CirclePhoto icon='sport'>masaż sportowy</CirclePhoto>
				<CirclePhoto icon='izometric'>Masaż izometryczny</CirclePhoto>
				<CirclePhoto icon='fa-solid fa-suitcase-medical'>
					masaż leczniczy
				</CirclePhoto>
				<CirclePhoto icon='fa-solid fa-suitcase-medical'>
					Drenaż limfatyczny
				</CirclePhoto>
				<CirclePhoto icon='fa-solid fa-suitcase-medical'>
					Masaż bańką chińską
				</CirclePhoto>
				<CirclePhoto icon='fa-solid fa-face-laugh-beam'>
					masaż twarzy
				</CirclePhoto>
				<CirclePhoto icon='fa-solid fa-face-laugh-beam'>
					masaż dla kobiet w ciąży
				</CirclePhoto>
				<CirclePhoto icon='fa-solid fa-face-laugh-beam'>
					Fala uderzeniowa
				</CirclePhoto>
				<CirclePhoto icon='fa-solid fa-face-laugh-beam'>
					Kinezyterapia
				</CirclePhoto>
				<CirclePhoto icon='fa-solid fa-face-laugh-beam'>
					Trening funkcjonalny
				</CirclePhoto>
			</section>
			<div>
				Tutaj możemy wstawić mapę dojazdu lub opinie z google jeśli będzie się
				dało to zrobić!!! Ewentualnie można je dać nat usługami aby wyświetlały
				się wcześniej i zachęcały do skorzystania z usług
			</div>
		</>
	);
}
