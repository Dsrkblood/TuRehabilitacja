import { nanoid } from "nanoid";
import { offerImgs, heroImgs, logoImg as logo, staffImgs } from "./images.js";

export const defaultOffer = {
  isActive: true,
  description: "",
  hasDescriptionList: false,
  contraindications: false,
  recommendations: false,
  variants: {
    basic: { price: 130, time: 30 },
    extended: { price: 200, time: 60 },
    sales: {
      basic: null,
      extended: null,
    },
  },
  image: {
    src: null,
    alt: "",
  },
};

export const DATA = {
  sales: {
    title: "Promocja z okazji otwarcia!",
    isActive: false,
    endDate: "2023-11-01",
    newOffer: "2025-11-01",
  },
  contact: {
    address: {
      city: "Warszawa",
      postcode: "01-886",
      street: "Podczaszyńskiego 31",
    },
    workingHours: [
      { day: "poniedziałek", start: "09:00", end: "19:00" },
      { day: "wtorek", start: "09:00", end: "19:00" },
      { day: "środa", start: "09:00", end: "19:00" },
      { day: "czwartek", start: "09:00", end: "19:00" },
      { day: "piątek", start: "09:00", end: "19:00" },
      { day: "sobota", start: null, end: null },
      { day: "niedziela", start: null, end: null },
    ],
    phone: "501 389 646",
    email: "turehabilitacja@gmail.com",
    links: {
      facebook:
        "https://www.facebook.com/profile.php?id=61568131195051&locale=pl_PL",
      instagram: "https://www.instagram.com/turehabilitacja",
      booksy:
        "https://booksy.com/pl-pl/dl/show-business/278665?utm_medium=c2c_referral",
    },
  },
  aboutUs: {
    logo,
    companyName: "TuRehabilitacja",
    intro: {
      paragraph1:
        "Jesteśmy gabinetem fizjoterapii i masażu znajdującym się na warszawskich Bielanach.",
      paragraph2:
        "Do każdego pacjenta podchodzimy indywidualnie, z pełną dbałością o jak najlepszą diagnostykę i terapię dostosowaną do Państwa potrzeb.",
    },
    focusAreas: {
      title: "Zajmujemy się leczeniem i profilaktyką:",
      list: [
        "schorzeń układu ruchu - bólu kręgosłupa i stawów obwodowych",
        "przeciążeń spowodowanych m.in. wielogodzinną pracą przy biurku",
        "rehabilitacją po urazach i operacjach",
        "treningiem funkcjonalnym",
        "masażem leczniczym",
        "masażem relaksacyjnym",
        "masażem twarzy",
        "masażem odchudzającym",
      ],
    },
    shockwave: {
      title:
        "W naszej ofercie znajduje się również fala uderzeniowa, która ma szerokie zastosowanie w leczeniu takich schorzeń jak:",
      list: [
        "ostroga piętowa",
        "łokieć tenisisty i golfisty",
        "przeciążenia i zwapnienia",
        "skręcenia i zwichnięcia stawów",
        "kolano biegacza",
        "zamrożony bark",
        "i wiele więcej",
      ],
      closing:
        "Fala uderzeniowa jest też doskonałym narzędziem w walce z cellulitem.",
    },
    staff: [
      {
        id: nanoid(),
        name: "Mgr Weronika Chmiel",
        img: staffImgs.WeronikaChmiel,
        alt: "Zdjęcie Weroniki Chmiel",
        bio: [
          "Jestem absolwentką Warszawskiego Uniwersytetu Medycznego, która łączy wiedzę medyczną z holistycznym podejściem.",
        ],
        treatmentScope: [],
        approach: [
          "Pracuję z empatią i uważnością, pomagając pacjentom zmniejszyć ból, odzyskać swobodę ruchu i poprawić samopoczucie. Specjalizuję się w terapii bólu głowy, kręgosłupa oraz kończyn górnych. Korzystam z różnorodnych metod m.in. masażu Kobido, pinoterapii i technik manualnych — dzięki czemu dobieram terapię idealnie do Twoich potrzeb. Regularnie szkolę się, aby oferować skuteczne i bezpieczne rozwiązania.",
          "Od 15 lat śpiewam, dlatego dodatkowo zajmuję się rehabilitacją głosu, wspierając osoby pracujące głosem lub odczuwające napięcia w obrębie szyi.",
          "Tworzę w gabinecie atmosferę spokoju i uważności, czerpiąc także z pasji do psychologii, rękodzieła i Bieszczad.",
          "Zapraszam na terapię, która pomoże Ci poczuć ulgę, lekkość i większą równowagę na co dzień.",
        ],
      },
      {
        id: nanoid(),
        name: "Mgr Paulina Nowosada",
        img: staffImgs.PaulinaNowosada,
        alt: "Zdjęcie Pauliny Nowosada",
        bio: [
          "Od kilku lat na co dzień pracuję z osobami, które zmagają się z konsekwencjami urazów i przeciążeń narządu ruchu. Towarzyszę pacjentom w powrocie do sprawności po operacjach, złamaniach, skręceniach i kontuzjach, ale także pomagam wtedy, gdy ból nie jest efektem jednego urazu, a narasta stopniowo — w kręgosłupie, barkach czy głowie.",
        ],
        treatmentScope: [],
        approach: [
          "Fizjoterapia ortopedyczna jest solidnym fundamentem mojej pracy. To dzięki niej potrafię spojrzeć na ciało jako całość i skutecznie łączyć objawy z ich rzeczywistą przyczyną. Takie podejście szczególnie sprawdza się u osób żyjących w ciągłym napięciu, stresie i pośpiechu, gdzie przeciążenia stają się codziennością.",
          "Szczególną uwagę poświęcam rehabilitacji stomatologicznej — obszarowi, który stał się moją zawodową pasją. Pracuję z pacjentami odczuwającymi ból żuchwy, napięcia w obrębie twarzy i szyi, bruksizm oraz dolegliwości wpływające na komfort jedzenia, snu i koncentracji. W terapii nie skupiam się wyłącznie na jednym miejscu — uwzględniam napięcia całego ciała, styl życia i poziom stresu.",
          "Moim celem jest nie tylko zmniejszenie bólu, ale realna poprawa jakości codziennego funkcjonowania oraz poczucie, że ciało znów zaczyna współpracować, a nie ograniczać.",
        ],
      },
      {
        id: nanoid(),
        name: "Mgr Emilia Strzałkowska",
        img: staffImgs.EmiliaStrzalkowska,
        alt: "Zdjęcie Emilii Strzałkowskiej",
        bio: [
          "Jestem magistrem fizjoterapii, absolwentką Akademii Wychowania Fizycznego w Warszawie. Aktualnie studiuję psychoterapię w Instytucie Integralnej Psychoterapii Gestalt.",
          "Zajmuje się rehabilitacją:",
        ],
        treatmentScope: [
          "po operacjach,",
          "po urazach,",
          "zespołów bólowych kręgosłupa i stawów obwodowych,",
          "dolegliwościami spowodowanymi siedzącym trybem życia,",
          "przeciążeniami układu ruchu.",
        ],
        approach: [
          "W pracy z pacjentami wykorzystuję terapię manualną, masaż leczniczy i masaż tkanek głębokich. Zajmuję się również planowaniem i prowadzeniem treningu funkcjonalnego z wykorzystaniem technik stabilizacji tułowia, oceny posturalnej oraz treningu core.",
        ],
      },
    ],
    heroImages: [
      {
        lowRes: heroImgs.heroImgLowRes1,
        highRes: heroImgs.heroImgHighRes1,
        alt: "Masaż twarzy",
      },
      {
        lowRes: heroImgs.heroImgLowRes2,
        highRes: heroImgs.heroImgHighRes2,
        alt: "Masaż relaksacyjny",
      },
      {
        lowRes: heroImgs.heroImgLowRes3,
        highRes: heroImgs.heroImgHighRes3,
        alt: "Fala uderzeniowa aplikacja antycellulitowa",
      },
      {
        lowRes: heroImgs.heroImgLowRes4,
        highRes: heroImgs.heroImgHighRes4,
        alt: "Kinezyterapia",
      },
    ],
  },
  offers: [
    //   {
    //     id: nanoid(),
    //     title: "Masaż klasyczny",
    //     description: [
    //       "Jest to najstarsza metoda masażu. Ma działanie lecznicze i relaksacyjne, poprawia krążenie krwi, zmniejsza dolegliwości bólowe.",
    //     ],
    //     image: {
    //       src: offerImgs.masaz_klasyczny,
    //       alt: "Masaż pleców",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Masaż relaksacyjny",
    //     description: [
    //       "Ma na celu wyciszenie i odpoczynek dla ciała i duszy. Wprowadza ciało w stan idealnej harmonii.",
    //     ],
    //     image: {
    //       src: offerImgs.masaz_relaksacyjny,
    //       alt: "Relaksacyjny masaż pleców",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Masaż sportowy",
    //     description: ["Proponujemy dwa rodzaje masażu sportowego:"],
    //     hasDescriptionList: [
    //       "regeneracja po treningu - ma na celu zredukowanie nadmiernych napięć mięśniowych i przygotowanie ich do następnego treningu",
    //       "masaż izometryczny - ma na celu wzmocnienie siły mięśniowej, dzięki odpowiedniej sekwencji ruchów masażysty i współpracy pacjenta. Jest polecany pacjentom po kontuzjach, którzy chcą szybko wrócić do formy oraz dla osób, które przygotowują się do zawodów, dla wzmocnienia efektów treningu.",
    //     ],
    //     image: {
    //       src: offerImgs.masaz_sportowy,
    //       alt: "Sportowy masaż stopy",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Masaż całego ciała",
    //     description: [
    //       "Zredukuje napięcie całego ciała, sprawi, że poczujesz się zrelaksowany i wypoczęty.",
    //     ],
    //     variants: {
    //       basic: { price: null, time: null },
    //       extended: { price: 280, time: 90 },
    //     },
    //     image: {
    //       src: offerImgs.masaz_calego_ciala,
    //       alt: "Masaż całego ciała na stole do masażu",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Masaż leczniczy",
    //     description: [
    //       "Redukuje napięcie i ból mięśni, przyśpiesza regenerację tkanek, zmniejsza odczucie sztywności",
    //     ],
    //     variants: { basic: { price: null, time: null } },
    //     image: {
    //       src: offerImgs.masaz_leczniczy,
    //       alt: "Masaż leczniczy pleców",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Terapia manualna",
    //     description: [
    //       "Jest to metoda diagnostyki i leczenia zaburzeń układu ruchu. Przynosi zdecydowaną ulgę w bólu kręgosłupa i stawów obwodowych.",
    //     ],
    //     variants: {
    //       basic: { price: null, time: null },
    //       extended: { price: 200, time: 45 },
    //     },

    //     image: {
    //       src: offerImgs.terapia_manualna,
    //       alt: "Terapia manualna ramion",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Terapia manualna twarzy i głowy",
    //     description: [
    //       "Terapia manualna twarzy i głowy to forma fizjoterapii ukierunkowana na pracę z mięśniami, powięzią oraz stawami skroniowo-żuchwowymi. Obejmuje również odcinek szyjny kręgosłupa. Celem terapii jest zmniejszenie napięć oraz poprawa funkcji tkanek w obrębie głowy i szyi.",
    //       "Zabieg może zawierać elementy mobilizacji krtani i  drenażu manualnego. Wspiera to funkcję głosu, oddychanie oraz prawidłowy przepływ płynów. Terapia może wpływać zarówno na dolegliwości miejscowe, jak i objawy odległe wynikające z zaburzeń napięcia.",
    //     ],
    //     contraindications: [
    //       "stany zapalne i infekcje",
    //       "choroby skóry w fazie ostrej",
    //       "świeże urazy lub zabiegi w obrębie głowy i szyi",
    //       "ostre choroby neurologiczne",
    //       "choroba nowotworowa",
    //     ],
    //     recommendations: [
    //       "bóle i zawroty głowy",
    //       "dysfunkcje stawów skroniowo-żuchwowych",
    //       "bruksizm, nadmierne napięcie żuchwy",
    //       "napięcia mięśniowe twarzy, głowy i szyi",
    //       "dolegliwości zatok",
    //       "szumy uszne",
    //       "zaburzenia głosu, napięcia krtani",
    //       "przeciążenia odcinka szyjnego",
    //     ],
    //     variants: {
    //       basic: { price: 130, time: 30 },
    //       extended: { price: 200, time: 60 },
    //     },

    //     image: {
    //       src: offerImgs.terapia_manulana_twarzy_i_glowy,
    //       alt: "Terapia manualna twarzy i głowy",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Drenaż limfatyczny",
    //     description: [
    //       "Polega na pozbyciu się zastojów limfatycznych. Jest polecany pacjentom u których występują obrzęki kończyn, zarówno po urazach jak i w przebiegu chorób przewlekłych oraz dla osób wykonujących pracę stojąca.",
    //     ],
    //     variants: { basic: { price: null, time: null } },
    //     image: {
    //       src: offerImgs.drenaz_limfatyczny,
    //       alt: "Drenaż limfatyczny nóg",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Masaż bańką chińską",
    //     description: [
    //       "Jest to masaż o działaniu antycellulitowym i odchudzającym. Skóra po zabiegu staje się jędrna i elastyczna.",
    //     ],
    //     image: {
    //       src: offerImgs.masaz_banka_chinska,
    //       alt: "Masaż bańką chińską na nogach",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Kobido",
    //     description: [
    //       "Masaż Kobido to intensywna terapia manualna twarzy, szyi i dekoltu. Opiera się na pracy z mięśniami oraz strukturami powięziowymi. Zabieg poprawia mikrokrążenie, wspiera naturalne procesy drenażu limfatycznego i zmniejsza nadmierne napięcia mięśniowe. Efektem jest zdrowszy i bardziej promienny wygląd skóry. Pojawia się także uczucie lekkości, rozluźnienia i głębokiego spokoju.",
    //       "Zabieg jest szczególnie polecany osobom z nadmiernym napięciem mięśni twarzy, bruksizmem i bólami głowy. Sprawdzi się również przy uczuciu „ciężkiej” twarzy oraz oznakach zmęczenia tkanek.",
    //     ],
    //     variants: {
    //       basic: { price: 220, time: 70 },
    //       extended: { price: 280, time: 90 },
    //     },
    //     contraindications: [
    //       "stany zapalne i infekcje",
    //       "choroby skóry w fazie ostrej",
    //       "rany, przerwana ciągłość skóry",
    //       "świeże zabiegi medycyny estetycznej",
    //       "gorączka, złe samopoczucie",
    //     ],

    //     image: {
    //       src: offerImgs.kobido,
    //       alt: "Kobido",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Masaż twarzy",
    //     description: ["Proponujemy dwa rodzaje masażu twarzy: "],
    //     hasDescriptionList: [
    //       "relaksacyjny - masaż ten pozwoli Ci się wyciszyć i zrelaksować.",
    //       "powięziowy o dzialaniu przeciwzmarszczkowym - poprawia krążenie krwi, zmniejsza napięcie mięśni, poprawia wygląd skóry twarzy i zwiększa jej elastyczność.",
    //     ],
    //     variants: {
    //       basic: { price: null, time: null },
    //       extended: { price: 130, time: 30 },
    //     },

    //     image: {
    //       src: offerImgs.masaz_twarzy,
    //       alt: "Masaż twarzy",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Terapia blizny",
    //     description: [
    //       "Terapia manualna blizny to forma fizjoterapii ukierunkowana na poprawę jakości, elastyczności i funkcji tkanek w obrębie blizny oraz okolic z nią powiązanych. Prawidłowo opracowana blizna wspiera biomechanikę całego ciała i zmniejsza ryzyko utrwalania niekorzystnych napięć.",
    //       "Zabieg obejmuje techniki manualne oraz elementy pinoterapii. Ich celem jest poprawa ślizgu tkanek, zmniejszenie napięcia i wsparcie prawidłowego funkcjonowania struktur. Terapia może wpływać zarówno na dolegliwości w obrębie blizny, jak i na objawy odległe wynikające z kompensacji napięciowych.",
    //       "Terapia manualna blizny jest możliwa po całkowitym wygojeniu rany. Najczęściej odbywa się to po 4–6 tygodniach od zabiegu, po ustąpieniu strupów i objawów zapalnych. Termin rozpoczęcia terapii ustalany jest indywidualnie po wywiadzie.",
    //     ],
    //     contraindications: [
    //       "niewygojona rana lub świeża blizna",
    //       "strupy, sączenie lub objawy stanu zapalnego w obrębie blizny",
    //       "infekcje ogólne lub miejscowe",
    //       "choroby skóry w fazie ostrej",
    //       "przerwana ciągłość skóry w miejscu zabiegu",
    //     ],
    //     variants: {
    //       basic: { price: 130, time: 30 },
    //       extended: { price: 200, time: 60 },
    //     },

    //     image: {
    //       src: offerImgs.terapia_blizny,
    //       alt: "Terapia blizny",
    //     },
    //   },

    //   {
    //     id: nanoid(),
    //     isActive: false,
    //     title: ["Masaż twarzy i dekoltu"],
    //     // no description
    //     variants: {
    //       basic: { price: null, time: null },
    //       extended: { price: 180, time: 45 },
    //     },

    //     // no image
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Masaż dla kobiet w ciąży",
    //     description: [
    //       "W tym wyjątkowym dla Kobiety stanie Jej ciało szczególnie wymaga troski i zaopiekowania. Masaż może przynieść duża ulgę w bólu nie tylko kręgosłupa, ale też zmęczonych ramion i nóg.",
    //     ],
    //     variants: { basic: { price: null, time: null } },
    //     image: {
    //       src: offerImgs.masaz_dla_kobiet_w_ciazy,
    //       alt: "Masaż kobiety w ciąży",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Fala uderzeniowa - aplikacja lecznicza",
    //     description: [
    //       "Wysokiej klasy sprzęt, który pomaga rozbić zwapnienia takie jak ostroga piętowa, łokieć golfisty/tenisisty, a także wspomóc leczenie przewlekłego i otrego bólu tkanek miękkich.",
    //     ],
    //     variants: {
    //       basic: { price: null, time: null },
    //       extended: { price: 80, time: null },
    //     },

    //     image: {
    //       src: offerImgs.fala_uderzeniowa_aplikacja_lecznicza,
    //       alt: "Aplikacja fali uderzeniowej na przedramię",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title:
    //       "Fala uderzeniowa - aplikacja antycellulitowa | wybrana partia ciała",
    //     description: [
    //       "Zabieg ma za zadanie rozbicie komórek tłuszczowych, ktore dzięki zwiększenonemu krążeniu są szybszciej usuwane z organizmu. Efekty widoczne są już po kilku zabiegach",
    //     ],
    //     variants: {
    //       basic: { price: null, time: null },
    //       extended: { price: 100, time: null },
    //     },
    //     image: {
    //       src: offerImgs.fala_uderzeniowa_aplikacja_antycellulitowa,
    //       alt: "Aplikacja fali uderzeniowej na udo",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     isActive: false,
    //     title:
    //       "Fala uderzeniowa - aplikacja antycellulitowa | pakiet - uda, pośladki, brzuch ",
    //     // no description
    //     variants: {
    //       basic: { price: null, time: null },
    //       extended: { price: 250, time: null },
    //     },
    //     // no image
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Kinezyterapia (ćwiczenia)",
    //     description: [
    //       "Są to ćwiczenia rehabilitacyjne. Wyróżniamy tu ćwiczenia: ",
    //     ],
    //     hasDescriptionList: [
    //       "przygotowujące do zabiegu operacyjnego np. Endopotezoplastyki stawów",
    //       "rehabilitacyjne po zabiegach operacyjnych oraz urazach",
    //     ],
    //     image: {
    //       src: offerImgs.kinezyterapia,
    //       alt: "Kinezyterapia, ćwiczenia na macie z piłką",
    //     },
    //   },
    //   {
    //     id: nanoid(),
    //     title: "Trening funkcjonalny",
    //     description: [
    //       "Ma na celu wzmocnienie mięśni głębokich, będących naszym fundamentem. Następnie skupiamy się na ich elastyczności, sile,  poprawie czucia głębokiego i lepszej koordynacji. Ćwiczenia tego typu mogą być dostosowane zarówno do pacjentów, którzy na codzień wykonują pracę biurową jak i dla osób uprawiających sport (amatorsko i zawodowo). Pomagają zabezpieczyć organizm przed nawracającym bólem i kontuzjami.",
    //     ],
    //     image: {
    //       src: offerImgs.trening_funkcjonalny,
    //       alt: "Trening funkcjonalny na sali gimnastycznej",
    //     },
    //   },
    //////////////////////////
    {
      id: nanoid(),
      title: "Pierwsza wizyta fizjoterapeutyczna",
      description: [
        "Pierwsza wizyta fizjoterapeutyczna obejmuje szczegółowy wywiad dotyczący dolegliwości, stylu życia oraz przebytych urazów i chorób. Fizjoterapeuta przeprowadza badanie i testy funkcjonalne. Na podstawie uzyskanych informacji wykonywana jest terapia oraz ustalany jest indywidualny plan dalszego postępowania wraz z zaleceniami i wskazówkami na kolejne dni.",
      ],
      variants: {
        basic: { price: null, time: null },
      },

      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Terapia bólu kolana/biodra/stawu skokowego",
      description: [
        "Jest dedykowana dla dolegliwości po urazach i przeciążeniach (skręcenie, ból przy chodzeniu/bieganiu, uczucie niestabilności).",
        "Terapia + ćwiczenia + plan powrotu do sprawności i aktywności.",
      ],
      variants: {
        basic: { price: null, time: null },
      },

      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Terapia bólu kręgosłupa",
      description: [
        "Dla osób z bólem odcinka szyjnego, lędźwiowego lub piersiowego z sztywnością, napięciem, przeciążeniem (np. praca siedząca, stres).",
        "Terapia manualna przeciwbólowa + ćwiczenia + wskazówki na co dzień.",
      ],
      variants: {
        basic: { price: null, time: null },
      },

      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Terapia bólu barku/łokcia/nadgarstka",
      description: [
        "Dedykowana dla bólu barku i ograniczenia ruchu (ból przy sięganiu, podnoszeniu ręki, spaniu na boku).",
        "Ocena funkcjonalna + terapia + ćwiczenia + plan, jak bezpiecznie wracać do aktywności.",
        "Dla bólu łokcia i nadgarstka (problemy z chwytaniem, odkręcaniem)",
        "Ocena funkcjonalna + terapia + ćwiczenia + plan",
      ],
      variants: {
        basic: { price: null, time: null },
      },

      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Fizjoterapia stomatologiczna - pierwsza wizyta",
      description: [
        "Dla osób z bruksizmem, bólem żuchwy, napięciami twarzy i szyi, bólami głowy o podłożu napięciowym.",
        "Wywiad + ocena + terapia oraz zalecenia do domu",
      ],
      variants: {
        basic: { price: null, time: null },
      },

      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Masaż leczniczy",
      description: [
        "To specjalistyczna forma terapii ukierunkowana na łagodzenie bólu oraz wspomaganie leczenia schorzeń układu mięśniowo-szkieletowego. Wykonywany jest z odpowiednio dobraną intensywnością, w zależności od problemu oraz indywidualnych potrzeb pacjenta. Pomaga zmniejszyć napięcie mięśniowe, poprawia zakres ruchu, wspiera regenerację po urazach i przeciążeniach oraz usprawnia krążenie.",
        "Polecany szczególnie przy bólach kręgosłupa oraz innych dolegliwościach wnikających z siedzącego trybu życia. Masaż leczniczy to skuteczne wsparcie i krok w stronę sprawności oraz lepszego samopoczucia.",
      ],
      variants: {
        basic: { price: null, time: null },
      },

      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Kolejna wizyta (kontrolna)",
      description: [
        "Kontynuacja terapii po pierwszej wizycie: praca nad przyczyną dolegliwości, progres planu i dostosowanie obciążenia/ćwiczeń do aktualnych objawów.",
      ],
      variants: {
        basic: { price: null, time: null },
      },

      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Terapia manualna",
      description: [
        "Jest to metoda diagnostyki i leczenia zaburzeń układu ruchu. Przynosi zdecydowaną ulgę w bólu kręgosłupa i stawów obwodowych.",
        "Podczas terapii fizjoterapeuta wykonuje różne techniki manualne, takie jak: mobilizacje stawów, manipulacje stawów, techniki pracy na tkankach miękkich. Najczęściej stosujemy ją przy bólach kręgosłupa, bólach stawów oraz ograniczeniu ruchomości stawów, przeciążeniach i urazach sportowych.",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 200, time: 45 },
      },

      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Trening funkcjonalny",
      description: [
        "Ma na celu wzmocnienie mięśni głębokich, będących naszym fundamentem. Następnie skupiamy się na ich elastyczności, sile, poprawie czucia głębokiego i lepszej koordynacji.",
        "Ćwiczenia tego typu mogą być dostosowane zarówno do pacjentów, którzy na codzień wykonują pracę biurową jak i dla osób uprawiających sport (amatorsko i zawodowo). Pomagają zabezpieczyć organizm przed nawracającym bólem i kontuzjami.",
      ],
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Kinezyterapia",
      description: [
        "Polega na stosowaniu odpowiednio dobranych ćwiczeń fizycznych w celu poprawy sprawności ruchowej, zmniejszenia bólu oraz przywrócenia prawidłowej funkcji organizmu.",
        "Ćwiczenia są dobierane indywidualnie do stanu zdrowia, wieku i możliwości pacjenta. Kinezyterapia ma zastosowanie w leczeniu bólu kręgosłupa i stawów obwodowych, pomaga wzmocnić mięśnie, poprawić kondycję, koordynację i równowagę, przywrócić zakres ruchomości w stawach, sprawność i samodzielność w życiu codziennym. Jest szczególnie polecana w leczeniu wad postawy oraz przed i po zabiegach operacyjnych (np. endoprotezoplastyka stawów).",
      ],
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Masaż klasyczny",
      description: [
        "Jest to najstarsza metoda masażu. Poprzez odpowiednio dobrane techniki – takie jak głaskanie, rozcieranie czy ugniatanie działa leczniczo i relaksacyjne, poprawia krążenie krwi, zmniejsza dolegliwości bólowe, zmniejsza napięcie mięśni i przyśpiesza ich regenerację.",
      ],
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Masaż relaksacyjny",
      description: [
        "To delikatna, odprężająca forma masażu, której głównym celem jest redukcja stresu i głębokie wyciszenie organizmu. Wykonywany powolnymi, płynnymi ruchami, pomaga rozluźnić napięte mięśnie, uspokoić układ nerwowy oraz przywrócić wewnętrzną równowagę. Daje uczucie lekkości i harmonii. To idealny wybór dla osób przemęczonych, żyjących w ciągłym napięciu i potrzebujących chwili tylko dla siebie.",
      ],
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Masaż sportowy",
      description: ["Proponujemy dwa rodzaje masażu sportowego:"],
      hasDescriptionList: [
        "regeneracja po treningu - ma na celu zredukowanie nadmiernych napięć mięśniowych i przygotowanie ich do następnego treningu,",
        "masaż izometryczny - ma na celu wzmocnienie siły mięśniowej, dzięki odpowiedniej sekwencji ruchów masażysty i współpracy pacjenta. Jest polecany pacjentom po kontuzjach, którzy chcą szybko wrócić do formy oraz dla osób, które przygotowują się do zawodów, dla wzmocnienia efektówtreningu.",
      ],
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Masaż całego ciała",
      description: [
        "To kompleksowy zabieg łączący w sobie elementy masaży klasycznego, relaksacyjnego i leczniczego – dzięki czemu jednocześnie rozluźnia napięte mięśnie i głęboko je odpręża.",
        "Masaż całego ciała poprawia krążenie, wspomaga regenerację organizmu oraz redukuje stres i zmęczenie. To świetny wybór dla osób, które chcą zadbać o całe ciało i podarować sobie chwilę pełnego relaksu.",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 280, time: 90 },
      },
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Terapia manualna",
      description: [
        "To specjalistyczna metoda leczenia oparta na precyzyjnych technikach. Skierowana jest na diagnozowanie i leczenie zaburzeń układu ruchu takich jak problemy związane z kręgosłupem, stawami obwodowymi czy mięśniami.",
        "Podczas terapii stosuje się takie techniki jak mobilizacje, manipulacje czy techniki pracy na tkankach miękkich, których celem jest zmniejszenie bólu, poprawa ruchomości stawów oraz przywrócenie prawidłowej funkcji ciała. Zabieg jest dobierany indywidualnie do potrzeb i stanu pacjenta.",
        "Terapia manualna to skuteczna pomoc przy bólach pleców, szyi, stawów oraz dolegliwościach przeciążeniowych – pomaga odzyskać komfort ruchu i poprawić jakość życia.",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 200, time: 45 },
      },
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Terapia manualna twarzy i głowy",
      description: [
        "Terapia manualna twarzy i głowy to forma fizjoterapii ukierunkowana na pracę z mięśniami, powięzią oraz stawami skroniowo-żuchwowymi. Obejmuje również odcinek szyjny kręgosłupa. Celem terapii jest zmniejszenie napięć oraz poprawa funkcji tkanek w obrębie głowy i szyi.",
        "Zabieg może zawierać elementy mobilizacji krtani i drenażu manualnego. Wspiera to funkcję głosu, oddychanie oraz prawidłowy przepływ płynów. Terapia może wpływać zarówno na dolegliwości miejscowe, jak i objawy odległe wynikające z zaburzeń napięcia.",
      ],
      contraindications: [
        "stany zapalne i infekcje",
        "choroby skóry w fazie ostrej",
        "świeże urazy lub zabiegi w obrębie głowy i szyi",
        "ostre choroby neurologiczne",
        "choroba nowotworowa",
      ],
      recommendations: [
        "bóle i zawroty głowy",
        "dysfunkcje stawów skroniowo-żuchwowych",
        "bruksizm, nadmierne napięcie żuchwy",
        "napięcia mięśniowe twarzy, głowy i szyi",
        "dolegliwości zatok",
        "szumy uszne",
        "zaburzenia głosu, napięcia krtani",
        "przeciążenia odcinka szyjnego",
      ],
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Drenaż limfatyczny",
      description: [
        "Jest to forma terapii wspomagająca pracę układu limfatycznego. Jego celem jest usprawnienie przepływu limfy i zmniejszenie obrzęków.",
        "Zabieg jest wykonywany manualnie przez terapeutę ruchami o niewielkiej sile nacisku, dzięki czemu działa skutecznie, a jednocześnie bardzo łagodnie.",
        "Drenaż limfatyczny poprawia krążenie, wspiera regenerację oraz daje uczucie lekkości i odprężenia. Jest polecany szczególnie przy obrzękach, uczuciu ciężkich nóg, cellulicie oraz jako wsparcie po zabiegach chirurgicznych i estetycznych.",
      ],
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Masaż bańką chińską",
      description: [
        "To intensywny zabieg wykonywany przy użyciu specjalnych silikonowych baniek, które zasysają skórę i tkankę podskórną, pobudzając krążenie krwi i limfy. Masaż pomaga redukować cellulit, ujędrnia skórę, zmniejsza napięcie mięśniowe oraz wspiera modelowanie sylwetki. To skuteczny zabieg dla osób, które chcą poprawić wygląd skóry, pobudzić metabolizm i zadbać o lepsze samopoczucie.",
      ],
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Kobido",
      description: [
        "Masaż Kobido to intensywna terapia manualna twarzy, szyi i dekoltu. Opiera się na pracy z mięśniami oraz strukturami powięziowymi.",
        "Zabieg poprawia mikrokrążenie, wspiera naturalne procesy drenażu limfatycznego i zmniejsza nadmierne napięcia mięśniowe. Efektem jest zdrowszy i bardziej promienny wygląd skóry. Pojawia się także uczucie lekkości, rozluźnienia i głębokiego spokoju.",
        "Zabieg jest szczególnie polecany osobom z nadmiernym napięciem mięśni twarzy, bruksizmem i bólami głowy. Sprawdzi się również przy uczuciu „ciężkiej” twarzy oraz oznakach zmęczenia tkanek.",
      ],
      contraindications: [
        "stany zapalne i infekcje",
        "choroby skóry w fazie ostrej",
        "rany, przerwana ciągłość skóry",
        "świeże zabiegi medycyny estetycznej",
        "gorączka, złe samopoczucie",
      ],
      variants: {
        basic: { price: 220, time: 70 },
        extended: { price: 280, time: 90 },
      },
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Masaż twarzy i dekoltu",
      description: [
        "To delikatny, relaksujący zabieg, który poprawia kondycję skóry oraz wspiera jej naturalną regenerację. Masaż stymuluje krążenie krwi i limfy, dzięki czemu skóra staje się lepiej dotleniona i promienna.",
        "Pomaga zredukować napięcia w obrębie twarzy oraz zmniejszyć oznaki zmęczenia. Dodatkowo działa odprężająco, przynosząc uczucie głębokiego relaksu. To idealny zabieg dla osób, które chcą zadbać o młody wygląd, jędrność skóry twarzy i chwilę przyjemnego wyciszenia.",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 180, time: 45 },
      },
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Terapia blizny",
      description: [
        "Terapia manualna blizny to forma fizjoterapii ukierunkowana na poprawę jakości, elastyczności i funkcji tkanek w obrębie blizny oraz okolic z nią powiązanych. Prawidłowo opracowana blizna wspiera biomechanikę całego ciała i zmniejsza ryzyko utrwalania niekorzystnych napięć.",
        "Zabieg obejmuje techniki manualne oraz elementy pinoterapii. Ich celem jest poprawa ślizgu tkanek, zmniejszenie napięcia i wsparcie prawidłowego funkcjonowania struktur. Terapia może wpływać zarówno na dolegliwości w obrębie blizny, jak i na objawy odległe wynikające z kompensacji napięciowych.",
        "Terapia manualna blizny jest możliwa po całkowitym wygojeniu rany. Najczęściej odbywa się to po 4–6 tygodniach od zabiegu, po ustąpieniu strupów i objawów zapalnych. Termin rozpoczęcia terapii ustalany jest indywidualnie po wywiadzie.",
      ],
      contraindications: [
        "niewygojona rana lub świeża blizna",
        "strupy, sączenie lub objawy stanu zapalnego w obrębie blizny",
        "infekcje ogólne lub miejscowe",
        "choroby skóry w fazie ostrej",
        "przerwana ciągłość skóry w miejscu zabiegu",
      ],
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Masaż dla kobiet w ciąży",
      description: [
        "To bezpieczny i delikatny zabieg, dostosowany do potrzeb przyszłej Mamy. Wykonywany w odpowiedniej pozycji z zachowaniem szczególnej ostrożności, pomaga złagodzić napięcie mięśniowe, bóle pleców, karku oraz uczucie ciężkości nóg. Poprawia krążenie, zmniejsza obrzęki i wspiera naturalną regenerację organizmu. Działa również kojąco na układ nerwowy, redukuje stres i poprawia samopoczucie. To chwila relaksu i wytchnienia w wyjątkowym czasie oczekiwania na Dziecko.",
      ],
      variants: {
        basic: { price: null, time: null },
      },
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title: "Fala uderzeniowa – aplikacja lecznicza",
      description: [
        "To nowoczesna metoda fizjoterapeutyczna polegająca na precyzyjnym działaniu fal akustycznych o wysokiej energii, które docierają głęboko do tkanek rozbijając zwapnienia i pobudzając procesy regeneracyjne. Zabieg wykorzystywany jest najczęściej w takich schorzeniach jak: ostroga piętowa, łokieć golfisty/tenisisty, zespół mięśnia gruszkowatego, przewlekłe zespoły bólowe oraz wiele innych.",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 80, time: null },
      },
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      title:
        "Fala uderzeniowa – aplikacja antycellulitowa wybrana partia ciała",
      description: [
        "To nieinwazyjny zabieg polegający na działaniu fal akustycznych o wysokiej energii na tkanki objęte cellulitem. Podczas zabiegu głowica jest przykładana do skóry, a emitowane impulsy stymulują mikrokrążenie, rozbijają komórki tłuszczowe i wspomagają drenaż limfatyczny. Dzięki temu dochodzi do wygładzenia i uelastycznienia skóry oraz zmniejszenia cellulitu.",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 100, time: null },
      },
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
    {
      id: nanoid(),
      isActive: false,
      title: "Fala uderzeniowa – pakiet uda, pośladki, brzuch",
      description: [],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 250, time: null },
      },
      // image: {
      //   src: offerImgs.terapia_manulana_twarzy_i_glowy,
      //   alt: "Terapia manualna twarzy i głowy",
      // },
    },
  ].map((offer) => ({ ...defaultOffer, ...offer })),
};
