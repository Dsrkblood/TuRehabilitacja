import mainPhoto from "/mainPhoto.jpg";
import masaz_klasyczny from "/massage/masaz_klasyczny.jpg";
import masaz_relaksacyjny from "/massage/masaz_relaksacyjny.jpg";
import masaz_sportowy from "/massage/masaz_sportowy.jpg";
import masaz_leczniczy from "/massage/masaz_leczniczy.jpg";
import terapia_manualna from "/massage/terapia_manualna.jpg";
import drenaz_limfatyczny from "/massage/drenaz_limfatyczny.jpg";
import masaz_banka_chinska from "/massage/masaz_banka_chinska.jpg";
import masaz_twarzy from "/massage/masaz_twarzy.jpg";
import masaz_dla_kobiet_w_ciazy from "/massage/masaz_dla_kobiet_w_ciazy.jpg";

//Potrzebne zdjęcia do uzupełnienia
import fala_uderzeniowa_aplikacja_lecznicza from "/massage/masaz_klasyczny.jpg";
import fala_uderzeniowa_aplikacja_antycellulitowa from "/massage/masaz_klasyczny.jpg";
import kinezyterapia from "/massage/masaz_klasyczny.jpg";
import trening_funkcjonalny from "/massage/masaz_klasyczny.jpg";

