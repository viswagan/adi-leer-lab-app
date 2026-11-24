// ===== data-topografie.js: de feiten (de vragen maakt de computer zelf!) =====

// De 12 provincies van Nederland, met hun hoofdstad en een paar andere steden
const provincies = [
  { naam: "Groningen",      hoofdstad: "Groningen",        steden: ["Delfzijl", "Veendam", "Winschoten"] },
  { naam: "Friesland",      hoofdstad: "Leeuwarden",       steden: ["Sneek", "Drachten", "Heerenveen", "Harlingen"] },
  { naam: "Drenthe",        hoofdstad: "Assen",            steden: ["Emmen", "Hoogeveen", "Meppel"] },
  { naam: "Overijssel",     hoofdstad: "Zwolle",           steden: ["Enschede", "Deventer", "Hengelo", "Almelo"] },
  { naam: "Flevoland",      hoofdstad: "Lelystad",         steden: ["Almere", "Emmeloord", "Dronten"] },
  { naam: "Gelderland",     hoofdstad: "Arnhem",           steden: ["Nijmegen", "Apeldoorn", "Ede", "Zutphen"] },
  { naam: "Utrecht",        hoofdstad: "Utrecht",          steden: ["Amersfoort", "Zeist", "Veenendaal"] },
  { naam: "Noord-Holland",  hoofdstad: "Haarlem",          steden: ["Amsterdam", "Alkmaar", "Den Helder", "Hilversum", "Amstelveen"] },
  { naam: "Zuid-Holland",   hoofdstad: "Den Haag",         steden: ["Rotterdam", "Leiden", "Delft", "Dordrecht", "Gouda"] },
  { naam: "Zeeland",        hoofdstad: "Middelburg",       steden: ["Vlissingen", "Goes", "Terneuzen"] },
  { naam: "Noord-Brabant",  hoofdstad: "'s-Hertogenbosch", steden: ["Eindhoven", "Tilburg", "Breda", "Helmond"] },
  { naam: "Limburg",        hoofdstad: "Maastricht",       steden: ["Venlo", "Heerlen", "Roermond", "Sittard"] }
];

// Landen van Europa met hun hoofdstad
const europa = [
  { land: "Nederland",          hoofdstad: "Amsterdam" },
  { land: "België",             hoofdstad: "Brussel" },
  { land: "Luxemburg",          hoofdstad: "Luxemburg" },
  { land: "Duitsland",          hoofdstad: "Berlijn" },
  { land: "Frankrijk",          hoofdstad: "Parijs" },
  { land: "Verenigd Koninkrijk", hoofdstad: "Londen" },
  { land: "Ierland",            hoofdstad: "Dublin" },
  { land: "Spanje",             hoofdstad: "Madrid" },
  { land: "Portugal",           hoofdstad: "Lissabon" },
  { land: "Italië",             hoofdstad: "Rome" },
  { land: "Zwitserland",        hoofdstad: "Bern" },
  { land: "Oostenrijk",         hoofdstad: "Wenen" },
  { land: "Denemarken",         hoofdstad: "Kopenhagen" },
  { land: "Noorwegen",          hoofdstad: "Oslo" },
  { land: "Zweden",             hoofdstad: "Stockholm" },
  { land: "Finland",            hoofdstad: "Helsinki" },
  { land: "IJsland",            hoofdstad: "Reykjavik" },
  { land: "Polen",              hoofdstad: "Warschau" },
  { land: "Tsjechië",           hoofdstad: "Praag" },
  { land: "Slowakije",          hoofdstad: "Bratislava" },
  { land: "Hongarije",          hoofdstad: "Boedapest" },
  { land: "Slovenië",           hoofdstad: "Ljubljana" },
  { land: "Kroatië",            hoofdstad: "Zagreb" },
  { land: "Servië",             hoofdstad: "Belgrado" },
  { land: "Roemenië",           hoofdstad: "Boekarest" },
  { land: "Bulgarije",          hoofdstad: "Sofia" },
  { land: "Griekenland",        hoofdstad: "Athene" },
  { land: "Oekraïne",           hoofdstad: "Kyiv" },
  { land: "Estland",            hoofdstad: "Tallinn" },
  { land: "Letland",            hoofdstad: "Riga" },
  { land: "Litouwen",           hoofdstad: "Vilnius" }
];
