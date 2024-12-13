import classes from "./MainContent.module.css";

export default function MainContent() {
	return (
		<>
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
				<div className={classes.offer}>
					<div className={classes.circle}>
						<i class='fa-solid fa-spa'></i>
					</div>
					<p>masaż klasyczny</p>
				</div>
				<div className={classes.offer}>
					<div className={classes.circle}>
						<i class='fa-solid fa-person-running'></i>
					</div>
					<p>masaż sportowy</p>
				</div>
				<div className={classes.offer}>
					<div className={classes.circle}>
						<i class='fa-solid fa-suitcase-medical'></i>
					</div>
					<p>masaż leczniczy</p>
				</div>
				<div className={classes.offer}>
					<div className={classes.circle}>
						<i class='fa-solid fa-face-laugh-beam'></i>
					</div>
					<p>masaż twarzy</p>
				</div>
			</section>
		</>
	);
}
