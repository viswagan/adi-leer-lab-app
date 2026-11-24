// ===== data-geschiedenis.js: vragen over de 10 tijdvakken =====
// "goed" is het nummer van het goede antwoord. Je begint te tellen bij 0!

const geschiedenisVragen = [
  // Tijdvak 1: Jagers en boeren
  {
    vraag: "Wat bouwden de eerste boeren in Drenthe van grote zwerfstenen?",
    keuzes: ["Kastelen", "Hunebedden", "Piramides"],
    goed: 1,
    uitleg: "Tijdvak 1 – Jagers en boeren. Hunebedden waren graven van zo'n 5000 jaar oud."
  },
  {
    vraag: "Hoe kwamen jagers-verzamelaars aan hun eten?",
    keuzes: ["Ze gingen naar de markt", "Ze hadden grote boerderijen", "Ze jaagden en zochten vruchten en noten"],
    goed: 2,
    uitleg: "Tijdvak 1 – Jagers en boeren. Ze trokken rond, achter de dieren aan."
  },

  // Tijdvak 2: Grieken en Romeinen
  {
    vraag: "Welke rivier was de grens van het Romeinse Rijk in Nederland?",
    keuzes: ["De Rijn", "De Maas", "De Schelde"],
    goed: 0,
    uitleg: "Tijdvak 2 – Grieken en Romeinen. Langs de Rijn bouwden de Romeinen forten: de limes."
  },
  {
    vraag: "Welke taal spraken de Romeinen?",
    keuzes: ["Grieks", "Latijn", "Frans"],
    goed: 1,
    uitleg: "Tijdvak 2 – Grieken en Romeinen. Veel Nederlandse woorden komen uit het Latijn, zoals 'muur' (murus)."
  },

  // Tijdvak 3: Monniken en ridders
  {
    vraag: "Wie werd in het jaar 800 tot keizer gekroond?",
    keuzes: ["Willem van Oranje", "Napoleon", "Karel de Grote"],
    goed: 2,
    uitleg: "Tijdvak 3 – Monniken en ridders. Karel de Grote was koning van de Franken."
  },
  {
    vraag: "Waar woonden en werkten monniken?",
    keuzes: ["In een klooster", "In een kasteel", "In een fabriek"],
    goed: 0,
    uitleg: "Tijdvak 3 – Monniken en ridders. Monniken schreven boeken met de hand over."
  },
  {
    vraag: "Een ridder kreeg land van een heer. Wat moest hij daarvoor terugdoen?",
    keuzes: ["Een kerk bouwen", "Voor de heer vechten", "Belasting betalen in euro's"],
    goed: 1,
    uitleg: "Tijdvak 3 – Monniken en ridders. Dit heet het leenstelsel."
  },

  // Tijdvak 4: Steden en staten
  {
    vraag: "Wat kregen steden in de middeleeuwen, waardoor ze eigen regels mochten maken?",
    keuzes: ["Een paspoort", "Een voetbalclub", "Stadsrechten"],
    goed: 2,
    uitleg: "Tijdvak 4 – Steden en staten. Met stadsrechten mocht een stad bijvoorbeeld een muur bouwen en markt houden."
  },
  {
    vraag: "Waarom hadden veel middeleeuwse steden een stadsmuur?",
    keuzes: ["Om zich te beschermen tegen vijanden", "Voor het mooie uitzicht", "Om de wind tegen te houden"],
    goed: 0,
    uitleg: "Tijdvak 4 – Steden en staten."
  },

  // Tijdvak 5: Ontdekkers en hervormers
  {
    vraag: "Wie zeilde in 1492 over de oceaan en kwam in Amerika aan?",
    keuzes: ["Abel Tasman", "Christoffel Columbus", "Michiel de Ruyter"],
    goed: 1,
    uitleg: "Tijdvak 5 – Ontdekkers en hervormers. Columbus dacht eigenlijk dat hij in Azië was!"
  },
  {
    vraag: "Tegen welke koning kwamen de Nederlanders in opstand?",
    keuzes: ["Lodewijk XIV van Frankrijk", "Karel de Grote", "Filips II van Spanje"],
    goed: 2,
    uitleg: "Tijdvak 5 – Ontdekkers en hervormers. De Opstand (Tachtigjarige Oorlog) begon in 1568."
  },
  {
    vraag: "Wie wordt de 'Vader des Vaderlands' genoemd?",
    keuzes: ["Willem van Oranje", "Rembrandt", "Napoleon"],
    goed: 0,
    uitleg: "Tijdvak 5 – Ontdekkers en hervormers. Hij leidde de Opstand tegen Spanje."
  },

  // Tijdvak 6: Regenten en vorsten
  {
    vraag: "Wat was de VOC?",
    keuzes: ["Een voetbalclub", "Een handelscompagnie die naar Azië voer", "Een kasteel in Utrecht"],
    goed: 1,
    uitleg: "Tijdvak 6 – Regenten en vorsten. De VOC werd opgericht in 1602, in de Gouden Eeuw."
  },
  {
    vraag: "Welke schilder maakte De Nachtwacht?",
    keuzes: ["Vincent van Gogh", "Piet Mondriaan", "Rembrandt"],
    goed: 2,
    uitleg: "Tijdvak 6 – Regenten en vorsten. Rembrandt schilderde hem in 1642. Hij hangt in het Rijksmuseum."
  },

  // Tijdvak 7: Pruiken en revoluties
  {
    vraag: "In welk land begon in 1789 een grote revolutie?",
    keuzes: ["Frankrijk", "Engeland", "Spanje"],
    goed: 0,
    uitleg: "Tijdvak 7 – Pruiken en revoluties. Het volk wilde vrijheid, gelijkheid en broederschap."
  },
  {
    vraag: "Welke Franse keizer maakte Nederland in 1810 een deel van Frankrijk?",
    keuzes: ["Filips II", "Napoleon", "Karel de Grote"],
    goed: 1,
    uitleg: "Tijdvak 7 – Pruiken en revoluties. Napoleon zorgde ook voor de burgerlijke stand en achternamen voor iedereen."
  },

  // Tijdvak 8: Burgers en stoommachines
  {
    vraag: "Welke uitvinding zorgde voor fabrieken en treinen?",
    keuzes: ["De computer", "De boekdrukkunst", "De stoommachine"],
    goed: 2,
    uitleg: "Tijdvak 8 – Burgers en stoommachines. Dit noemen we de industriële revolutie."
  },
  {
    vraag: "Tussen welke steden reed in 1839 de eerste trein van Nederland?",
    keuzes: ["Amsterdam en Haarlem", "Utrecht en Den Haag", "Groningen en Zwolle"],
    goed: 0,
    uitleg: "Tijdvak 8 – Burgers en stoommachines. De trein heette De Arend."
  },
  {
    vraag: "Wat herdenken en vieren we op 1 juli met Keti Koti?",
    keuzes: ["De bevrijding", "Het einde van de slavernij in 1863", "Koningsdag"],
    goed: 1,
    uitleg: "Tijdvak 8 – Burgers en stoommachines. Keti Koti betekent 'de ketenen zijn gebroken'."
  },

  // Tijdvak 9: Wereldoorlogen
  {
    vraag: "Welk meisje schreef in de Tweede Wereldoorlog een dagboek in het Achterhuis?",
    keuzes: ["Annie M.G. Schmidt", "Hannie Schaft", "Anne Frank"],
    goed: 2,
    uitleg: "Tijdvak 9 – Wereldoorlogen. Het Achterhuis staat aan de Prinsengracht in Amsterdam."
  },
  {
    vraag: "Op welke dag vieren we Bevrijdingsdag?",
    keuzes: ["5 mei", "27 april", "4 mei"],
    goed: 0,
    uitleg: "Tijdvak 9 – Wereldoorlogen. Op 4 mei herdenken we de doden, op 5 mei vieren we de vrijheid."
  },

  // Tijdvak 10: Televisie en computer
  {
    vraag: "Wat gebeurde er in 1953 in Zeeland?",
    keuzes: ["Een aardbeving", "De Watersnoodramp: een grote overstroming", "Een vulkaanuitbarsting"],
    goed: 1,
    uitleg: "Tijdvak 10 – Televisie en computer. Bij een zware storm braken de dijken door."
  },
  {
    vraag: "Wat werd na de Watersnoodramp gebouwd om Zeeland te beschermen?",
    keuzes: ["De Afsluitdijk", "De Eiffeltoren", "De Deltawerken"],
    goed: 2,
    uitleg: "Tijdvak 10 – Televisie en computer. De Afsluitdijk is ouder: die is van 1932."
  },
  {
    vraag: "Met welk geld betalen we sinds 2002 in Nederland?",
    keuzes: ["De euro", "De gulden", "De dollar"],
    goed: 0,
    uitleg: "Tijdvak 10 – Televisie en computer. Daarvoor betaalden we met guldens."
  }

  // Dag 10: zet hier een komma achter de hierboven en voeg jouw eigen vragen toe!
];
