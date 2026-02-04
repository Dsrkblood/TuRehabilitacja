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
    {
      id: nanoid(),
      title: "Masaż klasyczny",
      description: [
        "Jest to najstarsza metoda masażu. Ma działanie lecznicze i relaksacyjne, poprawia krążenie krwi, zmniejsza dolegliwości bólowe.",
      ],
      image: {
        src: offerImgs.masaz_klasyczny,
        alt: "Masaż pleców",
      },
    },
    {
      id: nanoid(),
      title: "Masaż relaksacyjny",
      description: [
        "Ma na celu wyciszenie i odpoczynek dla ciała i duszy. Wprowadza ciało w stan idealnej harmonii.",
      ],
      image: {
        src: offerImgs.masaz_relaksacyjny,
        alt: "Relaksacyjny masaż pleców",
      },
    },
    {
      id: nanoid(),
      title: "Masaż sportowy",
      description: ["Proponujemy dwa rodzaje masażu sportowego:"],
      hasDescriptionList: [
        "regeneracja po treningu - ma na celu zredukowanie nadmiernych napięć mięśniowych i przygotowanie ich do następnego treningu",
        "masaż izometryczny - ma na celu wzmocnienie siły mięśniowej, dzięki odpowiedniej sekwencji ruchów masażysty i współpracy pacjenta. Jest polecany pacjentom po kontuzjach, którzy chcą szybko wrócić do formy oraz dla osób, które przygotowują się do zawodów, dla wzmocnienia efektów treningu.",
      ],
      image: {
        src: offerImgs.masaz_sportowy,
        alt: "Sportowy masaż stopy",
      },
    },
    {
      id: nanoid(),
      title: "Masaż całego ciała",
      description: [
        "Zredukuje napięcie całego ciała, sprawi, że poczujesz się zrelaksowany i wypoczęty.",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 280, time: 90 },
      },
      image: {
        src: offerImgs.masaz_calego_ciala,
        alt: "Masaż całego ciała na stole do masażu",
      },
    },
    {
      id: nanoid(),
      title: "Masaż leczniczy",
      description: [
        "Redukuje napięcie i ból mięśni, przyśpiesza regenerację tkanek, zmniejsza odczucie sztywności",
      ],
      variants: { basic: { price: null, time: null } },
      image: {
        src: offerImgs.masaz_leczniczy,
        alt: "Masaż leczniczy pleców",
      },
    },
    {
      id: nanoid(),
      title: "Terapia manualna",
      description: [
        "Jest to metoda diagnostyki i leczenia zaburzeń układu ruchu. Przynosi zdecydowaną ulgę w bólu kręgosłupa i stawów obwodowych.",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 200, time: 45 },
      },

      image: {
        src: offerImgs.terapia_manualna,
        alt: "Terapia manualna ramion",
      },
    },
    {
      id: nanoid(),
      title: "Terapia manualna twarzy i głowy",
      description: [
        "Terapia manualna twarzy i głowy to forma fizjoterapii ukierunkowana na pracę z mięśniami, powięzią oraz stawami skroniowo-żuchwowymi. Obejmuje również odcinek szyjny kręgosłupa. Celem terapii jest zmniejszenie napięć oraz poprawa funkcji tkanek w obrębie głowy i szyi.",
        "Zabieg może zawierać elementy mobilizacji krtani i  drenażu manualnego. Wspiera to funkcję głosu, oddychanie oraz prawidłowy przepływ płynów. Terapia może wpływać zarówno na dolegliwości miejscowe, jak i objawy odległe wynikające z zaburzeń napięcia.",
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
      variants: {
        basic: { price: 130, time: 30 },
        extended: { price: 200, time: 60 },
      },

      image: {
        src: offerImgs.terapia_manulana_twarzy_i_glowy,
        alt: "Terapia manualna twarzy i głowy",
      },
    },
    {
      id: nanoid(),
      title: "Drenaż limfatyczny",
      description: [
        "Polega na pozbyciu się zastojów limfatycznych. Jest polecany pacjentom u których występują obrzęki kończyn, zarówno po urazach jak i w przebiegu chorób przewlekłych oraz dla osób wykonujących pracę stojąca.",
      ],
      variants: { basic: { price: null, time: null } },
      image: {
        src: offerImgs.drenaz_limfatyczny,
        alt: "Drenaż limfatyczny nóg",
      },
    },
    {
      id: nanoid(),
      title: "Masaż bańką chińską",
      description: [
        "Jest to masaż o działaniu antycellulitowym i odchudzającym. Skóra po zabiegu staje się jędrna i elastyczna.",
      ],
      image: {
        src: offerImgs.masaz_banka_chinska,
        alt: "Masaż bańką chińską na nogach",
      },
    },
    {
      id: nanoid(),
      title: "Kobido",
      description: [
        "Masaż Kobido to intensywna terapia manualna twarzy, szyi i dekoltu. Opiera się na pracy z mięśniami oraz strukturami powięziowymi. Zabieg poprawia mikrokrążenie, wspiera naturalne procesy drenażu limfatycznego i zmniejsza nadmierne napięcia mięśniowe. Efektem jest zdrowszy i bardziej promienny wygląd skóry. Pojawia się także uczucie lekkości, rozluźnienia i głębokiego spokoju.",
        "Zabieg jest szczególnie polecany osobom z nadmiernym napięciem mięśni twarzy, bruksizmem i bólami głowy. Sprawdzi się również przy uczuciu „ciężkiej” twarzy oraz oznakach zmęczenia tkanek.",
      ],
      variants: {
        basic: { price: 220, time: 70 },
        extended: { price: 280, time: 90 },
      },
      contraindications: [
        "stany zapalne i infekcje",
        "choroby skóry w fazie ostrej",
        "rany, przerwana ciągłość skóry",
        "świeże zabiegi medycyny estetycznej",
        "gorączka, złe samopoczucie",
      ],

      image: {
        src: offerImgs.kobido,
        alt: "Kobido",
      },
    },
    {
      id: nanoid(),
      title: "Masaż twarzy",
      description: ["Proponujemy dwa rodzaje masażu twarzy: "],
      hasDescriptionList: [
        "relaksacyjny - masaż ten pozwoli Ci się wyciszyć i zrelaksować.",
        "powięziowy o dzialaniu przeciwzmarszczkowym - poprawia krążenie krwi, zmniejsza napięcie mięśni, poprawia wygląd skóry twarzy i zwiększa jej elastyczność.",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 130, time: 30 },
      },

      image: {
        src: offerImgs.masaz_twarzy,
        alt: "Masaż twarzy",
      },
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
      variants: {
        basic: { price: 130, time: 30 },
        extended: { price: 200, time: 60 },
      },

      image: {
        src: offerImgs.terapia_blizny,
        alt: "Terapia blizny",
      },
    },

    {
      id: nanoid(),
      isActive: false,
      title: ["Masaż twarzy i dekoltu"],
      // no description
      variants: {
        basic: { price: null, time: null },
        extended: { price: 180, time: 45 },
      },

      // no image
    },
    {
      id: nanoid(),
      title: "Masaż dla kobiet w ciąży",
      description: [
        "W tym wyjątkowym dla Kobiety stanie Jej ciało szczególnie wymaga troski i zaopiekowania. Masaż może przynieść duża ulgę w bólu nie tylko kręgosłupa, ale też zmęczonych ramion i nóg.",
      ],
      variants: { basic: { price: null, time: null } },
      image: {
        src: offerImgs.masaz_dla_kobiet_w_ciazy,
        alt: "Masaż kobiety w ciąży",
      },
    },
    {
      id: nanoid(),
      title: "Fala uderzeniowa - aplikacja lecznicza",
      description: [
        "Wysokiej klasy sprzęt, który pomaga rozbić zwapnienia takie jak ostroga piętowa, łokieć golfisty/tenisisty, a także wspomóc leczenie przewlekłego i otrego bólu tkanek miękkich.",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 80, time: null },
      },

      image: {
        src: offerImgs.fala_uderzeniowa_aplikacja_lecznicza,
        alt: "Aplikacja fali uderzeniowej na przedramię",
      },
    },
    {
      id: nanoid(),
      title:
        "Fala uderzeniowa - aplikacja antycellulitowa | wybrana partia ciała",
      description: [
        "Zabieg ma za zadanie rozbicie komórek tłuszczowych, ktore dzięki zwiększenonemu krążeniu są szybszciej usuwane z organizmu. Efekty widoczne są już po kilku zabiegach",
      ],
      variants: {
        basic: { price: null, time: null },
        extended: { price: 100, time: null },
      },
      image: {
        src: offerImgs.fala_uderzeniowa_aplikacja_antycellulitowa,
        alt: "Aplikacja fali uderzeniowej na udo",
      },
    },
    {
      id: nanoid(),
      isActive: false,
      title:
        "Fala uderzeniowa - aplikacja antycellulitowa | pakiet - uda, pośladki, brzuch ",
      // no description
      variants: {
        basic: { price: null, time: null },
        extended: { price: 250, time: null },
      },
      // no image
    },
    {
      id: nanoid(),
      title: "Kinezyterapia (ćwiczenia)",
      description: [
        "Są to ćwiczenia rehabilitacyjne. Wyróżniamy tu ćwiczenia: ",
      ],
      hasDescriptionList: [
        "przygotowujące do zabiegu operacyjnego np. Endopotezoplastyki stawów",
        "rehabilitacyjne po zabiegach operacyjnych oraz urazach",
      ],
      image: {
        src: offerImgs.kinezyterapia,
        alt: "Kinezyterapia, ćwiczenia na macie z piłką",
      },
    },
    {
      id: nanoid(),
      title: "Trening funkcjonalny",
      description: [
        "Ma na celu wzmocnienie mięśni głębokich, będących naszym fundamentem. Następnie skupiamy się na ich elastyczności, sile,  poprawie czucia głębokiego i lepszej koordynacji. Ćwiczenia tego typu mogą być dostosowane zarówno do pacjentów, którzy na codzień wykonują pracę biurową jak i dla osób uprawiających sport (amatorsko i zawodowo). Pomagają zabezpieczyć organizm przed nawracającym bólem i kontuzjami.",
      ],
      image: {
        src: offerImgs.trening_funkcjonalny,
        alt: "Trening funkcjonalny na sali gimnastycznej",
      },
    },
  ].map((offer) => ({ ...defaultOffer, ...offer })),
};
