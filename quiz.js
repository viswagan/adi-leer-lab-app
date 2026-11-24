// ===== quiz.js: meerkeuzevragen (voorlezen én geschiedenis) =====

let quizVak = "";
let quizVragen = [];
let quizNummer = 0
let quizGoed = 0;

function startQuiz(vak, vragen) {
    quizVak = vak;
    quizVragen = vragen;
    quizNummer = 0;
    quizGoed = 0;
    toonQuizVraag();
}

function toonQuizVraag() {
    const vraag = quizVragen[quizNummer];
    document.getElementById("vraag-" + quizVak).textContent =
        "Vraag " + (quizNummer + 1) + " van " + quizVragen.length + ": " + vraag.vraag;
    document.getElementById("feedback-" + quizVak).textContent = "";

    const keuzes = document.getElementById("keuzes-" + quizVak);
    keuzes.innerHTML = "";
    for (let i = 0; i <vraag.keuzes.length; i++) {
        const knop = document.createElement("button");
        knop.textContent = vraag.keuzes[i];
        knop.className = "keuze";
        knop.onclick = function () {
            kiesAntwoord(i, knop);
        };
        keuzes.appendChild(knop);
    }
}

function kiesAntwoord(gekozen, knop) {
    const vraag = quizVragen[quizNummer];
    const feedback = document.getElementById("feedback-" + quizVak);
    const alleKnoppen = document.querySelectorAll("#keuzes-" + quizVak + " button");

    // Je mag maar één keer kiezen
    for (let i = 0; i < alleKnoppen.length; i++) {
        alleKnoppen[i].disabled = true;
    }

    if (gekozen === vraag.goed) {
        quizGoed = quizGoed + 1;
        knop.classList.add("goed");
        feedback.textContent = "✅ Goed! " + vraag.uitleg;
        feedback.className = "feedback goed";
        geefSter();
    } else {
        knop.classList.add("fout");
        alleKnoppen[vraag.goed].classList.add("goed");
        feedback.textContent = "❌ Jammer. " + vraag.uitleg;
        feedback.className = "feedback fout";
    }

    // Knop om door te gaan
    const verder = document.createElement("button");
    verder.textContent = "Volgende ➡️";
    verder.className = "keuze";
    verder.onclick = volgendeVraag;
    document.getElementById("keuzes-" + quizVak).appendChild(verder);
}

function volgendeVraag() {
    quizNummer = quizNummer + 1;
    if (quizNummer < quizVragen.length) {
        toonQuizVraag();
    } else {
        document.getElementById("vraag-" + quizVak).textContent =
            "🎉 Klaar! Je had er " + quizGoed + " van de " + quizVragen.length + " goed.";
        document.getElementById("feedback-" + quizVak).textContent = "";
        const keuzes = document.getElementById("keuzes-" + quizVak);
        keuzes.innerHTML = "";
        const opnieuw = document.createElement("button");
        opnieuw.textContent = "🔁 Nog een keer";
        opnieuw.className = "keuze";
        opnieuw.onclick = function () {
            toonScherm(quizVak);
        };
        keuzes.appendChild(opnieuw);
    }
}

// ---------- Dag 7: begrijpend lezen ----------
function toonTekstenLijst() {
    const lijst = document.getElementById("teksten-lijst");
    lijst.innerHTML = "<p>Kies een tekst:</p>";
    for (let i = 0; i < leesTeksten.length; i++) {
        const knop = document.createElement("button");
        knop.textContent = "📄 " + leesTeksten[i].titel;
        knop.className = "keuze";
        knop.onclick = function () {
            kiesTekst(i);
        };
        lijst.appendChild(knop);
    }
    document.getElementById("tekst-lezen").innerHTML = "";
    document.getElementById("vraag-lezen").textContent = "";
    document.getElementById("keuzes-lezen").innerHTML = "";
    document.getElementById("feedback-lezen").textContent = "";
}

function kiesTekst(nummer) {
    const gekozen = leesTeksten[nummer];
    document.getElementById("teksten-lijst").innerHTML = "";
    document.getElementById("tekst-lezen").innerHTML =
        "<h3>" + gekozen.titel + "</h3><p>" + gekozen.tekst + "</p>";
    startQuiz("lezen", gekozen.vragen);
}

// ---------- Dag 10: geschiedenis ----------
function husselen(lijst) {
    return lijst.slice().sort(function () {
        return Math.random() - 0.5;
    });
}

function startGeschiedenis() {
    const tienVragen = husselen(geschiedenisVragen).slice(0, 10);
    startQuiz("geschiedenis",tienVragen);
}

