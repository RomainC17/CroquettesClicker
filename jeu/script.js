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
let eauDecorationCost = 10;
let eauPurchased = false;
let distributeurDecorationCost = 10;
let distributeurPurchased = false;
let arbreDecorationCost = 10;
let arbrePurchased = false;
let coffreDecorationCost = 10;
let coffrePurchased = false;
let chemineeDecorationCost = 10;
let chemineePurchased = false;
let tableauDecorationCost = 10;
let tableauPurchased = false;
let nuitDecorationCost = 10;
let nuitPurchased = false;

// Mise à jour du score affiché
function updateScore() {
  document.getElementById("scoreTotal").textContent = "Croquettes totales : " + Math.floor(score);
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
    const fadeImage = document.getElementById("fadeImage");
    fadeImage.style.display = "block";
    fadeImage.style.zIndex = "5"; // S'assurer qu'elle est au-dessus
    fadeImage.classList.add("fade-in");
    showFadeImage();
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("eauDecoration").addEventListener("click", () => {
  if (!eauPurchased && score >= eauDecorationCost) {
    score -= eauDecorationCost;
    eauPurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("eauDecoration");
    showEauImage();
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("distributeurDecoration").addEventListener("click", () => {
  if (!distributeurPurchased && score >= distributeurDecorationCost) {
    score -= distributeurDecorationCost;
    distributeurPurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("distributeurDecoration");
    showDistributeurImage();
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("arbreDecoration").addEventListener("click", () => {
  if (!arbrePurchased && score >= arbreDecorationCost) {
    score -= arbreDecorationCost;
    arbrePurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("arbreDecoration");
    showArbreImage();
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("coffreDecoration").addEventListener("click", () => {
  if (!coffrePurchased && score >= coffreDecorationCost) {
    score -= coffreDecorationCost;
    coffrePurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("coffreDecoration");
    showCoffreImage();
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("chemineeDecoration").addEventListener("click", () => {
  if (!chemineePurchased && score >= chemineeDecorationCost) {
    score -= chemineeDecorationCost;
    chemineePurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("chemineeDecoration");
    showChemineeImage();
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("tableauDecoration").addEventListener("click", () => {
  if (!tableauPurchased && score >= tableauDecorationCost) {
    score -= tableauDecorationCost;
    tableauPurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("tableauDecoration");
    showTableauImage();
  }
});

// Activer l'effet des étoiles lors d'une amélioration
document.getElementById('nuitDecoration').addEventListener('click', () => {
  if (score >= nuitDecorationCost) {
    score -= nuitDecorationCost;
    nuitPurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("nuitDecoration");
    // Active l'effet des étoiles
    createStars();
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
  const eauButton = document.getElementById("eauDecoration");
  const distributeurButton = document.getElementById("distributeurDecoration");
  const arbreButton = document.getElementById("arbreDecoration");
  const coffreButton = document.getElementById("coffreDecoration");
  const chemineeButton = document.getElementById("chemineeDecoration");
  const tableauButton = document.getElementById("tableauDecoration");
  const nuitButton = document.getElementById("nuitDecoration");

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

  // Mise à jour du bouton Gamelle (décoration)
  eauButton.textContent = `Installer et remplir la gamelle d'eau (coût : ${eauDecorationCost} croquettes)`;
  if (eauPurchased || score < eauDecorationCost) {
    eauButton.classList.add("disabled");
    eauButton.disabled = true;
  } else {
    eauButton.classList.remove("disabled");
    eauButton.disabled = false;
  }

  // Mise à jour du bouton Gamelle (décoration)
  distributeurButton.textContent = `Placer un distributeur automatique (coût : ${distributeurDecorationCost} croquettes)`;
  if (distributeurPurchased || score < distributeurDecorationCost) {
    distributeurButton.classList.add("disabled");
    distributeurButton.disabled = true;
  } else {
    distributeurButton.classList.remove("disabled");
    distributeurButton.disabled = false;
  }

  // Mise à jour du bouton Gamelle (décoration)
  arbreButton.textContent = `Installer un arbre à chat (coût : ${arbreDecorationCost} croquettes)`;
  if (arbrePurchased || score < arbreDecorationCost) {
    arbreButton.classList.add("disabled");
    arbreButton.disabled = true;
  } else {
    arbreButton.classList.remove("disabled");
    arbreButton.disabled = false;
  }

  // Mise à jour du bouton Gamelle (décoration)
  coffreButton.textContent = `Placer un coffre de croquettes (coût : ${coffreDecorationCost} croquettes)`;
  if (coffrePurchased || score < coffreDecorationCost) {
    coffreButton.classList.add("disabled");
    coffreButton.disabled = true;
  } else {
    coffreButton.classList.remove("disabled");
    coffreButton.disabled = false;
  }

  // Mise à jour du bouton Gamelle (décoration)
  chemineeButton.textContent = `Installer une cheminée (coût : ${chemineeDecorationCost} croquettes)`;
  if (chemineePurchased || score < chemineeDecorationCost) {
    chemineeButton.classList.add("disabled");
    chemineeButton.disabled = true;
  } else {
    chemineeButton.classList.remove("disabled");
    chemineeButton.disabled = false;
  }

  // Mise à jour du bouton Gamelle (décoration)
  tableauButton.textContent = `Accrocher un tableau de famille (coût : ${tableauDecorationCost} croquettes)`;
  if (tableauPurchased || score < tableauDecorationCost) {
    tableauButton.classList.add("disabled");
    tableauButton.disabled = true;
  } else {
    tableauButton.classList.remove("disabled");
    tableauButton.disabled = false;
  }

  // Mise à jour du bouton Gamelle (décoration)
  nuitButton.textContent = `La nuit des chats (coût : ${nuitDecorationCost} croquettes)`;
  if (nuitPurchased || score < nuitDecorationCost) {
    nuitButton.classList.add("disabled");
    nuitButton.disabled = true;
  } else {
    nuitButton.classList.remove("disabled");
    nuitButton.disabled = false;
  }
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
    eauPurchased = data.eauPurchased || false;
    distributeurPurchased = data.distributeurPurchased || false;
    arbrePurchased = data.arbrePurchased || false;
    coffrePurchased = data.coffrePurchased || false;
    chemineePurchased = data.chemineePurchased || false;
    tableauPurchased = data.tableauPurchased || false;
    nuitPurchased = data.nuitPurchased || false;
    updateScore();
    updateButtons();
    if (gamellePurchased) {
      markAsPurchased("gamelleDecoration");
      showFadeImage();
    }
    if (eauPurchased) {
      markAsPurchased("eauDecoration");
      showEauImage();
    }
    if (distributeurPurchased) {
      markAsPurchased("distributeurDecoration");
      showDistributeurImage();
    }
    if (arbrePurchased) {
      markAsPurchased("arbreDecoration");
      showArbreImage();
    }
    if (coffrePurchased) {
      markAsPurchased("coffreDecoration");
      showCoffreImage();
    }
    if (chemineePurchased) {
      markAsPurchased("chemineeDecoration");
      showChemineeImage();
    }
    if (tableauPurchased) {
      markAsPurchased("tableauDecoration");
      showTableauImage();
    }
    if (nuitPurchased) {
      markAsPurchased("nuitDecoration");
      createStars();
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
    gamellePurchased: gamellePurchased,
    eauPurchased: eauPurchased,
    distributeurPurchased: distributeurPurchased,
    arbrePurchased: arbrePurchased,
    coffrePurchased: coffrePurchased,
    chemineePurchased: chemineePurchased,
    tableauPurchased: tableauPurchased,
    nuitPurchased: nuitPurchased
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
  eauPurchased = false;
  nuitPurchased = false;
  distributeurPurchased = false;
  arbrePurchased = false;
  coffrePurchased = false;
  chemineePurchased = false;
  tableauPurchased = false;
  updateScore();
  updateButtons();
}

// Charger le jeu au démarrage
loadGame();

// Ajouter des croquettes lorsqu'on clique sur l'image
document.getElementById("clickImage").addEventListener("click", (event) => {
  score++;
  updateScore();
  checkAchievements();
  updateButtons(); // Mettre à jour les boutons après chaque clic

  // Créer une nouvelle image temporaire
  const tempImage = document.createElement("img");
  tempImage.src = "images/Patte.png"; // Chemin vers l'image temporaire
  tempImage.alt = "Effet de clic";
  tempImage.classList.add("click-effect"); // Applique la classe pour l'animation

  // Positionner l'image temporaire à l'endroit du clic
  const x = event.clientX;
  const y = event.clientY;
  tempImage.style.left = `${x - 25}px`; // Centrer l'image par rapport au clic
  tempImage.style.top = `${y - 25}px`; // Ajuster pour que l'image soit au-dessus

  // Ajouter l'image au conteneur d'effets
  const container = document.getElementById("click-effects-container");
  container.appendChild(tempImage);

  // Supprimer l'image après l'animation (1 seconde ici)
  setTimeout(() => {
    console.log("Suppression de l'image");
    container.removeChild(tempImage);
  }, 1000);
});

let lastUpdateTime = Date.now(); // Pour calculer le temps écoulé

function animateScore() {
  const now = Date.now();
  const elapsedTime = now - lastUpdateTime; // Temps écoulé depuis la dernière mise à jour
  lastUpdateTime = now;

  // Ajoutez au score en fonction du temps écoulé et des croquettes par seconde
  score += (croquettesParSeconde * (elapsedTime / 1000));
  updateScore(); // Mettez à jour l'affichage en temps réel
  updateButtons();

  // Continuez la boucle d'animation
  requestAnimationFrame(animateScore);
}

// Démarrez l'animation lors du chargement de la page
animateScore();

// Fonction pour afficher une animation de fade quand une amélioration est achetée
function showFadeImage() {
  const bowlImage = document.getElementById("bowlImage");
  const bowlImageFilled = document.getElementById("fadeImage");

  bowlImage.style.display = "none"; // Cache l'image vide
  bowlImageFilled.style.display = "block"; // Affiche l'image remplie
}

// Fonction pour afficher une animation de fade quand une amélioration est achetée
function showEauImage() {
  const fadeImage = document.getElementById("EauImage");
  fadeImage.style.display = "block";
  fadeImage.classList.add("fade-in");
}

// Fonction pour afficher une animation de fade quand une amélioration est achetée
function showArbreImage() {
  const fadeImage = document.getElementById("arbreImage");
  fadeImage.style.display = "block";
  fadeImage.classList.add("fade-in");
}

// Fonction pour afficher une animation de fade quand une amélioration est achetée
function showDistributeurImage() {
  const fadeImage = document.getElementById("distributeurImage");
  fadeImage.style.display = "block";
  fadeImage.classList.add("fade-in");
}

// Fonction pour afficher une animation de fade quand une amélioration est achetée
function showCoffreImage() {
  const fadeImage = document.getElementById("coffreImage");
  fadeImage.style.display = "block";
  fadeImage.classList.add("fade-in");
}

// Fonction pour afficher une animation de fade quand une amélioration est achetée
function showChemineeImage() {
  const fadeImage = document.getElementById("chemineeImage");
  fadeImage.style.display = "block";
  fadeImage.classList.add("fade-in");
}

// Fonction pour afficher une animation de fade quand une amélioration est achetée
function showTableauImage() {
  const fadeImage = document.getElementById("tableauImage");
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

// Fonction pour créer les étoiles
function createStars() {
  const background = document.getElementById('background-stars');
  background.style.display = 'block'; // Rendre visible le fond noir
  console.log('createStars: display:', getComputedStyle(background).display);
  console.log('createStars: dimensions:', background.offsetWidth, background.offsetHeight);
  background.innerHTML = ''; // Réinitialise le contenu

  for (let i = 0; i < 100; i++) { // Nombre d'étoiles
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Position aléatoire
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    
    // Taille aléatoire
    const size = Math.random() * 3 + 1; // Entre 1px et 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    background.appendChild(star);
  }
}
// Référence au bouton de la roulette
const rouletteButton = document.getElementById("rouletteButton");

// Création de la pop-up HTML
const roulettePopup = document.createElement("div");
roulettePopup.id = "roulettePopup";
roulettePopup.innerHTML = `
  <button id="closePopupButton" class="close-popup">X</button>
  <p>Voulez-vous tenter votre chance ?</p>
  <p>Vous allez miser la TOTALITÉ de vos croquettes de façon ALÉATOIRE.</p>
  <p>*35% de chance de DOUBLER votre mise.</p>
  <p>*65% de chance de TOUT PERDRE.</p>
  <button id="choice1">Choix 1</button>
  <button id="choice2">Choix 2</button>
  <p id="popupMessage" style="margin-top: 10px; color: red;"></p>
`;

// Ajoute la pop-up au body
document.body.appendChild(roulettePopup);

// Références aux boutons de choix
let choice1Button = roulettePopup.querySelector("#choice1");
let choice2Button = roulettePopup.querySelector("#choice2");

// Fonction pour ouvrir la pop-up
function openRoulettePopup() {
  if (score > 0) {
    roulettePopup.style.display = "block";
  } else {
    alert("Vous n'avez pas assez de croquettes pour jouer !");
  }
}

// Fonction pour fermer la pop-up
function closeRoulettePopup() {
  roulettePopup.style.display = "none";

    // Réactiver les boutons de choix après fermeture
    choice1Button.disabled = false;
    choice2Button.disabled = false;
}

// Ajouter un événement à la croix pour fermer la pop-up
roulettePopup.addEventListener("click", (event) => {
  if (event.target.id === "closePopupButton") {
    closeRoulettePopup();
  }
});

// Gestion des boutons de choix
roulettePopup.addEventListener("click", (event) => {
  if (event.target.id === "choice1" || event.target.id === "choice2") {
    const bet = score; // Mise toutes les croquettes
    const result = Math.random(); // Génère un nombre aléatoire entre 0 et 1
    const message = document.getElementById("popupMessage");

    if (result < 0.65) {
      // L'utilisateur perd tout
      score = 0;
      message.textContent = "Vous avez perdu... dommage ! \n Fermeture...";
    } else {
      // L'utilisateur double sa mise
      score *= 2;
      message.textContent = `Bien joué ! Vous avez maintenant ${score} croquettes ! \n Fermeture...`;
    }

    updateScore(); // Met à jour l'affichage des scores
    // Désactiver les boutons de choix jusqu'à ce que la pop-up se ferme
    choice1Button.disabled = true;
    choice2Button.disabled = true;

    setTimeout(closeRoulettePopup, 2500); // Ferme la pop-up après 2 secondes
  }
});

// Ajout de l'événement au bouton de la roulette
rouletteButton.addEventListener("click", openRoulettePopup);

// Références aux éléments
const pariButton = document.getElementById("pariButton");
const mouseRacePopup = document.createElement("div");

// Création de la pop-up HTML
mouseRacePopup.id = "mouseRacePopup";
mouseRacePopup.innerHTML = `
  <button class="close-popup" id="closePopup">&times;</button>
  <h3>Pariez sur la course !</h3>
  <p id="bet-info">Remportez le total de vos croquettes multiplié par la côte en cas de victoire. Vous perdez TOUT en cas d'echec.</p>
  <div class="mouse-options">
    <button class="mouse-bet" data-mouse="1" data-odds="1.5">Chat (Cote: 1.5)</button>
    <button class="mouse-bet" data-mouse="2" data-odds="3">Chien (Cote: 3)</button>
    <button class="mouse-bet" data-mouse="3" data-odds="5">Souris (Cote: 5)</button>
  </div>
  <div id="race-track">
    <div class="mouse" id="mouse-1">🐱</div>
    <div class="mouse" id="mouse-2">🐶</div>
    <div class="mouse" id="mouse-3">🐭</div>
  </div>
  <p id="race-result" style="margin-top: 20px; color: red; background-color: white; font-weight: bold;"></p>
`;

document.body.appendChild(mouseRacePopup);

let isRaceRunning = false;

// Ouvre la pop-up
pariButton.addEventListener("click", () => {
  if (score <= 0) {
    alert("Vous n'avez pas assez de croquettes pour jouer !");
    return;
  }
  mouseRacePopup.style.display = "block";
  document.getElementById("race-result").textContent = ""; // Réinitialise le message
});

// Ferme la pop-up en cliquant sur la croix
document.getElementById("closePopup").addEventListener("click", () => {
  mouseRacePopup.style.display = "none";
});

// Fonction pour lancer la course
function startRace(selectedMouse, odds) {
  if (isRaceRunning) return;
  isRaceRunning = true;

  const mice = [
    { id: "mouse-1", speed: 0, chance: 50 }, // 50% chance
    { id: "mouse-2", speed: 0, chance: 30 }, // 30% chance
    { id: "mouse-3", speed: 0, chance: 20 }  // 20% chance
  ];

  const trackLength = document.getElementById("race-track").offsetWidth - 50;

  // Calcul des vitesses pondérées
  mice.forEach(mouse => {
    mouse.speed = Math.random() * (mouse.chance / 100) * 25 + 15; // Ajuste les vitesses
  });

  // Course
  const interval = setInterval(() => {
    mice.forEach(mouse => {
      const mouseElement = document.getElementById(mouse.id);
      const currentLeft = parseFloat(window.getComputedStyle(mouseElement).left || 0);
      mouseElement.style.left = `${currentLeft + mouse.speed}px`;
    });

    // Vérifie si un participant a gagné
    const winner = mice.find(mouse => {
      const mouseElement = document.getElementById(mouse.id);
      const currentLeft = parseFloat(window.getComputedStyle(mouseElement).left || 0);
      return currentLeft >= trackLength;
    });

    if (winner) {
      clearInterval(interval);
      isRaceRunning = false;

      const winnerId = winner.id;
      const selectedId = `mouse-${selectedMouse}`;
      const raceResult = document.getElementById("race-result");

      const bet = score; // Mise totale
      if (winnerId === selectedId) {
        const winAmount = Math.floor(bet * odds[selectedMouse - 1]);
        raceResult.textContent = `Bravo ! ${winnerId === "mouse-1" ? "Le chat" : winnerId === "mouse-2" ? "Le chien" : "La souris"} a gagné ! Vous êtes à ${winAmount} croquettes maintenant.`;
        score = winAmount;
      } else {
        raceResult.textContent = `Dommage, vous avez perdu. ${winnerId === "mouse-1" ? "Le chat" : winnerId === "mouse-2" ? "Le chien" : "La souris"} a gagné.`;
        score = 0;
      }

      updateScore();
      resetRace();
    }
  }, 50); // Réduction de l'intervalle pour une course plus rapide
}

// Réinitialise la course
function resetRace() {
  document.querySelectorAll(".mouse").forEach(mouse => {
    mouse.style.left = "0px";
  });
}

// Gestion des paris
document.querySelectorAll(".mouse-bet").forEach(button => {
  button.addEventListener("click", () => {
    if (isRaceRunning) return;

    const selectedMouse = parseInt(button.dataset.mouse);
    const odds = [1.5, 3, 5];
    const bet = score;

    if (bet <= 0) {
      alert("Vous n'avez pas assez de croquettes pour jouer !");
      return;
    }

    const raceResult = document.getElementById("race-result");
    raceResult.textContent = `Vous misez ${bet} croquettes sur ${selectedMouse === 1 ? "le chat" : selectedMouse === 2 ? "le chien" : "la souris"} (Cote : ${odds[selectedMouse - 1]}). La course commence !`;

    startRace(selectedMouse, odds);
  });
});

/******************************************************************/
// Références et création de la pop-up
const habiliteButton = document.getElementById("habiliteButton");
const skillPopup = document.createElement("div");

skillPopup.id = "skillPopup";
skillPopup.innerHTML = `
  <button class="close-popup">&times;</button>
  <h3>Testez votre habilité croquette !</h3>
  <p>Réussissez 3 fois de suite pour ajouter 10% à vos croquettes totales !<p>
  <div id="skill-bar-container">
    <div id="moving-bar"></div>
    <div id="target-zone"></div>
  </div>
  <p id="feedback">Appuyez sur "Espace" pour arrêter la barre dans la zone !</p>
  <button id="startSkillCheck">Commencer</button>
`;

document.body.appendChild(skillPopup);

const closePopupButton = skillPopup.querySelector(".close-popup");
const startButton = skillPopup.querySelector("#startSkillCheck");
const movingBar = skillPopup.querySelector("#moving-bar");
const targetZone = skillPopup.querySelector("#target-zone");
const feedback = skillPopup.querySelector("#feedback");

let intervalId;
let direction = 1;
let position = 0;
let scoreSkill = 0; // Score des réussites consécutives
let isRunning = false;

// Ouvrir la pop-up
habiliteButton.addEventListener("click", () => {
  skillPopup.style.display = "block";
});

// Fermer la pop-up
closePopupButton.addEventListener("click", () => {
  skillPopup.style.display = "none";
  resetSkillCheck();
});

// Fonction pour démarrer le jeu
startButton.addEventListener("click", () => {
  if (isRunning) return;
  isRunning = true;
  scoreSkill = 0;
  feedback.textContent = "Appuyez sur Espace pour arrêter la barre dans la zone !";
  startButton.disabled = true; // Désactiver le bouton de démarrage pendant la partie
  generateTargetZone();
  startMovingBar();
});

// Fonction pour réinitialiser le jeu
function resetSkillCheck() {
  clearInterval(intervalId);
  movingBar.style.left = "0%";
  targetZone.style.left = "0%";
  isRunning = false;
  feedback.textContent = "";
  startButton.disabled = false; // Réactiver le bouton de démarrage
}

// Fonction pour déplacer la barre rouge
function startMovingBar() {
  intervalId = setInterval(() => {
    position += direction; // Ajuste la vitesse de déplacement
    if (position >= 100) {
      position = 100;
      direction = -1; // Inverse la direction
      generateTargetZone(); // Crée une nouvelle zone au retour
    } else if (position <= 0) {
      position = 0;
      direction = 1; // Inverse la direction
    }
    movingBar.style.left = `${position}%`;
  }, 16); // Fréquence de mise à jour
}

// Fonction pour générer une zone cible aléatoire
function generateTargetZone() {
  const zoneStart = Math.random() * 70; // Position de départ entre 0% et 70%
  const zoneWidth = 7; // Largeur de la zone en pourcentage
  targetZone.style.left = `${zoneStart}%`;
  targetZone.style.width = `${zoneWidth}%`;
}

// Vérifier si l'utilisateur appuie sur "Espace"
document.addEventListener("keydown", (event) => {
  if (!isRunning || event.code !== "Space") return;

  const barPosition = movingBar.getBoundingClientRect();
  const zonePosition = targetZone.getBoundingClientRect();

  // Vérifie si la barre rouge est dans la zone verte
  if (
    barPosition.left >= zonePosition.left &&
    barPosition.right <= zonePosition.right
  ) {
    scoreSkill++;
    feedback.textContent = `Bien joué ! (${scoreSkill}/3)`;
    if (scoreSkill === 3) {
      clearInterval(intervalId); // Arrête la barre rouge
      feedback.textContent = "Bravo ! Vous avez gagné ! +10% de croquettes.";
      score += Math.floor(score * 0.1); // Ajout de 10% au score global
      updateScore(); // Fonction existante pour mettre à jour l'affichage
      isRunning = false; // Met le jeu en pause
      startButton.disabled = false; // Réactiver le bouton de démarrage
    } else {
      generateTargetZone(); // Génère une nouvelle zone après un succès
    }
  } else {
    feedback.textContent = "Raté ! Vous recommencez à zéro.";
    scoreSkill = 0;
    generateTargetZone();
  }
});

// Liste initiale des succès
const achievements = [
  { id: 1, title: "Premier clic", description: "Cliquez pour la première fois.", image: "images/Patte.png", unlocked: false },
  { id: 9, title: "100 croquettes", description: "Obtenez 100 croquettes.", image: "images/Coffre.png", unlocked: false },
  { id: 10, title: "500 croquettes", description: "Obtenez 500 croquettes.", image: "images/Coffre.png", unlocked: false },
  { id: 11, title: "10 000 croquettes", description: "Obtenez 10 000 croquettes.", image: "images/Coffre.png", unlocked: false },
  { id: 12, title: "100 000 croquettes", description: "Obtenez 100 000 croquettes.", image: "images/Coffre.png", unlocked: false },
  { id: 13, title: "250 000 croquettes", description: "Obtenez 250 000 croquettes.", image: "images/Coffre.png", unlocked: false },
  { id: 14, title: "500 000 croquettes", description: "Obtenez 500 000 croquettes.", image: "images/Coffre.png", unlocked: false },
  { id: 15, title: "999 999 croquettes", description: "Obtenez 999 999 croquettes.", image: "images/Coffre.png", unlocked: false },
  { id: 16, title: "1 500 000 croquettes", description: "Obtenez 1 500 000 croquettes.", image: "images/Coffre.png", unlocked: false },
  { id: 17, title: "1 CPS", description: "Atteignez 1 croquette par seconde.", image: "images/Eau.png", unlocked: false },
  { id: 18, title: "50 CPS", description: "Atteignez 50 croquettes par seconde.", image: "images/Eau.png", unlocked: false },
  { id: 19, title: "1 500 CPS", description: "Atteignez 1 500 croquettes par seconde.", image: "images/Eau.png", unlocked: false },
  { id: 20, title: "3 000 CPS", description: "Atteignez 3 000 croquettes par seconde.", image: "images/Eau.png", unlocked: false },
  { id: 21, title: "5 000 CPS", description: "Atteignez 5 000 croquettes par seconde.", image: "images/Eau.png", unlocked: false },
  { id: 22, title: "7 500 CPS", description: "Atteignez 7 500 croquettes par seconde.", image: "images/Eau.png", unlocked: false },
  { id: 23, title: "10 000 CPS", description: "Atteignez 10 000 croquettes par seconde.", image: "images/Eau.png", unlocked: false },
  { id: 24, title: "50 000 CPS", description: "Atteignez 50 000 croquettes par seconde.", image: "images/Eau.png", unlocked: false },
];

// Charger les succès depuis le localStorage
function loadAchievements() {
  const savedAchievements = JSON.parse(localStorage.getItem("achievements"));
  if (savedAchievements) {
    achievements.forEach((achievement) => {
      const saved = savedAchievements.find((a) => a.id === achievement.id);
      if (saved) achievement.unlocked = saved.unlocked;
    });
  }
}

// Sauvegarder les succès dans le localStorage
function saveAchievements() {
  localStorage.setItem("achievements", JSON.stringify(achievements));
}

// Référence au bouton et création de la pop-up
const successButton = document.getElementById("successButton");
const successPopup = document.createElement("div");
successPopup.id = "successPopup";
successPopup.innerHTML = `
  <button class="close-popup">&times;</button>
  <h3>Succès</h3>
  <h5>Si la liste n'est pas à jour, cliquez une fois sur le chat au milieu pour actualiser<h5>
  <div class="success-list"></div>
`;
document.body.appendChild(successPopup);

const successList = successPopup.querySelector(".success-list");

// Fonction pour afficher les succès
function renderAchievements() {
  successList.innerHTML = ""; // Réinitialise la liste
  achievements.forEach((achievement) => {
    const card = document.createElement("div");
    card.className = `success-card ${achievement.unlocked ? "unlocked" : ""}`;
    card.innerHTML = `
      <img src="${achievement.image}" alt="${achievement.title}">
      <div class="tooltip">${achievement.description}</div>
    `;
    successList.appendChild(card);
  });
}

// Notifications de succès
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification show";
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.remove("show");
    document.body.removeChild(notification);
  }, 3000);
}

// Débloquer un succès
function unlockAchievement(id) {
  const achievement = achievements.find((ach) => ach.id === id);
  if (achievement && !achievement.unlocked) {
    achievement.unlocked = true;
    showNotification(`Succès débloqué : ${achievement.title}`);
    renderAchievements();
    saveAchievements(); // Sauvegarde après déblocage
  }
}

// Vérifier les conditions des succès
function checkAchievements() {
  if (score >= 1) unlockAchievement(1); // Premier clic
  if (score >= 100) unlockAchievement(9); // 100 croquettes
  if (score >= 500) unlockAchievement(10); // 100 croquettes
  if (score >= 10000) unlockAchievement(11); // 100 croquettes
  if (score >= 100000) unlockAchievement(12); // 100 croquettes
  if (score >= 250000) unlockAchievement(13); // 100 croquettes
  if (score >= 500000) unlockAchievement(14); // 100 croquettes
  if (score >= 999999) unlockAchievement(15); // 100 croquettes
  if (score >= 1500000) unlockAchievement(16); // 100 croquettes
  if (croquettesParSeconde >= 1) unlockAchievement(17); // 1 CPS
  if (croquettesParSeconde >= 50) unlockAchievement(18); // 1 CPS
  if (croquettesParSeconde >= 1500) unlockAchievement(19); // 1 CPS
  if (croquettesParSeconde >= 3000) unlockAchievement(20); // 1 CPS
  if (croquettesParSeconde >= 5000) unlockAchievement(21); // 1 CPS
  if (croquettesParSeconde >= 7500) unlockAchievement(22); // 1 CPS
  if (croquettesParSeconde >= 10000) unlockAchievement(23); // 1 CPS
  if (croquettesParSeconde >= 50000) unlockAchievement(24); // 1 CPS
}

// Événement pour afficher la pop-up
successButton.addEventListener("click", () => {
  successPopup.style.display = "block";
  renderAchievements();
});

// Fermeture de la pop-up via la croix
successPopup.querySelector(".close-popup").addEventListener("click", () => {
  successPopup.style.display = "none";
});

// Charger les succès au démarrage
loadAchievements();

// Référence au bouton et création de la pop-up
const creditsGameButton = document.getElementById("creditsGameButton");
const creditsGamePopup = document.createElement("div");
creditsGamePopup.id = "creditsGamePopup";
creditsGamePopup.innerHTML = `
  <button class="close-popup">&times;</button>
  <h3>Crédits</h3>
  <h5>Développeur : Griffon<h5>
  <h5>Testeuse : Maggie<h5>
  <h5>Bande son : Fabrice Tonnellier. Les droits d'utilisation m'ont été donné pour le jeu CroquettesClicker.<h5>
  <h5>Images : Toutes les images utilisées ont été crées tout ou partie, par l'intelligence artificielle. Pour les images ayant été générées partiellement par l'intelligence artificielle, je détiens les droits sur les photos d'origine. <h5>
`;
document.body.appendChild(creditsGamePopup);

// Événement pour afficher la pop-up
creditsGameButton.addEventListener("click", () => {
  creditsGamePopup.style.display = "block";
});

// Fermeture de la pop-up via la croix
creditsGamePopup.querySelector(".close-popup").addEventListener("click", () => {
  creditsGamePopup.style.display = "none";
});