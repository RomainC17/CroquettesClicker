// Variables de coût et état d'achat
const { ipcRenderer } = require('electron');
let score = 0;
let croquettesParSeconde = 0;
let maitresseCroquettesCost = 2;
let sacCroquettesCost = 10;
let colisCroquettesCost = 100;
let champCroquettesCost = 1500;
let mineCroquettesCost = 5000;
let usineCroquettesCost = 15000;
let convoiCroquettesCost = 30000;
let affretementCroquettesCost = 100000;
let teleporteurCroquettesCost = 165000;
let developpeurCroquettesCost = 215000;
let cgmCroquettesCost = 350000;
let patrouilleCroquettesCost = 500000;
let continentCroquettesCost = 750000;
let planeteCroquettesCost = 1200000;
let galaxieCroquettesCost = 1750000;
let trouNoirCroquettesCost = 10000000;

let gamelleDecorationCost = 100;
let gamellePurchased = false;

const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

const backgroundMusic = new Audio('sons/Fabrice-Tonnellier.mp3');
backgroundMusic.volume = 0.2; // Volume réduit pour ne pas gêner
backgroundMusic.loop = true; // Boucle
backgroundMusic.play();


// Mise à jour du score affiché
function updateScore() {
  document.getElementById("scoreTotal").textContent = "Croquettes totales : " + score;
  document.getElementById("scoreSeconde").textContent = "Croquettes par seconde : " + croquettesParSeconde;
}

