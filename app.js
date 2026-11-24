// ===== app.js: het hart van je Leer-lab =====

// ---------- Dag 3: schermen wisselen ----------
function toonScherm(naam) {
    const schermen = document.querySelectorAll(".scherm");
    for (let i = 0; i < schermen.length; i++) {
        schermen[i].classList.add("verborgen");
    }
    document.getElementById("scherm-" + naam).classList.remove("verborgen");
    // Dag 4: begin meteen met een som
    if (naam === "rekenen" || naam === "wiskunde") {
        nieuweSom(naam);
    }

    // Dag 7: laat de leesteksten zien
    if (naam === "lezen") {
        toonTekstenLijst();
    }
// Dag 10: start de geschiedenisQuiz
    if (naam === "geschiedenis") {
        startGeschiedenis();
    }


    // Dag 13: start de topografiequiz
    if (naam === "topografie") {
        startTopografie()
    }
    // Dag 12: laat je voortgang zien
    if (naam === "home") {
        toonVoortgang();
    }

}

// ---------- Dag 3: naam en begroeting ----------
function groet() {
    const uur = new Date().getHours();


    if (uur < 12) {
        return "Goedemorgen 🌅";
    }

    if (uur < 18) {
        return "Goedemiddag ☀️";
    }

    if (uur >= 18) {
        return "Goedenavond 🌆";
    }

    if (uur > 20) {
        return "He nachtuil, moet je niet slapen? 🦉";
    }



}

function vraagNaam() {
    let naam = localStorage.getItem("naam");
    if (naam === null) {
        naam = prompt("Hoi! Hoe heet jij?");
        if (naam === null || naam === "") {
            naam = "Slimmerik";
        }
        localStorage.setItem("naam", naam);
    }
    document.getElementById("naam").textContent = naam;
    //document.getElementById("begroeting").textContent =
    //    groet() + " " + naam + "! Wat ga je vandaag oefenen?";
}

// ---------- Dag 12: sterren bewaren, dagdoel en badges ----------
let voortgang = { sterren: 0, vandaag: 0, datum: "" };
const DAGDOEL = 20;

const badgeLijst = [
    { sterren: 10, naam: "🥉 Brons" },
    { sterren: 50, naam: "🥈 Zilver" },
    { sterren: 100, naam: "🥇 Goud" },
    { sterren: 250, naam: "💎 Diamant" },
    { sterren: 500, naam: "🏆 Kampioen" }
];

function laadVoortgang() {
    const bewaard = localStorage.getItem("voortgang");
    if (bewaard !== null) {
        voortgang = JSON.parse(bewaard);
    }
    const vandaag = new Date().toDateString();
    if (voortgang.datum !== vandaag) {
        voortgang.datum = vandaag;
        voortgang.vandaag = 0;
    }
}

function bewaarVoortgang() {
    localStorage.setItem("voortgang", JSON.stringify(voortgang));
}

function geefSter(vak) {
    voortgang.sterren = voortgang.sterren + 1;
    voortgang.vandaag = voortgang.vandaag + 1;
    bewaarVoortgang();
    toonVoortgang();
}

function toonVoortgang() {
    document.getElementById("sterren").textContent = "⭐ " + voortgang.sterren + " sterren";

    let tekst = "Dagdoel: " + voortgang.vandaag + " van de " + DAGDOEL + " sterren vandaag";
    if (voortgang.vandaag >= DAGDOEL) {
        tekst = "🎉 Dagdoel gehaald! " + voortgang.vandaag + " sterren vandaag!";
    }
    console.log(document.getElementById("dagdoel-tekst"))
    document.getElementById("dagdoel-tekst").textContent = tekst;

    const procent = Math.min(100, Math.round(voortgang.vandaag / DAGDOEL * 100));
    document.getElementById("dagdoel-balk").style.width = procent + "%";

    toonBadges();
}

function toonBadges() {
    let html = "";
    for (let i = 0; i < badgeLijst.length; i++) {
        const badge = badgeLijst[i];
        if (voortgang.sterren >= badge.sterren) {
            html = html + "<span class='badge'>" + badge.naam + "</span>";
        } else {
            html = html + "<span class='badge op-slot'>🔒 " + badge.sterren + " ⭐</span>";
        }
    }
    document.getElementById("badges").innerHTML = html;
}

// ---------- Start! ----------
function startApp() {
    vraagNaam();
    laadVoortgang();
    toonVoortgang();
}


window.onload = startApp;