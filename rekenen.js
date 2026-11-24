// ===== rekenen.js: sommen maken en nakijken =====

let huidigSom = null; // de som die nu op het scherm staat
let goedOpRij = 0;      // hoeveel goed achter elkaar

// Geef een willekurig heel vam min toot en met max
function willekeurig(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ---------- Dag 4: tafelsommen ----------
function maakTafelSom() {
    const a = willekeurig(1,30);
    const b = willekeurig(1,30);
    return { vraag: a +" x " + b + " =", antwoord: a *b };
}

// ------ Dag 6: meer soorten sommen ----------
function maakPlusMinSom() {
    const a = willekeurig(100, 999);
    const b = willekeurig(100, 999);
    if (willekeurig(1, 2) === 1) {
        return {vraag: a + " + " + b + " =", antwoord: a + b};
    }  else {
        return { vraag: a + " − " + b + " =", antwoord: a - b };
    }
  }

function maakKeerSom() {
    const a = willekeurig(11, 99);
    const b = willekeurig(2, 9);
    return { vraag: a + " × " + b + " =", antwoord: a * b };
}

function maakDeelSom() {
    const b = willekeurig(2, 10);
    const uitkomst = willekeurig(1, 10);
    const a = b * uitkomst;
    return {vraag: a + " : " + b + " =", antwoord: uitkomst};
}

function maakRekenSom() {
    let soort = document.getElementById("soort-rekenen").value;
    if (soort === "mix") {
        const soorten = ["tafels", "plusmin", "keer", "delen"];
        soort = soorten[willekeurig(0, soorten.length - 1)];
    }
    if (soort === "tafels") {
        return maakTafelSom();
    }
    if (soort === "plusmin") {
        return maakPlusMinSom();
    }
    if (soort === "keer") {
        return maakKeerSom();
    }
    return maakDeelSom();
}

// ---------- Dag 9: wiskunde -----------

// Maakt van 3.75 een mooi Nederlands getal: "3,75"
function mooiGetal(getal) {
    return String(Math.round(getal * 100) / 100).replace(".", ",");
}

function maakBreukSom() {
    const noemer = willekeurig(2, 10);
    const teller = willekeurig(1, noemer - 1);
    const keer = willekeurig(1, 10);
    const geheel = noemer * keer;
    return { vraag: teller + "/" + noemer + " van " + geheel + " =", antwoord: teller * keer };
}

function maakKommaSom() {
    const a = willekeurig(1, 99) / 10;
    const b = willekeurig(1, 99) / 10;
    return { vraag: mooiGetal(a) + " + " + mooiGetal(b) + " =", antwoord: a + b };
}

function maakProcentSom() {
    const procenten = [10, 20, 25, 50, 75];
    const p = procenten[willekeurig(0, procenten.length - 1)];
    const getal = willekeurig(1, 20) * 20;
    return { vraag: p + "% van " + getal + " =", antwoord: getal * p / 100 };
}

function maakMeetSom() {
    if (willekeurig(1, 2) === 1) {
        const meter = willekeurig(1, 20);
        return { vraag: meter + " m = ... cm", antwoord: meter * 100 };
    } else {
        const gram = willekeurig(1, 9) * 500;
        return { vraag: gram + " g = ... kg", antwoord: gram / 1000 };
    }
}

function maakOppervlakteSom() {
    const lengte = willekeurig(2, 12);
    const breedte = willekeurig(2, 9);
    if (willekeurig(1, 2) === 1) {
        return { vraag: "Rechthoek " + lengte + " m bij " + breedte + " m. Oppervlakte = ... m²", antwoord: lengte * breedte };
    } else {
        return { vraag: "Rechthoek " + lengte + " m bij " + breedte + " m. Omtrek = ... m", antwoord: 2 * (lengte + breedte) };
    }
}

function maakWiskundeSom() {
    let soort = document.getElementById("soort-wiskunde").value;
    if (soort === "mix") {
        const soorten = ["breuken", "komma", "procent", "meten", "oppervlakte"];
        soort = soorten[willekeurig(0, soorten.length - 1)];
    }
    if (soort === "breuken") {
        return maakBreukSom();
    }
    if (soort === "komma") {
        return maakKommaSom();
    }
    if (soort === "procent") {
        return maakProcentSom();
    }
    if (soort === "meten") {
        return maakMeetSom();
    }
    return maakOppervlakteSom();
}


// ---------- Een nieuwe op het scherm zetten ----------
function nieuweSom(vak) {
    if (vak === "rekenen") {
        huidigSom = maakRekenSom();
    } else {
        huidigSom = maakWiskundeSom();
    }
    document.getElementById("vraag-" + vak).textContent = huidigSom.vraag;
    const invoer = document.getElementById("antwoord-" + vak);
    invoer.value = "";
    invoer.focus();
}

// ---------- Nakijken ----------
function controleer(vak) {
    const invoer = document.getElementById("antwoord-" + vak);
    const feedback = document.getElementById("feedback-" + vak);
    if (invoer.value === "") {
        return;
    }
    const getypt = Number(invoer.value.replace(",", "."));
    if (Math.abs(getypt - huidigSom.antwoord) < 0.001) {
        goedOpRij = goedOpRij + 1;
        feedback.textContent = "✅ Goed zo! " + goedOpRij + " op een rij!";
        feedback.className = "feedback goed";
        geefSter();

        if (klok !== null) {
            uitdagingScore = uitdagingScore + 1;
        }
    } else {
        goedOpRij = 0;
        feedback.textContent = "❌ Helaas! Het goede antwoord was " + mooiGetal(huidigSom.antwoord);
        feedback.className = "feedback fout";
    }
    nieuweSom(vak);
}