// Fonction pour gérer l'achat d'une maitresse
document.getElementById("maitresseCroquettes").addEventListener("click", () => {
  if (score >= maitresseCroquettesCost) {
    score -= maitresseCroquettesCost;
    croquettesParSeconde += 1;
    maitresseCroquettesCost = Math.floor(maitresseCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("sacCroquettes").addEventListener("click", () => {
  if (score >= sacCroquettesCost) {
    score -= sacCroquettesCost;
    croquettesParSeconde += 3;
    sacCroquettesCost = Math.floor(sacCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un colis de croquettes
document.getElementById("colisCroquettes").addEventListener("click", () => {
  if (score >= colisCroquettesCost) {
    score -= colisCroquettesCost;
    croquettesParSeconde += 5;
    colisCroquettesCost = Math.floor(colisCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("champsCroquettes").addEventListener("click", () => {
  if (score >= champCroquettesCost) {
    score -= champCroquettesCost;
    croquettesParSeconde += 7;
    champCroquettesCost = Math.floor(champCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("minesCroquettes").addEventListener("click", () => {
  if (score >= mineCroquettesCost) {
    score -= mineCroquettesCost;
    croquettesParSeconde += 12;
    mineCroquettesCost = Math.floor(mineCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("usineCroquettes").addEventListener("click", () => {
  if (score >= usineCroquettesCost) {
    score -= usineCroquettesCost;
    croquettesParSeconde += 15;
    usineCroquettesCost = Math.floor(usineCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("convoiCroquettes").addEventListener("click", () => {
  if (score >= convoiCroquettesCost) {
    score -= convoiCroquettesCost;
    croquettesParSeconde += 17;
    convoiCroquettesCost = Math.floor(convoiCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("affretementCroquettes").addEventListener("click", () => {
  if (score >= affretementCroquettesCost) {
    score -= affretementCroquettesCost;
    croquettesParSeconde += 20;
    affretementCroquettesCost = Math.floor(affretementCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("teleporteurCroquettes").addEventListener("click", () => {
  if (score >= teleporteurCroquettesCost) {
    score -= teleporteurCroquettesCost;
    croquettesParSeconde += 25;
    teleporteurCroquettesCost = Math.floor(teleporteurCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("developpeurCroquettes").addEventListener("click", () => {
  if (score >= developpeurCroquettesCost) {
    score -= developpeurCroquettesCost;
    croquettesParSeconde += 29;
    developpeurCroquettesCost = Math.floor(developpeurCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("cgmCroquettes").addEventListener("click", () => {
  if (score >= cgmCroquettesCost) {
    score -= cgmCroquettesCost;
    croquettesParSeconde += 32;
    cgmCroquettesCost = Math.floor(cgmCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("patrouilleCroquettes").addEventListener("click", () => {
  if (score >= patrouilleCroquettesCost) {
    score -= patrouilleCroquettesCost;
    croquettesParSeconde += 35;
    patrouilleCroquettesCost = Math.floor(patrouilleCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("continentCroquettes").addEventListener("click", () => {
  if (score >= continentCroquettesCost) {
    score -= continentCroquettesCost;
    croquettesParSeconde += 40;
    continentCroquettesCost = Math.floor(continentCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("planeteCroquettes").addEventListener("click", () => {
  if (score >= planeteCroquettesCost) {
    score -= planeteCroquettesCost;
    croquettesParSeconde += 42;
    planeteCroquettesCost = Math.floor(planeteCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("galaxieCroquettes").addEventListener("click", () => {
  if (score >= galaxieCroquettesCost) {
    score -= galaxieCroquettesCost;
    croquettesParSeconde += 45;
    galaxieCroquettesCost = Math.floor(galaxieCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("trouNoirCroquettes").addEventListener("click", () => {
  if (score >= trouNoirCroquettesCost) {
    score -= trouNoirCroquettesCost;
    croquettesParSeconde += 100;
    trouNoirCroquettesCost = Math.floor(trouNoirCroquettesCost * 1.5);
    updateScore();
    updateButtons();
  }
});


// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("gamelleDecoration").addEventListener("click", () => {
  if (!gamellePurchased && score >= gamelleDecorationCost) {
    score -= gamelleDecorationCost;
    gamellePurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("gamelleDecoration");
    showFadeImage();
  }
});

// Fonction pour marquer un bouton comme acheté
function markAsPurchased(buttonId) {
  const button = document.getElementById(buttonId);
  button.classList.add("purchased");
}

// Fonction pour mettre à jour l'état des boutons en fonction du score
function updateButtons() {
  const maitresseCroquettesButton = document.getElementById("maitresseCroquettes");
  const sacCroquettesButton = document.getElementById("sacCroquettes");
  const colisCroquettesButton = document.getElementById("colisCroquettes");
  const champCroquettesButton = document.getElementById("champsCroquettes");
  const mineCroquettesButton = document.getElementById("minesCroquettes");
  const usineCroquettesButton = document.getElementById("usineCroquettes");
  const convoiCroquettesButton = document.getElementById("convoiCroquettes");
  const affretementCroquettesButton = document.getElementById("affretementCroquettes");
  const teleporteurCroquettesButton = document.getElementById("teleporteurCroquettes");
  const developpeurCroquettesButton = document.getElementById("developpeurCroquettes");
  const cgmCroquettesButton = document.getElementById("cgmCroquettes");
  const patrouilleCroquettesButton = document.getElementById("patrouilleCroquettes");
  const continentCroquettesButton = document.getElementById("continentCroquettes");
  const planeteCroquettesButton = document.getElementById("planeteCroquettes");
  const galaxieCroquettesButton = document.getElementById("galaxieCroquettes");
  const trouNoirCroquettesButton = document.getElementById("trouNoirCroquettes");

  const gamelleButton = document.getElementById("gamelleDecoration");

  // Mise à jour du bouton Sac de croquettes
  maitresseCroquettesButton.textContent = `Maîtresse (coût: ${maitresseCroquettesCost}) : +1 croq./sec`;
  if (score < maitresseCroquettesCost) {
    maitresseCroquettesButton.classList.add("disabled");
    maitresseCroquettesButton.disabled = true;
  } else {
    maitresseCroquettesButton.classList.remove("disabled");
    maitresseCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Sac de croquettes
  sacCroquettesButton.textContent = `Sac de croquettes (coût: ${sacCroquettesCost}) : +3 croq./sec`;
  if (score < sacCroquettesCost) {
    sacCroquettesButton.classList.add("disabled");
    sacCroquettesButton.disabled = true;
  } else {
    sacCroquettesButton.classList.remove("disabled");
    sacCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Colis de croquettes
  colisCroquettesButton.textContent = `Colis de croquettes (coût: ${colisCroquettesCost}) : +5 croq./sec`;
  if (score < colisCroquettesCost) {
    colisCroquettesButton.classList.add("disabled");
    colisCroquettesButton.disabled = true;
  } else {
    colisCroquettesButton.classList.remove("disabled");
    colisCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Champs de croquettes
  champCroquettesButton.textContent = `Champs de croquettes (coût: ${champCroquettesCost}) : +7 croq./sec`;
  if (score < champCroquettesCost) {
    champCroquettesButton.classList.add("disabled");
    champCroquettesButton.disabled = true;
  } else {
    champCroquettesButton.classList.remove("disabled");
    champCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  mineCroquettesButton.textContent = `Mine de croquettes (coût: ${mineCroquettesCost}) : +12 croq./sec`;
  if (score < mineCroquettesCost) {
    mineCroquettesButton.classList.add("disabled");
    mineCroquettesButton.disabled = true;
  } else {
    mineCroquettesButton.classList.remove("disabled");
    mineCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  usineCroquettesButton.textContent = `Usine (coût: ${usineCroquettesCost}) : +15 croq./sec`;
  if (score < usineCroquettesCost) {
    usineCroquettesButton.classList.add("disabled");
    usineCroquettesButton.disabled = true;
  } else {
    usineCroquettesButton.classList.remove("disabled");
    usineCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  convoiCroquettesButton.textContent = `Convoi exceptionnel (coût: ${convoiCroquettesCost}) : +17 croq./sec`;
  if (score < convoiCroquettesCost) {
    convoiCroquettesButton.classList.add("disabled");
    convoiCroquettesButton.disabled = true;
  } else {
    convoiCroquettesButton.classList.remove("disabled");
    convoiCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  affretementCroquettesButton.textContent = `Affrètement (coût: ${affretementCroquettesCost}) : +20 croq./sec`;
  if (score < affretementCroquettesCost) {
    affretementCroquettesButton.classList.add("disabled");
    affretementCroquettesButton.disabled = true;
  } else {
    affretementCroquettesButton.classList.remove("disabled");
    affretementCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  teleporteurCroquettesButton.textContent = `Téléporteur (coût: ${teleporteurCroquettesCost}) : +25 croq./sec`;
  if (score < teleporteurCroquettesCost) {
    teleporteurCroquettesButton.classList.add("disabled");
    teleporteurCroquettesButton.disabled = true;
  } else {
    teleporteurCroquettesButton.classList.remove("disabled");
    teleporteurCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  developpeurCroquettesButton.textContent = `Développeur (coût: ${developpeurCroquettesCost}) : +29 croq./sec`;
  if (score < developpeurCroquettesCost) {
    developpeurCroquettesButton.classList.add("disabled");
    developpeurCroquettesButton.disabled = true;
  } else {
    developpeurCroquettesButton.classList.remove("disabled");
    developpeurCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  cgmCroquettesButton.textContent = `C.G.M (coût: ${cgmCroquettesCost}) : +32 croq./sec`;
  if (score < cgmCroquettesCost) {
    cgmCroquettesButton.classList.add("disabled");
    cgmCroquettesButton.disabled = true;
  } else {
    cgmCroquettesButton.classList.remove("disabled");
    cgmCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  patrouilleCroquettesButton.textContent = `Patrouilles (coût: ${patrouilleCroquettesCost}) : +35 croq./sec`;
  if (score < patrouilleCroquettesCost) {
    patrouilleCroquettesButton.classList.add("disabled");
    patrouilleCroquettesButton.disabled = true;
  } else {
    patrouilleCroquettesButton.classList.remove("disabled");
    patrouilleCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  continentCroquettesButton.textContent = `Continent (coût: ${continentCroquettesCost}) : +40 croq./sec`;
  if (score < continentCroquettesCost) {
    continentCroquettesButton.classList.add("disabled");
    continentCroquettesButton.disabled = true;
  } else {
    continentCroquettesButton.classList.remove("disabled");
    continentCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  planeteCroquettesButton.textContent = `Planète (coût: ${planeteCroquettesCost}) : +42 croq./sec`;
  if (score < planeteCroquettesCost) {
    planeteCroquettesButton.classList.add("disabled");
    planeteCroquettesButton.disabled = true;
  } else {
    planeteCroquettesButton.classList.remove("disabled");
    planeteCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  galaxieCroquettesButton.textContent = `Galaxie (coût: ${galaxieCroquettesCost}) : +45 croq./sec`;
  if (score < galaxieCroquettesCost) {
    galaxieCroquettesButton.classList.add("disabled");
    galaxieCroquettesButton.disabled = true;
  } else {
    galaxieCroquettesButton.classList.remove("disabled");
    galaxieCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  trouNoirCroquettesButton.textContent = `Trou noir (coût: ${trouNoirCroquettesCost}) : +100 croq./sec`;
  if (score < trouNoirCroquettesCost) {
    trouNoirCroquettesButton.classList.add("disabled");
    trouNoirCroquettesButton.disabled = true;
  } else {
    trouNoirCroquettesButton.classList.remove("disabled");
    trouNoirCroquettesButton.disabled = false;
  }


  // Mise à jour du bouton Gamelle (décoration)
  gamelleButton.textContent = `Remplir la gamelle (coût : ${gamelleDecorationCost} croquettes)`;
  if (gamellePurchased || score < gamelleDecorationCost) {
    gamelleButton.classList.add("disabled");
    gamelleButton.disabled = true;
  } else {
    gamelleButton.classList.remove("disabled");
    gamelleButton.disabled = false;
  }
}

// Fonction pour afficher l'infobulle
function showTooltip(event) {
  const title = event.target.getAttribute("data-title");
  const description = event.target.getAttribute("data-description");

  tooltip.innerHTML = `<strong>${title}</strong><br>${description}`;
  tooltip.style.display = "block";

  const buttonRect = event.target.getBoundingClientRect();

  if (event.target.closest(".decoration-buttons")) {
    tooltip.style.left = `${buttonRect.right + 10}px`;
  } else {
    tooltip.style.left = `${buttonRect.left - tooltip.offsetWidth - 10}px`;
  }

  tooltip.style.top = `${buttonRect.top + window.scrollY + (buttonRect.height / 2) - (tooltip.offsetHeight / 2)}px`;
}

// Fonction pour masquer l'infobulle
function hideTooltip() {
  tooltip.style.display = "none";
}

// Ajouter les événements de survol aux boutons d'amélioration
document.querySelectorAll(".upgrade-buttons button, .decoration-buttons button").forEach(button => {
  button.addEventListener("mouseover", showTooltip);
  button.addEventListener("mousemove", showTooltip);
  button.addEventListener("mouseout", hideTooltip);
});

// Fonction pour ajouter les croquettes automatiquement
function autoCroquettes() {
  score += croquettesParSeconde;
  updateScore();
  updateButtons(); // Met à jour les boutons à chaque seconde
}

// Charger les données sauvegardées (si elles existent)
function loadGame() {
  const savedGame = localStorage.getItem("clickerGameSave");
  if (savedGame) {
    const data = JSON.parse(savedGame);
    score = data.score || 0;
    croquettesParSeconde = data.croquettesParSeconde || 0;
    maitresseCroquettesCost = data.maitresseCroquettesCost || 2;
    sacCroquettesCost = data.sacCroquettesCost || 10;
    colisCroquettesCost = data.colisCroquettesCost || 100;
    champCroquettesCost = data.champCroquettesCost || 1500;
    mineCroquettesCost = data.mineCroquettesCost || 5000;
    usineCroquettesCost = data.usineCroquettesCost || 15000;
    convoiCroquettesCost = data.convoiCroquettesCost || 30000;
    affretementCroquettesCost = data.affretementCroquettesCost || 100000;
    teleporteurCroquettesCost = data.teleporteurCroquettesCost || 165000;
    developpeurCroquettesCost = data.developpeurCroquettesCost || 215000;
    cgmCroquettesCost = data.cgmCroquettesCost || 350000;
    patrouilleCroquettesCost = data.patrouilleCroquettesCost || 500000;
    continentCroquettesCost = data.continentCroquettesCost || 750000;
    planeteCroquettesCost = data.planeteCroquettesCost || 1200000;
    galaxieCroquettesCost = data.galaxieCroquettesCost || 17500000;
    trouNoirCroquettesCost = data.trouNoirCroquettesCost || 10000000;
    gamellePurchased = data.gamellePurchased || false;
    updateScore();
    updateButtons();
    if (gamellePurchased) {
      markAsPurchased("gamelleDecoration");
      showFadeImage();
    }
  }
}

// Sauvegarder le jeu dans le localStorage
function saveGame() {
  const data = {
    score: score,
    croquettesParSeconde: croquettesParSeconde,
    maitresseCroquettesCost: maitresseCroquettesCost,
    sacCroquettesCost: sacCroquettesCost,
    colisCroquettesCost: colisCroquettesCost,
    champCroquettesCost: champCroquettesCost,
    mineCroquettesCost: mineCroquettesCost,
    usineCroquettesCost: usineCroquettesCost,
    convoiCroquettesCost: convoiCroquettesCost,
    affretementCroquettesCost: affretementCroquettesCost,
    teleporteurCroquettesCost: teleporteurCroquettesCost,
    developpeurCroquettesCost: developpeurCroquettesCost,
    cgmCroquettesCost: cgmCroquettesCost,
    patrouilleCroquettesCost: patrouilleCroquettesCost,
    continentCroquettesCost: continentCroquettesCost,
    planeteCroquettesCost: planeteCroquettesCost,
    galaxieCroquettesCost: galaxieCroquettesCost,
    trouNoirCroquettesCost: trouNoirCroquettesCost,
    gamellePurchased: gamellePurchased
  };
  localStorage.setItem("clickerGameSave", JSON.stringify(data));
}

// Sauvegarde périodique toutes les 5 secondes
setInterval(saveGame, 5000);

// Sauvegarder lorsque la page est fermée ou rechargée
window.addEventListener("beforeunload", saveGame);

// Réinitialiser le jeu (pour tester, par exemple)
function resetGame() {
  localStorage.removeItem("clickerGameSave");
  score = 0;
  croquettesParSeconde = 0;
  maitresseCroquettesCost = 2;
  sacCroquettesCost = 10;
  colisCroquettesCost = 100;
  champCroquettesCost = 1500;
  mineCroquettesCost = 5000;
  gamellePurchased = false;
  updateScore();
  updateButtons();
}

// Charger le jeu au démarrage
loadGame();

// Ajouter des croquettes lorsqu'on clique sur l'image
document.getElementById("clickImage").addEventListener("click", () => {
  score++;
  updateScore();
  updateButtons(); // Mettre à jour les boutons après chaque clic
});

// Appel de la fonction pour générer des croquettes par seconde
setInterval(autoCroquettes, 1000);

// Fonction pour afficher une animation de fade quand une amélioration est achetée
function showFadeImage() {
  const fadeImage = document.getElementById("fadeImage");
  fadeImage.style.display = "block";
  fadeImage.classList.add("fade-in");
}

window.onload = function() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen();
  }
};

// Écouter l'événement de la touche "Echap" pour fermer l'application
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    ipcRenderer.send("close-app");
  }
});

// Ajouter un écouteur sur le bouton "Quitter le jeu" pour fermer l'application
document.getElementById("quitButton").addEventListener("click", () => {
  ipcRenderer.send("close-app");
});