const sceltaCPU = document.querySelector(".scelta-cpu");
const scelteUtente = document.querySelectorAll(".scelta");
const messaggio = document.querySelector(".messaggio");
const giocaDiNuovo = document.querySelector(".gioca-di-nuovo")

scelteUtente.forEach(scelta => {
  scelta.addEventListener("click", giocataCPU);
})

giocaDiNuovo.addEventListener("click", resetGioco);

function giocataCPU(evento) {

  const sceltaUtente = evento.target.dataset.scelta; // carta, forbice o sasso
  const sceltePossibili = ["carta", "forbice", "sasso"];
  const mossaCPU = sceltePossibili[generaNumeroRandomico(0, sceltePossibili.length - 1)];

switch(mossaCPU) {
  case "carta":
    sceltaCPU.innerText = "✋";
    break;
  case "forbice":
    sceltaCPU.innerText = "✌";
    break;
  case "sasso":
    sceltaCPU.innerText = "✊";
    break;
  }

  determinaVittoria(sceltaUtente, mossaCPU);
  giocaDiNuovo.style.display = "block";
  scelteUtente.forEach(scelta => {
    scelta.disabled = "disabled";
  })

}

function generaNumeroRandomico(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function determinaVittoria(mossaUtente, mossaCPU) {
  if ((mossaUtente === "carta" && mossaCPU === "sasso") || (mossaUtente === "forbice" && mossaCPU === "carta") || (mossaUtente === "sasso" && mossaCPU === "forbice")) {
    messaggio.innerText = "Hai vinto! 🥳";
  } else if ((mossaUtente === "sasso" && mossaCPU === "carta") || (mossaUtente === "carta" && mossaCPU === "forbice") || (mossaUtente === "forbice" && mossaCPU === "sasso")) {
    messaggio.innerText = "La CPU ha vinto! 😢";
  } else {
    messaggio.innerText = "Pareggio! 😎";
  }
}

function resetGioco(event) {
  messaggio.innerText = "";
  sceltaCPU.innerText = "";
  giocaDiNuovo.style.display = "none";
  scelteUtente.forEach(scelta => {
    scelta.removeAttribute("disabled");
  })
}