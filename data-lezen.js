// ===== data-lezen.js: de leesteksten met vragen =====
// "gone" is het nummer van het goede antwoord. Let op: je begint te tellen bij 0!
// 0 = eerste keuze, 1 = tweede keuze, 2 = derde keuze, 3 = vierde keuze

const leesTeksten = [
  {
    titel: "De octopus: slim onder water",
    tekst: `Een octopus heeft acht armen, maar wist je dat hij ook drie harten heeft? Twee harten pompen bloed naar de kieuwen. Het derde hart pompt bloed door de rest van zijn lichaam. En zijn bloed is niet rood, maar blauw!

Octopussen zijn meesters in camoufleren. Ze kunnen in een paar tellen van kleur veranderen. Zo lijken ze precies op een steen of op het zand, en zien vijanden ze niet.

Onderzoekers vinden octopussen erg slim. In een dierentuin leerde een octopus een glazen pot open te draaien om bij een krab te komen. Er zijn zelfs verhalen over octopussen die 's nachts uit hun bak klommen.

Toch leven de meeste octopussen maar kort: vaak maar één of twee jaar. In die korte tijd leren ze dus heel veel.`,
    vragen: [
      {
        vraag: "Hoeveel harten heeft een octopus?",
        keuzes: ["Eén", "Twee", "Drie", "Acht"],
        goed: 2,
        uitleg: "In de eerste alinea staat dat hij drie harten heeft."
      },
      {
        vraag: "Wat betekent 'camoufleren' in deze tekst?",
        keuzes: ["Heel snel wegzwemmen", "Zo op je omgeving lijken dat je niet opvalt", "Inkt spuiten", "Een pot openmaken"],
        goed: 1,
        uitleg: "Lees de zinnen erna: ze lijken op een steen, zodat vijanden ze niet zien."
      },
      {
        vraag: "Waarom vinden onderzoekers octopussen slim?",
        keuzes: ["Ze hebben drie harten", "Ze hebben blauw bloed", "Een octopus leerde een pot open te draaien", "Ze leven maar kort"],
        goed: 2,
        uitleg: "Blauw bloed en drie harten zijn bijzonder, maar niet slim. Het openen van de pot laat zien dat ze slim zijn."
      },
      {
        vraag: "Wat is de hoofdgedachte van de tekst?",
        keuzes: ["Octopussen zijn bijzondere en slimme dieren", "Octopussen eten graag krab", "Octopussen wonen in dierentuinen", "Octopussen zijn gevaarlijk"],
        goed: 0,
        uitleg: "De hoofdgedachte gaat over de hele tekst, niet over één alinea."
      }
    ]
  },

  {
    titel: "Het briefje in de bibliotheek",
    tekst: `Op woensdagmiddag ging Noor met haar broertje Sem naar de bibliotheek. Sem wilde een boek over dinosaurussen lenen. Noor zocht een spannend boek voor zichzelf.

Toen Noor een dik boek uit de kast trok, viel er een klein briefje op de grond. Ze raapte het op. Er stond: 'Wie dit vindt, kijkt onder de rode bank.'

Noor keek om zich heen. Bij het raam stond een rode bank. Ze liep er snel naartoe en knielde neer. Onder de bank lag een envelop met een kaartje: 'Gefeliciteerd! Je hebt onze speurtocht gevonden. Haal je prijs op bij de balie.'

Sem keek jaloers toe. 'Mag ik ook meedoen?' vroeg hij. Noor lachte. 'Natuurlijk, we halen de prijs samen op.' Bij de balie kregen ze allebei een boekenbon.`,
    vragen: [
      {
        vraag: "Waar kwam het briefje vandaan?",
        keuzes: ["Uit een envelop", "Het viel uit een boek", "Het lag onder de rode bank", "Van de balie"],
        goed: 1,
        uitleg: "Toen Noor een dik boek uit de kast trok, viel het briefje op de grond."
      },
      {
        vraag: "'Ze raapte het op.' Waar verwijst 'het' naar?",
        keuzes: ["Het boek", "Het briefje", "De bank", "De envelop"],
        goed: 1,
        uitleg: "'Het' is een verwijswoord. Kijk in de zin ervoor: daar valt het briefje op de grond."
      },
      {
        vraag: "Waarom keek Sem jaloers?",
        keuzes: ["Hij was boos op Noor", "Hij vond geen dinosaurusboek", "Hij wilde ook meedoen met de speurtocht", "Hij was moe"],
        goed: 2,
        uitleg: "Direct daarna vraagt hij: 'Mag ik ook meedoen?'"
      },
      {
        vraag: "Wat voor iemand is Noor, denk je?",
        keuzes: ["Gemeen", "Bang", "Verlegen", "Aardig, want ze deelt de prijs"],
        goed: 3,
        uitleg: "Dat staat er niet letterlijk. Je haalt het uit wat ze doet: ze deelt de prijs met Sem."
      }
    ]
  },

  {
    titel: "Hoe werkt een sluis?",
    tekst: `Nederland heeft veel kanalen en rivieren. Het water is niet overal even hoog. Om een boot van laag naar hoog water te brengen, gebruiken we een sluis.

Een sluis is een soort bak met aan beide kanten een deur. Die deuren heten sluisdeuren. Eerst vaart de boot de sluis in. Daarna gaat de deur achter de boot dicht. Dan laat de sluiswachter langzaam water in de sluis lopen. Hierdoor gaat de boot omhoog, net als een badeendje in een bad dat volloopt.

Is het water in de sluis even hoog als het water aan de andere kant? Dan gaat de voorste deur open en kan de boot verder varen.

Wil een boot juist naar beneden? Dan gebeurt alles andersom: het water loopt uit de sluis weg en de boot zakt mee.`,
    vragen: [
      {
        vraag: "Waarom zijn sluizen nodig?",
        keuzes: ["Om vis te vangen", "Omdat het water niet overal even hoog is", "Om boten te wassen", "Om bruggen te maken"],
        goed: 1,
        uitleg: "Dat staat in de eerste alinea."
      },
      {
        vraag: "Wat gebeurt er nadat de boot de sluis in is gevaren?",
        keuzes: ["De voorste deur gaat open", "De boot zakt naar beneden", "De deur achter de boot gaat dicht", "De sluiswachter gaat naar huis"],
        goed: 2,
        uitleg: "Let op de signaalwoorden 'eerst', 'daarna' en 'dan'. Die vertellen de volgorde."
      },
      {
        vraag: "Waarom noemt de schrijver een badeendje?",
        keuzes: ["Om uit te leggen dat de boot met het water mee omhoog gaat", "Omdat boten geel zijn", "Omdat de sluiswachter van eendjes houdt", "Omdat er eenden in de sluis zwemmen"],
        goed: 0,
        uitleg: "Een vergelijking maakt iets moeilijks makkelijker te snappen."
      },
      {
        vraag: "Een boot wil naar beneden. Wat gebeurt er met het water in de sluis?",
        keuzes: ["Er komt water bij", "Het water bevriest", "Er gebeurt niets", "Het water loopt weg"],
        goed: 3,
        uitleg: "In de laatste alinea staat: alles gaat andersom, het water loopt weg."
      }
    ]
  },

  {
    titel: "Een moestuin op elke school!",
    tekst: `Ik vind dat elke school een moestuin moet hebben. Daar heb ik drie redenen voor.

Ten eerste leren kinderen in een moestuin waar hun eten vandaan komt. Veel kinderen weten niet eens hoe een aardappelplant eruitziet.

Ten tweede zijn kinderen in de moestuin lekker buiten bezig. Ze graven, zaaien en geven water. Dat is goed voor je lijf.

Ten derde smaakt groente die je zelf hebt gekweekt lekkerder. Kinderen durven die groente dan ook sneller te proeven.

Sommige mensen zeggen dat een moestuin te veel werk is. Maar als elke klas één keer per week helpt, valt dat best mee.

Kortom: een moestuin op school is gezond, leerzaam én lekker!`,
    vragen: [
      {
        vraag: "Wat wil de schrijver met deze tekst?",
        keuzes: ["Uitleggen hoe je groente kweekt", "Je overtuigen dat elke school een moestuin moet hebben", "Een spannend verhaal vertellen", "Uitleggen wat een aardappel is"],
        goed: 1,
        uitleg: "Het schrijfdoel is overtuigen. De schrijver geeft zijn mening en redenen."
      },
      {
        vraag: "Welke zin is een mening?",
        keuzes: ["In een moestuin groeien planten.", "Zelfgekweekte groente smaakt lekkerder.", "Een week heeft zeven dagen.", "Kinderen graven in de moestuin."],
        goed: 1,
        uitleg: "Een mening is wat iemand vindt. Niet iedereen vindt hetzelfde lekker!"
      },
      {
        vraag: "Welke woorden laten zien dat er een nieuwe reden komt?",
        keuzes: ["Kortom", "Maar", "Ten tweede", "Sommige mensen"],
        goed: 2,
        uitleg: "'Ten eerste', 'ten tweede' en 'ten derde' zijn signaalwoorden voor een opsomming."
      },
      {
        vraag: "Wat zeggen 'sommige mensen' over een moestuin?",
        keuzes: ["Dat het te duur is", "Dat groente vies is", "Dat het te koud is", "Dat het te veel werk is"],
        goed: 3,
        uitleg: "Dat is een tegenargument. De schrijver geeft er daarna een antwoord op."
      }
    ]
  },

  {
    titel: "Een droomvakantie op de Malediven",
    tekst: `De Malediven is een eilandengroep in de Indische Oceaan die bestaat uit meer dan duizend kleine koraaleilanden. Deze bestemming staat wereldwijd bekend om zijn parelwitte zandstranden, wuivende palmbomen en kristalhelder, turquoise water. Veel toeristen kiezen voor een verblijf in een luxe watervilla, een huisje dat op houten palen direct boven de zee is gebouwd. Vanaf je eigen terras kun je zo het warme water in duiken.

Onder het wateroppervlak bevindt zich een kleurrijke onderwaterwereld die ideaal is om te snorkelen en te duiken. Omdat het water zo helder is, kun je vanuit een boot vaak al zeeschildpadden, roggen en honderden soorten tropische vissen zien zwemmen. Voor avontuurlijke reizigers is er zelfs de kans om te zwemmen naast walvishaaien, de grootste vissoort ter wereld die gelukkig alleen plankton eet en helemaal ongevaarlijk is voor mensen.

Hoewel de eilanden eruitzien als een ongerept paradijs, vormt de klimaatverandering een grote bedreiging voor het land. De Malediven is namelijk het laagstgelegen land ter wereld; het hoogste punt ligt slechts een paar meter boven de zeespiegel. Hierdoor zijn de eilanden erg kwetsbaar voor de stijgende zeespiegel. De lokale bevolking en resorts werken daarom steeds vaker samen om het koraalrif te beschermen en het toerisme duurzamer te maken.`,
    vragen: [
      {
        vraag: "Waaruit bestaat de eilandengroep de Malediven?",
        keuzes: ["Uit meer dan duizend kleine koraaleilanden", "Uit drie grote vulkanische eilanden", "Uit een schiereiland aan de kust van India"],
        goed: 0,
        uitleg: "In de eerste alinea staat dat de Malediven bestaat uit meer dan duizend kleine koraaleilanden in de Indische Oceaan."
      },
      {
        vraag: "Wat is een watervilla?",
        keuzes: ["Een grote boot waarop toeristen slapen", "Een huisje op palen dat direct boven de zee staat", "Een onderwaterhotel met glazen muren"],
        goed: 1,
        uitleg: "De tekst legt uit dat een watervilla een huisje is dat op houten palen direct boven de zee is gebouwd."
      },
      {
        vraag: "Waarom zijn walvishaaien volgens de tekst niet gevaarlijk voor mensen?",
        keuzes: ["Omdat ze alleen 's nachts wakker zijn", "Omdat ze bang zijn voor duikers", "Omdat ze alleen plankton eten"],
        goed: 2,
        uitleg: "In de tweede alinea staat dat walvishaaien alleen plankton eten en helemaal ongevaarlijk zijn voor mensen."
      },
      {
        vraag: "Wat maakt de Malediven zo kwetsbaar voor klimaatverandering?",
        keuzes: ["Het is het laagstgelegen land ter wereld", "Er vallen elke week zware tropische stormen", "Het zeewater wordt te koud voor het koraal"],
        goed: 0,
        uitleg: "In de derde alinea staat dat het hoogste punt maar een paar meter boven de zeespiegel ligt, waardoor het het laagstgelegen land ter wereld is."
      },
      {
        vraag: "Wat doen de lokale bevolking en resorts om het land te helpen?",
        keuzes: ["Ze bouwen hoge muren rondom alle stranden", "Ze verbieden toeristen om nog te gaan duiken", "Ze beschermen het koraalrif en maken toerisme duurzamer"],
        goed: 2,
        uitleg: "De laatste zin vermeldt dat ze samenwerken om het koraalrif te beschermen en het toerisme duurzamer te maken."
      },
      {
        vraag: "In welke oceaan liggen de Malediven?",
        keuzes: ["De Atlantische Oceaan", "De Indische Oceaan", "De Stille Oceaan"],
        goed: 1,
        uitleg: "In de allereerste zin van de tekst wordt genoemd dat de eilandengroep in de Indische Oceaan ligt."
      }
    ]
  }

  // Dag 8: zet hier een komma achter de {, hierboven en plak jouw eigen tekst eronder!
];
