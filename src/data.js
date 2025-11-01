import heroImgLowRes1 from "/karuzela/heroImgLowRes1.webp";
import heroImgLowRes2 from "/karuzela/heroImgLowRes2.webp";
import heroImgLowRes3 from "/karuzela/heroImgLowRes3.webp";
import heroImgLowRes4 from "/karuzela/heroImgLowRes4.webp";
import heroImgHighRes1 from "/karuzela/heroImgHighRes1.webp";
import heroImgHighRes2 from "/karuzela/heroImgHighRes2.webp";
import heroImgHighRes3 from "/karuzela/heroImgHighRes3.webp";
import heroImgHighRes4 from "/karuzela/heroImgHighRes4.webp";
import masaz_klasyczny from "/massage/masaz_klasyczny.jpg";
import masaz_relaksacyjny from "/massage/masaz_relaksacyjny.webp";
import masaz_sportowy from "/massage/masaz_sportowy.jpg";
import masaz_leczniczy from "/massage/masaz_leczniczy.webp";
import terapia_manualna from "/massage/terapia_manualna.jpg";
import drenaz_limfatyczny from "/massage/drenaz_limfatyczny.jpg";
import masaz_banka_chinska from "/massage/masaz_banka_chinska.webp";
import masaz_twarzy from "/massage/masaz_twarzy.webp";
import masaz_dla_kobiet_w_ciazy from "/massage/masaz_dla_kobiet_w_ciazy.webp";
import fala_uderzeniowa_aplikacja_lecznicza from "/massage/fala_uderzeniowa_aplikacja_lecznicza.webp";
import fala_uderzeniowa_aplikacja_antycellulitowa from "/massage/fala_uderzeniowa_aplikacja_antycellulitowa.webp";
import kinezyterapia from "/massage/kinezyterapia.webp";
import trening_funkcjonalny from "/massage/trening_funkcjonalny.webp";

import logo from "/Icon/logo.png";

import Emilia from "/personel/Emilia.webp";