export const DATA = {
	contact: {
		city: "Warszawa",
		postcode: "01-886",
		street: "Podczaszyńskiego 31/U1",
		openinghours: {
			monday: {
				day: "poniedziałek",
				timeStart: "8",
				timeEnd: "19",
			},
			tuesday: {
				day: "wtorek",
				timeStart: "8",
				timeEnd: "19",
			},
			wednesday: {
				day: "środa",
				timeStart: "8",
				timeEnd: "19",
			},
			thursday: {
				day: "czwartek",
				timeStart: "8",
				timeEnd: "19",
			},
			friday: {
				day: "piątek",
				timeStart: "8",
				timeEnd: "19",
			},
			saturday: {
				day: "sobota",
				timeStart: null,
				timeEnd: null,
			},
			sunday: {
				day: "niedziela",
				timeStart: null,
				timeEnd: null,
			},
		},
		phone: "501 389 646",
		email: "turehabilitacja@gmail.com",
		facebook:
			"https://www.facebook.com/profile.php?id=61568131195051&locale=pl_PL",
		booksy: "https://booksy.com/pl-pl/",
	},
	aboutUs: {
		photo: mainPhoto,
		company: "TuRehabilitacja",
		header:
			"Jesteśmy gabinetem fizjoterapii i masażu znajdującym się na warszawskich Bielanach. Zajmujemy się leczeniem i profilaktyką schorzeń układu ruchu - bólu kręgosłupa i stawów obwodowych, przeciążeń spowodowanych m.in. wielogodzinną pracą przy biurku, rehabilitacją ortopedyczną po urazach i operacjach, treningiem funkcjonalnym oraz masażem (leczniczym, relaksacyjnym, masażem twarzy itp.). W naszej ofercie znajduje się również fala uderzeniowa, która ma szerokie zastosowanie zarówno w leczeniu takich schorzeń jak ostroga piętowa czy łokieć tenisisty i golfisty, jak również w walce z cellulitem. Do każdego pacjenta podchodzimy indywidualnie, z pełną dbałością o jak najlepszą diagnostykę i terapię dostosowaną do Państwa potrzeb.",
	},
	offers: {
		offer1: {
			id: 1,
			title: "Masaż klasyczny",
			summary:
				"jest to najstarsza metoda masażu. Ma działanie lecznicze i relaksacyjne, poprawia krążenie krwi, zmniejsza dolegliwości bólowe.",
			summaryOptions: false,
			description: "",
			priceShort: 100,
			priceLong: 180,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: 80,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 150,
			saleOn: false,
			image: masaz_klasyczny,
		},
		offer2: {
			id: 2,
			title: "Masaż relaksacyjny",
			summary:
				"ma na celu wyciszenie i odpoczynek dla ciała i duszy. Wprowadza ciało w stan idealnej harmonii.",
			summaryOptions: false,
			description: "",
			priceShort: 100,
			priceLong: 180,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 150,
			saleOn: false,
			image: masaz_relaksacyjny,
		},
		offer3: {
			id: 3,
			title: "Masaż sportowy",
			summary: " proponujemy dwa rodzaje masażu sportowego :",
			summaryOptions: {
				option1:
					"Regeneracja po treningu - ma na celu zredukowanie nadmiernych napięć mięśniowych i przygotowanie ich do następnego treningu",
				option2:
					" Masaż izometryczny - ma na celu wzmocnienie siły mięśniowej, dzięki odpowiedniej sekwencji ruchów masażysty i współpracy pacjenta. Jest polecany pacjentom po kontuzjach, którzy chcą szybko wrócić do formy oraz dla osób, które przygotowują się do zawodów, dla wzmocnienia efektów treningu.",
			},
			description: "",
			priceShort: 100,
			priceLong: 180,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			saleOn: false,
			image: masaz_sportowy,
		},
		offer4: {
			id: 4,
			title: "Masaż leczniczy",
			summary:
				"redukuje napięcie i ból mięśni, przyśpiesza regenerację tkanek, zmniejsza odczucie sztywności.",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 180,
			timeShort: null,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			saleOn: false,
			image: masaz_leczniczy,
		},
		offer5: {
			id: 5,
			title: "Terapia manualna",
			summary:
				"jest to metoda diagnostyki i leczenia zaburzeń układu ruchu. Przynosi zdecydowaną ulgę w bólu kręgosłupa i stawów obwodowych.",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 180,
			timeShort: 45,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 100,
			saleOn: false,
			image: terapia_manualna,
		},
		offer6: {
			id: 6,
			title: "Drenaż limfatyczny",
			summary:
				"polega na pozbyciu się zastojów limfatycznych. Jest polecany pacjentom u których występują obrzęki kończyn, zarówno po urazach jak i w przebiegu chorób przewlekłych oraz dla osób wykonujących pracę stojąca.",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 180,
			timeShort: null,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			saleOn: false,
			image: drenaz_limfatyczny,
		},
		offer7: {
			id: 7,
			title: "Masaż bańką chińska",
			summary:
				"jest to masaż o działaniu antycellulitowym i odchudzającym. Skóra po zabiegu staje się jędrna i elastyczna.",
			summaryOptions: false,
			description: "",
			priceShort: 100,
			priceLong: 180,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			saleOn: false,
			image: masaz_banka_chinska,
		},
		offer8: {
			id: 8,
			title: "Masaż twarzy",
			summary: "proponujemy dwa rodzaje masażu twarzy: ",
			summaryOptions: {
				option1:
					"Relaksacyjny - masaż ten pozwoli Ci się wyciszyć i zrelaksować.",
				option2:
					"Powięziowy o dzialaniu przeciwzmarszczkowym - poprawia krążenie krwi, zmniejsza napięcie mięśni, poprawia wygląd skóry twarzy i zwiększa jej elastyczność.",
			},
			description: "",
			priceShort: null,
			priceLong: 120,
			timeShort: null,
			timeLong: 30,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			saleOn: false,
			image: masaz_twarzy,
		},
		offer9: {
			id: 9,
			title: "Masaż dla kobiet w ciąży",
			summary:
				"w tym wyjątkowym dla Kobiety stanie Jej ciało szczególnie wymaga troski i zaopiekowania. Masaż może przynieść duża ulgę w bólu nie tylko kręgosłupa, ale też zmęczonych ramion i nóg. ",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 180,
			timeShort: null,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			saleOn: false,
			image: masaz_dla_kobiet_w_ciazy,
		},
		offer10: {
			id: 10,
			title: "Fala uderzeniowa aplikacja lecznicza",
			summary:
				"jest to wysokiej klasy sprzęt, który pomaga rozbić zwapnienia takie jak ostroga piętowa, łokieć golfisty/tenisisty, a także wspomóc leczenie przewlekłego i otrego bólu tkanek miękkich.",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 80,
			timeShort: null,
			timeLong: null,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			saleOn: false,
			image: fala_uderzeniowa_aplikacja_lecznicza,
		},
		offer11: {
			id: 11,
			title: "Fala uderzeniowa aplikacja antycellulitowa ",
			summary:
				"ma za zadanie rozbicie komórek tłuszczowych, ktore dzięki zwiększenonemu krążeniu są szybszciej usuwane z organizmu. Efekty widoczne są już po kilku zabiegach. ",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 80,
			timeShort: null,
			timeLong: null,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			saleOn: false,
			image: fala_uderzeniowa_aplikacja_antycellulitowa,
		},
		offer12: {
			id: 12,
			title: "Kinezyterapia",
			summary: "są to ćwiczenia rehabilitacyjne. Wyróżniamy tu ćwiczenia: ",
			summaryOptions: {
				option1:
					"przygotowujące do zabiegu operacyjnego np. Endopotezoplastyki stawów",
				option2: "rehabilitacyjne po zabiegach operacyjnych oraz urazach ",
				option2: "z zakresu profilaktyki bólu kręgosłupa ",
			},
			description: "",
			priceShort: 100,
			priceLong: 180,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			saleOn: false,
			image: kinezyterapia,
		},
		offer13: {
			id: 13,
			title: "Trening funkcjonalny",
			summary:
				"ma na celu wzmocnienie mięśni głębokich, będących naszym fundamentem. Następnie skupiamy się na ich elastyczności, sile,  poprawie czucia głębokiego i lepszej koordynacji. Ćwiczenia tego typu mogą być dostosowane zarówno do pacjentów, którzy na codzień wykonują pracę biurową jak i dla osób uprawiających sport (amatorsko i zawodowo). Pomagają zabezpieczyć organizm przed nawracającym bólem i kontuzjami.",
			summaryOptions: false,
			description: "",
			priceShort: 100,
			priceLong: 180,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			saleOn: false,
			image: trening_funkcjonalny,
		},
	},
};
