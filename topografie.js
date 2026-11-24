// =====topografie.js: de computer maakt zelf de vragen! =====

// Pak één willekeurig ding uit een lijst
 function pakEen(lijst) {
   return lijst[willekeurig(0, lijst.length - 1)];
 }

 // Maak een lijst met één vakje uit elk object
// Voorbeeld: lijsVan(provincies, "hoofdstad") geef ["Groningen", "Leeuwarden", ...]
function lijstVan(lijst, vakje) {
    const uitkomst = [];
    for (let i = 0; i < lijst.length; i++) {
        uitkomst.push(lijst[i][vakje]);
    }
    return uitkomst;
}

// Maak een meerkeuzevraag: het goede antwoord + 3 foute, door elkaar
function maakKeuzevraag(vraag, goedAntwoord, alleAntwoorden, uitleg) {
    const keuzes = [goedAntwoord];
    while (keuzes.length < 4) {
        const fout = pakEen(alleAntwoorden);
        if (!keuzes.includes(fout)) {
            keuzes.push(fout);
        }
    }
    const gehusseld = husselen(keuzes);
    return {
        vraag: vraag,
        keuzes: gehusseld,
        goed: gehusseld.indexOf(goedAntwoord),
        uitleg: uitleg
    };
}

// ---------- De vragenmakers ----------
function vraagHoofdstadProvincie() {
    const p = pakEen(provincies);
    return maakKeuzevraag(
        "Wat is de hoofdstad van de provincie " + p.naam + "?",
        p.hoofdstad,
        lijstVan(provincies, "hoofdstad"),
        p.hoofdstad + " is de hoofdstad van " + p.naam + "."
    );
}

function vraagStadInProvincie() {
    const p = pakEen(provincies);
    const stad = pakEen(p.steden);
    return maakKeuzevraag(
        "In welke provincie ligt " + stad + "?",
        p.naam,
        lijstVan(provincies, "naam"),
        stad + " ligt in " + p.naam + ". De hoofdstad daarvan is " + p.hoofdstad + "."
    );
}

function vraagHoofdstadLand() {
    const l = pakEen(europa);
    return maakKeuzevraag(
        "Wat is de hoofdstad van " + l.land + "?",
        l.hoofdstad,
        lijstVan(europa, "hoofdstad"),
        l.hoofdstad + " is de hoofdstad van " + l.land + "."
    );
}

function vraagLandBijHoofdstad() {
    const l = pakEen(europa);
    return maakKeuzevraag(
        "Van welk land is " + l.hoofdstad + " de hoofdstad?",
        l.land,
        lijstVan(europa, "land"),
        l.hoofdstad + " is de hoofdstad van " + l.land + "."
    );
}

function maakTopoVraag() {
    let soort = document.getElementById("soort-topografie").value;
    if (soort === "mix") {
        soort = pakEen(["provincie-hoofdstad", "provincie-stad", "europa-hoofdstad", "europa-land"]);
    }
    if (soort === "provincie-hoofdstad") {
        return vraagHoofdstadProvincie();
    }
    if (soort === "provincie-stad") {
        return vraagStadInProvincie();
    }
    if (soort === "europa-hoofdstad") {
        return vraagHoofdstadLand();
    }
    return vraagLandBijHoofdstad();
}

// ---------- 10 verschillende vragen maken en de quiz starten ----------
function bestaatAl(vragen, tekst) {
    for (let i = 0; i < vragen.length; i++) {
        if (vragen[i].vraag === tekst) {
            return true;
        }
    }
    return false;
}

function startTopografie() {
    const vragen = [];
    while (vragen.length < 10) {
        const nieuw = maakTopoVraag();
        if (!bestaatAl(vragen, nieuw.vraag)) {
            vragen.push(nieuw);
        }
    }
    startQuiz("topografie", vragen);
}
