// ===== uitdaging.js: hoeveel sommen haal jij in 1 minuut? =====

let klok = null;          // de stopwatch (null = staat uit)
let tijdOver = 0;
let uitdagingScore = 0;

function startUitdaging() {
    tijdOver = 60;
    uitdagingScore = 0;
    document.getElementById("timer").textContent = "⏱️ " + tijdOver + " seconden";
    nieuweSom("rekenen");

    clearInterval(klok);
    klok = setInterval(function () {
        tijdOver = tijdOver - 1;
        document.getElementById("timer").textContent = "⏱️ " + tijdOver + " seconden";
        if (tijdOver <= 0) {
            stopUitdaging();
        }
    }, 1000);
}

function stopUitdaging() {
    clearInterval(klok);
    klok = null;

    const record = Number(localStorage.getItem("record"));
    let bericht = "⏰ Tijd om! Je had er " + uitdagingScore + " goed.";
    if (uitdagingScore > record) {
        localStorage.setItem("record", uitdagingScore);
        bericht = bericht + " 🏆 NIEUW RECORD!";
    } else {
        bericht = bericht + " Jouw record is " + record + ".";
    }
    document.getElementById("timer").textContent = bericht;
}