export const DATA = {
	contact: {
		city: "Warszawa",
		postcode: "01-886",
		street: "Podczaszyńskiego 31",
		openinghours: {
			monday: {
				day: "poniedziałek",
				timeStart: "9",
				timeEnd: "19",
			},
			tuesday: {
				day: "wtorek",
				timeStart: "9",
				timeEnd: "19",
			},
			wednesday: {
				day: "środa",
				timeStart: "9",
				timeEnd: "19",
			},
			thursday: {
				day: "czwartek",
				timeStart: "9",
				timeEnd: "19",
			},
			friday: {
				day: "piątek",
				timeStart: "9",
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
		instagram: "https://www.instagram.com/turehabilitacja",
		booksy:
			"https://booksy.com/pl-pl/dl/show-business/278665?utm_medium=c2c_referral",
		saleData: "2025-01-31",
	},
	aboutUs: {
		logo: logo,
		heroImg: [
			{
				id: 1,
				heroImgLowRes: heroImgLowRes1,
				heroImgHighRes: heroImgHighRes1,
				alt: "Masaż twarzy",
			},
			{
				id: 2,
				heroImgLowRes: heroImgLowRes2,
				heroImgHighRes: heroImgHighRes2,
				alt: "Masaż relaksacyjny",
			},
			{
				id: 3,
				heroImgLowRes: heroImgLowRes3,
				heroImgHighRes: heroImgHighRes3,
				alt: "Fala uderzeniowa aplikacja antycellulitowa",
			},
			{
				id: 4,
				heroImgLowRes: heroImgLowRes4,
				heroImgHighRes: heroImgHighRes4,
				alt: "Kinezyterapia",
			},
		],

		company: "TuRehabilitacja",
		header: {
			text1:
				"Jesteśmy gabinetem fizjoterapii i masażu znajdującym się na warszawskich Bielanach. Do każdego pacjenta podchodzimy indywidualnie, z pełną dbałością o jak najlepszą diagnostykę i terapię dostosowaną do Państwa potrzeb.",
			text2: "Zajmujemy się leczeniem i profilaktyką:",
			list1: [
				"schorzeń układu ruchu - bólu kręgosłupa i stawów obwodowych,",
				"przeciążeń spowodowanych m.in. wielogodzinną pracą przy biurku,",
				"rehabilitacją po urazach i operacjach,",
				"treningiem funkcjonalnym,",
				"masażem leczniczym,",
				"masażem relaksacyjnym,",
				"masażem twarzy,",
				"masażem odchudzającym.",
			],
			text3: "W naszej ofercie znajduje się również ",
			span1: "fala uderzeniowa",
			text4: ", która ma szerokie zastosowanie leczeniu takich schorzeń jak:",
			list2: [
				"ostroga piętowa,",
				"łokieć tenisisty i golfisty,",
				"przeciążenia i zwapnienia,",
				"skręcenia i zwichnięcia stawów,",
				"kolano biegacza,",
				"zamrożony bark,",
				" i wiele więcej.",
			],
			text5: " jest też doskonałym narzędziem w walce z cellulitem.",
			span2: "Fala uderzeniowa",
		},
		Emilia: {
			name: "Mgr Emilia Strzałkowska",
			aboutMe: {
				text1:
					"Jestem magistrem fizjoterapii, absolwentką Akademii Wychowania Fizycznego w Warszawie. Aktualnie studiuję psychoterapię w Instytucie Integralnej Psychoterapii Gestalt.",
				text2: "Zajmuję się rehabilitacją:",
				list: [
					"po operacjach,",
					"po urazach,",
					"zespołów bólowych kręgosłupa i stawów obwodowych,",
					"dolegliwościami spowodowanymi siedzącym trybem życia,",
					"przeciążeniami układu ruchu.",
				],
				text3:
					"W pracy z pacjentami wykorzystuję terapię manualną, masaż leczniczy i masaż tkanek głębokich. Zajmuję się również planowaniem i prowadzeniem treningu funkcjonalnego z wykorzystaniem technik stabilizacji tułowia, oceny posturalnej oraz treningu core.",
			},
			imgPerson: Emilia,
			imgPersonAlt: "Zdjęcie Emilii Strzałkowskiej",
		},
	},
	offers: {
		offer1: {
			id: 1,
			title: "Masaż klasyczny",
			summary:
				"Jest to najstarsza metoda masażu. Ma działanie lecznicze i relaksacyjne, poprawia krążenie krwi, zmniejsza dolegliwości bólowe.",
			summaryOptions: false,
			description: "",
			priceShort: 130,
			priceLong: 200,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: masaz_klasyczny,
			imageAlt: "Grafika przedstawiaąca masaz pleców",
		},
		offer2: {
			id: 2,
			title: "Masaż relaksacyjny",
			summary:
				"Ma na celu wyciszenie i odpoczynek dla ciała i duszy. Wprowadza ciało w stan idealnej harmonii.",
			summaryOptions: false,
			description: "",
			priceShort: 130,
			priceLong: 200,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: masaz_relaksacyjny,
			imageAlt:
				"Grafika przedstawiqająca zwiniete ręczniki i czapalone świeczki",
		},
		offer3: {
			id: 3,
			title: "Masaż sportowy",
			summary: " Proponujemy dwa rodzaje masażu sportowego :",
			summaryOptions: {
				option1:
					"Regeneracja po treningu - ma na celu zredukowanie nadmiernych napięć mięśniowych i przygotowanie ich do następnego treningu",
				option2:
					"Masaż izometryczny - ma na celu wzmocnienie siły mięśniowej, dzięki odpowiedniej sekwencji ruchów masażysty i współpracy pacjenta. Jest polecany pacjentom po kontuzjach, którzy chcą szybko wrócić do formy oraz dla osób, które przygotowują się do zawodów, dla wzmocnienia efektów treningu.",
			},
			description: "",
			priceShort: 130,
			priceLong: 200,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: masaz_sportowy,
			imageAlt: "Grafika przedstawiająca masaż stopy",
		},
		offer4: {
			id: 4,
			title: "Masaż całego ciała",
			summary: "",
			summaryOptions: {
				option1:
					"",
				option2:
					"",
			},
			description: "",
			priceShort: null,
			priceLong: 280,
			timeShort: null,
			timeLong: 90,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: masaz_sportowy,
			imageAlt: "Grafika przedstawiająca masaż stopy",
		},
		offer5: {
			id: 5,
			title: "Masaż leczniczy",
			summary:
				"Redukuje napięcie i ból mięśni, przyśpiesza regenerację tkanek, zmniejsza odczucie sztywności.",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 200,
			timeShort: null,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: masaz_leczniczy,
			imageAlt: "Grafika przedstawiająca masaż leczniczy pleców",
		},
		offer6: {
			id: 6,
			title: "Terapia manualna",
			summary:
				"Jest to metoda diagnostyki i leczenia zaburzeń układu ruchu. Przynosi zdecydowaną ulgę w bólu kręgosłupa i stawów obwodowych.",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 200,
			timeShort: null,
			timeLong: 45,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: terapia_manualna,
			imageAlt: "Grafika przedstawiająca terapię manualną",
		},
		offer7: {
			id: 7,
			title: "Drenaż limfatyczny",
			summary:
				"Polega na pozbyciu się zastojów limfatycznych. Jest polecany pacjentom u których występują obrzęki kończyn, zarówno po urazach jak i w przebiegu chorób przewlekłych oraz dla osób wykonujących pracę stojąca.",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 200,
			timeShort: null,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: drenaz_limfatyczny,
			imageAlt: "Grafika przedstawiająca masaż limfatyczny nóg",
		},
		offer8: {
			id: 8,
			title: "Masaż bańką chińska",
			summary:
				"Jest to masaż o działaniu antycellulitowym i odchudzającym. Skóra po zabiegu staje się jędrna i elastyczna.",
			summaryOptions: false,
			description: "",
			priceShort: 130,
			priceLong: 200,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: masaz_banka_chinska,
			imageAlt: "Grafikia przedstawiająca masaz bańką chińską",
		},
		offer9: {
			id: 9,
			title: "Masaż twarzy",
			summary: "Proponujemy dwa rodzaje masażu twarzy: ",
			summaryOptions: {
				option1:
					"Relaksacyjny - masaż ten pozwoli Ci się wyciszyć i zrelaksować.",
				option2:
					"Powięziowy o dzialaniu przeciwzmarszczkowym - poprawia krążenie krwi, zmniejsza napięcie mięśni, poprawia wygląd skóry twarzy i zwiększa jej elastyczność.",
			},
			description: "",
			priceShort: null,
			priceLong: 130,
			timeShort: null,
			timeLong: 30,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 100,
			image: masaz_twarzy,
			imageAlt: "Grafika przedstawiająca masaż twarzy kobiety",
		},
		offer10: {
			id: 10,
			title: "Masaż twarzy i dekoltu",
			summary: "",
			summaryOptions: {
				option1:
					"",
				option2:
					"",
			},
			description: "",
			priceShort: null,
			priceLong: 180,
			timeShort: null,
			timeLong: 45,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 100,
			image: masaz_twarzy,
			imageAlt: "Grafika przedstawiająca masaż twarzy kobiety",
		},
		offer11: {
			id: 11,
			title: "Masaż dla kobiet w ciąży",
			summary:
				"W tym wyjątkowym dla Kobiety stanie Jej ciało szczególnie wymaga troski i zaopiekowania. Masaż może przynieść duża ulgę w bólu nie tylko kręgosłupa, ale też zmęczonych ramion i nóg. ",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 200,
			timeShort: null,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: masaz_dla_kobiet_w_ciazy,
			imageAlt: "Grafika przedstawiająca masaż kobiety w ciązy",
		},
		offer12: {
			id: 12,
			title: "Fala uderzeniowa - aplikacja lecznicza",
			summary:
				"Jest to wysokiej klasy sprzęt, który pomaga rozbić zwapnienia takie jak ostroga piętowa, łokieć golfisty/tenisisty, a także wspomóc leczenie przewlekłego i otrego bólu tkanek miękkich.",
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
			image: fala_uderzeniowa_aplikacja_lecznicza,
			imageAlt: "Grafika przedstawiająca masaż falą uderzeniową stóp",
		},
		offer13: {
			id: 13,
			title:
				"Fala uderzeniowa - aplikacja antycellulitowa | wybrana partia ciała ",
			summary:
				"Ma za zadanie rozbicie komórek tłuszczowych, ktore dzięki zwiększenonemu krążeniu są szybszciej usuwane z organizmu. Efekty widoczne są już po kilku zabiegach. ",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 100,
			timeShort: null,
			timeLong: null,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			image: fala_uderzeniowa_aplikacja_antycellulitowa,
			imageAlt: "Grafika przedstawiająca masaż falą uderzeniową ud",
		},
		offer14: {
			id: 14,
			title:
				"Fala uderzeniowa - aplikacja antycellulitowa | pakiet - uda, pośladki, brzuch ",
			summary:
				"Ma za zadanie rozbicie komórek tłuszczowych, ktore dzięki zwiększenonemu krążeniu są szybszciej usuwane z organizmu. Efekty widoczne są już po kilku zabiegach. ",
			summaryOptions: false,
			description: "",
			priceShort: null,
			priceLong: 250,
			timeShort: null,
			timeLong: null,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: null,
			image: fala_uderzeniowa_aplikacja_antycellulitowa,
			imageAlt: "Grafika przedstawiająca masaż falą uderzeniową ud",
		},
		offer15: {
			id: 15,
			title: "Kinezyterapia (ćwiczenia)",
			summary: "Są to ćwiczenia rehabilitacyjne. Wyróżniamy tu ćwiczenia: ",
			summaryOptions: {
				option1:
					"Przygotowujące do zabiegu operacyjnego np. Endopotezoplastyki stawów",
				option2: "Rehabilitacyjne po zabiegach operacyjnych oraz urazach ",
				// option2: "Z zakresu profilaktyki bólu kręgosłupa ",
			},
			description: "",
			priceShort: 130,
			priceLong: 200,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: kinezyterapia,
			imageAlt: "Grafika przedstawiająca rozciąganie",
		},
		offer16: {
			id: 16,
			title: "Trening funkcjonalny",
			summary:
				"Ma na celu wzmocnienie mięśni głębokich, będących naszym fundamentem. Następnie skupiamy się na ich elastyczności, sile,  poprawie czucia głębokiego i lepszej koordynacji. Ćwiczenia tego typu mogą być dostosowane zarówno do pacjentów, którzy na codzień wykonują pracę biurową jak i dla osób uprawiających sport (amatorsko i zawodowo). Pomagają zabezpieczyć organizm przed nawracającym bólem i kontuzjami.",
			summaryOptions: false,
			description: "",
			priceShort: 130,
			priceLong: 200,
			timeShort: 30,
			timeLong: 60,
			//promocja na krótki zabieg - wystarczy wpisać cene
			saleShort: null,
			//promocja na długi zabieg - wystarczy wpisać cene
			saleLong: 160,
			image: trening_funkcjonalny,
			imageAlt: "Grafika przedstawiająca rozciągającego się mężczyznę",
		},
	},
};
