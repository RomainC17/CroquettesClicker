// Variables de coût et état d'achat
const { ipcRenderer } = require('electron');
let score = 0;
let croquettesParSeconde = 0;
let maitresseCroquettesCost = 2;
let sacCroquettesCost = 5;
let colisCroquettesCost = 50;
let champCroquettesCost = 500;
let mineCroquettesCost = 1500;
let usineCroquettesCost = 5000;
let convoiCroquettesCost = 10000;
let affretementCroquettesCost = 30000;
let teleporteurCroquettesCost = 50000;
let developpeurCroquettesCost = 75000;
let cgmCroquettesCost = 125000;
let patrouilleCroquettesCost = 200000;
let continentCroquettesCost = 350000;
let planeteCroquettesCost = 500000;
let galaxieCroquettesCost = 750000;
let trouNoirCroquettesCost = 2000000;

let maitresseCroquettesLevel = 0;
let sacCroquettesLevel = 0;
let colisCroquettesLevel = 0;
let champCroquettesLevel = 0;
let mineCroquettesLevel = 0;
let usineCroquettesLevel = 0;
let convoiCroquettesLevel = 0;
let affretementCroquettesLevel = 0;
let teleporteurCroquettesLevel = 0;
let developpeurCroquettesLevel = 0;
let cgmCroquettesLevel = 0;
let patrouilleCroquettesLevel = 0;
let continentCroquettesLevel = 0;
let planeteCroquettesLevel = 0;
let galaxieCroquettesLevel = 0;
let trouNoirCroquettesLevel = 0;

let gamelleDecorationCost = 500;
let gamellePurchased = false;
let jardinDecorationCost = 1; //50000;
let jardinPurchased = false;
let chambreDecorationCost = 1; //250000;
let chambrePurchased = false;
let restaurantDecorationCost = 1; //500000;
let restaurantPurchased = false;
let jetDecorationCost = 1; //2500000;
let jetPurchased = false;
let conferenceDecorationCost = 1; //10000000;
let conferencePurchased = false;
let famousDecorationCost = 1; //50000000;
let famousPurchased = false;
let nuitDecorationCost = 1; //100000000;
let nuitPurchased = false;

let reflexGameCost = 10000;
let reflexGamePurchased = false;

// Fonction pour formater les nombres
function formatNumber(num) {
  if (num >= 1e303) {
    return (num / 1e303).toFixed(2).replace('.00', '') + ' vigintillions';
  } else if (num >= 1e300) {
    return (num / 1e300).toFixed(2).replace('.00', '') + ' centillions';
  } else if (num >= 1e57) {
    return (num / 1e57).toFixed(2).replace('.00', '') + ' novemdécillions';
  } else if (num >= 1e54) {
    return (num / 1e54).toFixed(2).replace('.00', '') + ' octodécillions';
  } else if (num >= 1e51) {
    return (num / 1e51).toFixed(2).replace('.00', '') + ' septendécillions';
  } else if (num >= 1e48) {
    return (num / 1e48).toFixed(2).replace('.00', '') + ' sexdécillions';
  } else if (num >= 1e45) {
    return (num / 1e45).toFixed(2).replace('.00', '') + ' quindécillions';
  } else if (num >= 1e42) {
    return (num / 1e42).toFixed(2).replace('.00', '') + ' quattuordécillions';
  } else if (num >= 1e39) {
    return (num / 1e39).toFixed(2).replace('.00', '') + ' trédécillions';
  } else if (num >= 1e36) {
    return (num / 1e36).toFixed(2).replace('.00', '') + ' duodécillions';
  } else if (num >= 1e33) {
    return (num / 1e33).toFixed(2).replace('.00', '') + ' undécillions';
  } else if (num >= 1e30) {
    return (num / 1e30).toFixed(2).replace('.00', '') + ' décillions';
  } else if (num >= 1e27) {
    return (num / 1e27).toFixed(2).replace('.00', '') + ' nonillions';
  } else if (num >= 1e24) {
    return (num / 1e24).toFixed(2).replace('.00', '') + ' octillions';
  } else if (num >= 1e21) {
    return (num / 1e21).toFixed(2).replace('.00', '') + ' septillions';
  } else if (num >= 1e18) {
    return (num / 1e18).toFixed(2).replace('.00', '') + ' sextillions';
  } else if (num >= 1e15) {
    return (num / 1e15).toFixed(2).replace('.00', '') + ' quintillions';
  } else if (num >= 1e12) {
    return (num / 1e12).toFixed(2).replace('.00', '') + ' billiards';
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(2).replace('.00', '') + ' milliards';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2).replace('.00', '') + ' millions';
  } else if (num >= 1e3) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  } else {
    return num.toString();
  }
}


// Mise à jour du score affiché
function updateScore() {
  document.getElementById("scoreTotal").textContent = `Croquettes totales : ${formatNumber(Math.floor(score))}`;
  document.getElementById("scoreSeconde").textContent = `Croquettes par seconde : ${formatNumber(croquettesParSeconde)}`;
}

// Fonction pour gérer l'achat d'une maitresse
document.getElementById("maitresseCroquettes").addEventListener("click", () => {
  if (score >= maitresseCroquettesCost) {
    score -= maitresseCroquettesCost;
    croquettesParSeconde += 1;
    maitresseCroquettesCost = Math.floor(maitresseCroquettesCost * 1.5);
    maitresseCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (maitresseCroquettesLevel === 1) {
      unlockSteamAchievement("FIRST_OWNER");
    }

    if (maitresseCroquettesLevel === 50) {
      unlockSteamAchievement("OWNER_50");
    }

    if (maitresseCroquettesLevel === 100) {
      unlockSteamAchievement("OWNER_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("sacCroquettes").addEventListener("click", () => {
  if (score >= sacCroquettesCost) {
    score -= sacCroquettesCost;
    croquettesParSeconde += 3;
    sacCroquettesCost = Math.floor(sacCroquettesCost * 1.5);
    sacCroquettesLevel += 1;
    updateScore();
    updateButtons();

    if (sacCroquettesLevel === 1) {
      unlockSteamAchievement("BAG_FIRST");
    }

    if (sacCroquettesLevel === 50) {
      unlockSteamAchievement("BAG_50");
    }

    if (sacCroquettesLevel === 100) {
      unlockSteamAchievement("BAG_100");
    }
  }
});

// Fonction pour gérer l'achat d'un colis de croquettes
document.getElementById("colisCroquettes").addEventListener("click", () => {
  if (score >= colisCroquettesCost) {
    score -= colisCroquettesCost;
    croquettesParSeconde += 5;
    colisCroquettesCost = Math.floor(colisCroquettesCost * 1.5);
    colisCroquettesLevel += 1;
    updateScore();
    updateButtons();

    if (colisCroquettesLevel === 1) {
      unlockSteamAchievement("DELIVERY_FIRST");
    }

    if (colisCroquettesLevel === 50) {
      unlockSteamAchievement("DELIVERY_50");
    }

    if (colisCroquettesLevel === 100) {
      unlockSteamAchievement("DELIVERY_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("champsCroquettes").addEventListener("click", () => {
  if (score >= champCroquettesCost) {
    score -= champCroquettesCost;
    croquettesParSeconde += 7;
    champCroquettesCost = Math.floor(champCroquettesCost * 1.5);
    champCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (champCroquettesLevel === 1) {
      unlockSteamAchievement("FIELD_FIRST");
    }
    if (champCroquettesLevel === 50) {
      unlockSteamAchievement("FIELD_50");
    }
    if (champCroquettesLevel === 100) {
      unlockSteamAchievement("FIELD_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("minesCroquettes").addEventListener("click", () => {
  if (score >= mineCroquettesCost) {
    score -= mineCroquettesCost;
    croquettesParSeconde += 12;
    mineCroquettesCost = Math.floor(mineCroquettesCost * 1.5);
    mineCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (mineCroquettesLevel === 1) {
      unlockSteamAchievement("MINE_FIRST");
    }
    if (mineCroquettesLevel === 50) {
      unlockSteamAchievement("MINE_50");
    }
    if (mineCroquettesLevel === 100) {
      unlockSteamAchievement("MINE_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("usineCroquettes").addEventListener("click", () => {
  if (score >= usineCroquettesCost) {
    score -= usineCroquettesCost;
    croquettesParSeconde += 15;
    usineCroquettesCost = Math.floor(usineCroquettesCost * 1.5);
    usineCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (usineCroquettesLevel === 1) {
      unlockSteamAchievement("FACTORY_FIRST");
    }
    if (usineCroquettesLevel === 50) {
      unlockSteamAchievement("FACTORY_50");
    }
    if (usineCroquettesLevel === 100) {
      unlockSteamAchievement("FACTORY_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("convoiCroquettes").addEventListener("click", () => {
  if (score >= convoiCroquettesCost) {
    score -= convoiCroquettesCost;
    croquettesParSeconde += 17;
    convoiCroquettesCost = Math.floor(convoiCroquettesCost * 1.5);
    convoiCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (convoiCroquettesLevel === 1) {
      unlockSteamAchievement("CONVOY_FIRST");
    }
    if (convoiCroquettesLevel === 50) {
      unlockSteamAchievement("CONVOY_50");
    }
    if (convoiCroquettesLevel === 100) {
      unlockSteamAchievement("CONVOY_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("affretementCroquettes").addEventListener("click", () => {
  if (score >= affretementCroquettesCost) {
    score -= affretementCroquettesCost;
    croquettesParSeconde += 20;
    affretementCroquettesCost = Math.floor(affretementCroquettesCost * 1.5);
    affretementCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (affretementCroquettesLevel === 1) {
      unlockSteamAchievement("AIRPLANE_FIRST");
    }
    if (affretementCroquettesLevel === 50) {
      unlockSteamAchievement("AIRPLANE_50");
    }
    if (affretementCroquettesLevel === 100) {
      unlockSteamAchievement("AIRPLANE_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("teleporteurCroquettes").addEventListener("click", () => {
  if (score >= teleporteurCroquettesCost) {
    score -= teleporteurCroquettesCost;
    croquettesParSeconde += 25;
    teleporteurCroquettesCost = Math.floor(teleporteurCroquettesCost * 1.5);
    teleporteurCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (teleporteurCroquettesLevel === 1) {
      unlockSteamAchievement("TELEPORTER_FIRST");
    }
    if (teleporteurCroquettesLevel === 50) {
      unlockSteamAchievement("TELEPORTER_50");
    }
    if (teleporteurCroquettesLevel > 100) {
      unlockSteamAchievement("TELEPORTER_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("developpeurCroquettes").addEventListener("click", () => {
  if (score >= developpeurCroquettesCost) {
    score -= developpeurCroquettesCost;
    croquettesParSeconde += 29;
    developpeurCroquettesCost = Math.floor(developpeurCroquettesCost * 1.5);
    developpeurCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (developpeurCroquettesLevel === 1) {
      unlockSteamAchievement("DEVELOPER_FIRST");
    }
    if (developpeurCroquettesLevel === 50) {
      unlockSteamAchievement("DEVELOPER_50");
    }
    if (developpeurCroquettesLevel === 100) {
      unlockSteamAchievement("DEVELOPER_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("cgmCroquettes").addEventListener("click", () => {
  if (score >= cgmCroquettesCost) {
    score -= cgmCroquettesCost;
    croquettesParSeconde += 32;
    cgmCroquettesCost = Math.floor(cgmCroquettesCost * 1.5);
    cgmCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (cgmCroquettesLevel === 1) {
      unlockSteamAchievement("CGM_FIRST");
    }
    if (cgmCroquettesLevel === 50) {
      unlockSteamAchievement("CGM_50");
    }
    if (cgmCroquettesLevel === 100) {
      unlockSteamAchievement("CGM_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("patrouilleCroquettes").addEventListener("click", () => {
  if (score >= patrouilleCroquettesCost) {
    score -= patrouilleCroquettesCost;
    croquettesParSeconde += 35;
    patrouilleCroquettesCost = Math.floor(patrouilleCroquettesCost * 1.5);
    patrouilleCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (patrouilleCroquettesLevel === 1) {
      unlockSteamAchievement("PATROL_FIRST");
    }
    if (patrouilleCroquettesLevel === 50) {
      unlockSteamAchievement("PATROL_50");
    }
    if (patrouilleCroquettesLevel === 100) {
      unlockSteamAchievement("PATROL_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("continentCroquettes").addEventListener("click", () => {
  if (score >= continentCroquettesCost) {
    score -= continentCroquettesCost;
    croquettesParSeconde += 40;
    continentCroquettesCost = Math.floor(continentCroquettesCost * 1.5);
    continentCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (continentCroquettesLevel === 1) {
      unlockSteamAchievement("CONTINENT_FIRST");
    }
    if (continentCroquettesLevel === 50) {
      unlockSteamAchievement("CONTINENT_50");
    }
    if (continentCroquettesLevel === 100) {
      unlockSteamAchievement("CONTINENT_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("planeteCroquettes").addEventListener("click", () => {
  if (score >= planeteCroquettesCost) {
    score -= planeteCroquettesCost;
    croquettesParSeconde += 42;
    planeteCroquettesCost = Math.floor(planeteCroquettesCost * 1.5);
    planeteCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (planeteCroquettesLevel === 1) {
      unlockSteamAchievement("PLANET_FIRST");
    }
    if (planeteCroquettesLevel === 50) {
      unlockSteamAchievement("PLANET_50");
    }
    if (planeteCroquettesLevel === 100) {
      unlockSteamAchievement("PLANET_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("galaxieCroquettes").addEventListener("click", () => {
  if (score >= galaxieCroquettesCost) {
    score -= galaxieCroquettesCost;
    croquettesParSeconde += 45;
    galaxieCroquettesCost = Math.floor(galaxieCroquettesCost * 1.5);
    galaxieCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (galaxieCroquettesLevel === 1) {
      unlockSteamAchievement("STARS_FIRST");
    }
    if (galaxieCroquettesLevel === 50) {
      unlockSteamAchievement("STARS_50");
    }
    if (galaxieCroquettesLevel === 100) {
      unlockSteamAchievement("STARS_100");
    }
  }
});

// Fonction pour gérer l'achat d'un sac de croquettes
document.getElementById("trouNoirCroquettes").addEventListener("click", () => {
  if (score >= trouNoirCroquettesCost) {
    score -= trouNoirCroquettesCost;
    croquettesParSeconde += 100;
    trouNoirCroquettesCost = Math.floor(trouNoirCroquettesCost * 1.5);
    trouNoirCroquettesLevel += 1;
    updateScore();
    updateButtons();

    // Vérifier et débloquer le succès Steam
    if (trouNoirCroquettesLevel === 1) {
      unlockSteamAchievement("BLACK_FIRST");
    }
    if (trouNoirCroquettesLevel === 50) {
      unlockSteamAchievement("BLACK_50");
    }
    if (trouNoirCroquettesLevel === 100) {
      unlockSteamAchievement("BLACK_100");
    }
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
    changeBackgroundImage('images/FondDeux.png');
  }
});


function changeBackgroundImage(newImagePath) {
  document.body.style.background = `url('${newImagePath}') no-repeat center center`;
  document.body.style.backgroundSize = "cover";
}

function changeBackgroundVideo(videoPath) {
  // Vérifie si une vidéo de fond existe déjà, sinon crée-en une
  let videoElement = document.getElementById("backgroundVideo");
  if (!videoElement) {
    videoElement = document.createElement("video");
    videoElement.id = "backgroundVideo";
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true; // Pour éviter les problèmes de son
    videoElement.style.position = "fixed";
    videoElement.style.top = "0";
    videoElement.style.left = "0";
    videoElement.style.width = "100%";
    videoElement.style.height = "100%";
    videoElement.style.objectFit = "cover"; // Ajuste la vidéo pour qu'elle remplisse l'écran
    videoElement.style.zIndex = "-2"; // Place la vidéo derrière les autres éléments
    document.body.appendChild(videoElement);
  }

  // Change la source de la vidéo
  videoElement.src = videoPath;
  videoElement.play(); // Reprend la lecture au cas où la vidéo aurait été arrêtée
}

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("chambreDecoration").addEventListener("click", () => {
  if (!chambrePurchased && score >= chambreDecorationCost) {
    score -= chambreDecorationCost;
    chambrePurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("chambreDecoration");
    changeBackgroundVideo('images/FondChambre.mp4')
  }
});

// Fonction pour gérer l'achat du jardin
document.getElementById("jardinDecoration").addEventListener("click", () => {
  if (!jardinPurchased && score >= jardinDecorationCost) {
    score -= jardinDecorationCost;
    jardinPurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("jardinDecoration");
    changeBackgroundVideo('images/FondJardin.mp4');
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("restaurantDecoration").addEventListener("click", () => {
  if (!restaurantPurchased && score >= restaurantDecorationCost) {
    score -= restaurantDecorationCost;
    restaurantPurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("restaurantDecoration");
    changeBackgroundVideo('images/FondRestaurant.mp4')
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("jetDecoration").addEventListener("click", () => {
  if (!jetPurchased && score >= jetDecorationCost) {
    score -= jetDecorationCost;
    jetPurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("jetDecoration");
    changeBackgroundVideo('images/FondJet.mp4')
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("conferenceDecoration").addEventListener("click", () => {
  if (!conferencePurchased && score >= conferenceDecorationCost) {
    score -= conferenceDecorationCost;
    conferencePurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("conferenceDecoration");
    changeBackgroundVideo('images/FondConference.mp4')
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("famousDecoration").addEventListener("click", () => {
  if (!famousPurchased && score >= famousDecorationCost) {
    score -= famousDecorationCost;
    famousPurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("famousDecoration");
    changeBackgroundVideo('images/FondFamous.mp4')
  }
});

// Fonction pour gérer l'achat de la décoration de gamelle
document.getElementById("reflexButton").addEventListener("click", () => {
  if (!reflexGamePurchased && score >= reflexGameCost) {
    score -= reflexGameCost;
    reflexGamePurchased = true;
    updateScore();
    updateButtons();
    markAsPurchased("reflexButton");
    showReflexButtonHidden();
    unlockSteamAchievement("GAME_PAW");
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

document.getElementById('dailyRewardButton').addEventListener('click', claimDailyReward);

// Fonction pour vérifier la disponibilité de la récompense journalière
function checkDailyRewardAvailability() {
  const lastClaimed = localStorage.getItem('lastDailyReward');
  const today = new Date().toISOString().split('T')[0];
  const dailyRewardButton = document.getElementById('dailyRewardButton');

  if (lastClaimed === today) {
    dailyRewardButton.classList.remove('available');
    dailyRewardButton.classList.add('unavailable');
    dailyRewardButton.disabled = true;
  } else {
    dailyRewardButton.classList.remove('unavailable');
    dailyRewardButton.classList.add('available');
    dailyRewardButton.disabled = false;
  }
}

// Fonction pour récupérer la récompense journalière
function claimDailyReward() {
  const lastClaimed = localStorage.getItem('lastDailyReward');
  const today = new Date().toISOString().split('T')[0];

  if (lastClaimed === today) {
    alert("Vous avez déjà récupéré votre récompense journalière aujourd'hui !");
    return;
  }

  const reward = Math.floor(score * 0.15);
  score += reward;
  updateScore();
  localStorage.setItem('lastDailyReward', today);
  alert(`Vous avez reçu ${formatNumber(reward)} croquettes en récompense journalière, soit 15% de vos croquettes totales !`);
  checkDailyRewardAvailability(); // Mettre à jour l'état du bouton après avoir réclamé la récompense
}

// Ajouter un écouteur d'événement au bouton de récompense journalière
document.getElementById('dailyRewardButton').addEventListener('click', claimDailyReward);

// Vérifier la disponibilité de la récompense journalière au chargement de la page
checkDailyRewardAvailability();

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
  const chambreButton = document.getElementById("chambreDecoration");
  const jardinButton = document.getElementById("jardinDecoration");
  const restaurantButton = document.getElementById("restaurantDecoration");
  const jetButton = document.getElementById("jetDecoration");
  const conferenceButton = document.getElementById("conferenceDecoration");
  const famousButton = document.getElementById("famousDecoration");
  const nuitButton = document.getElementById("nuitDecoration");

  const reflexGameButton = document.getElementById("reflexButton");

  // Mise à jour du bouton Maîtresse de croquettes
  maitresseCroquettesButton.textContent = `Maîtresse (coût: ${formatNumber(maitresseCroquettesCost)}) : +1 croq./sec (Niv. ${formatNumber(maitresseCroquettesLevel)})`;
  if (score < maitresseCroquettesCost) {
    maitresseCroquettesButton.classList.add("disabled");
    maitresseCroquettesButton.disabled = true;
  } else {
    maitresseCroquettesButton.classList.remove("disabled");
    maitresseCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Sac de croquettes
  sacCroquettesButton.textContent = `Sac de croquettes (coût: ${formatNumber(sacCroquettesCost)}) : +3 croq./sec (Niv. ${formatNumber(sacCroquettesLevel)})`;
  if (score < sacCroquettesCost) {
    sacCroquettesButton.classList.add("disabled");
    sacCroquettesButton.disabled = true;
  } else {
    sacCroquettesButton.classList.remove("disabled");
    sacCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Colis de croquettes
  colisCroquettesButton.textContent = `Colis de croquettes (coût: ${formatNumber(colisCroquettesCost)}) : +5 croq./sec (Niv. ${formatNumber(colisCroquettesLevel)})`;
  if (score < colisCroquettesCost) {
    colisCroquettesButton.classList.add("disabled");
    colisCroquettesButton.disabled = true;
  } else {
    colisCroquettesButton.classList.remove("disabled");
    colisCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Champs de croquettes
  champCroquettesButton.textContent = `Champs de croquettes (coût: ${formatNumber(champCroquettesCost)}) : +7 croq./sec (Niv. ${formatNumber(champCroquettesLevel)})`;
  if (score < champCroquettesCost) {
    champCroquettesButton.classList.add("disabled");
    champCroquettesButton.disabled = true;
  } else {
    champCroquettesButton.classList.remove("disabled");
    champCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Mine de croquettes
  mineCroquettesButton.textContent = `Mine de croquettes (coût: ${formatNumber(mineCroquettesCost)}) : +12 croq./sec (Niv. ${formatNumber(mineCroquettesLevel)})`;
  if (score < mineCroquettesCost) {
    mineCroquettesButton.classList.add("disabled");
    mineCroquettesButton.disabled = true;
  } else {
    mineCroquettesButton.classList.remove("disabled");
    mineCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Usine de croquettes
  usineCroquettesButton.textContent = `Usine (coût: ${formatNumber(usineCroquettesCost)}) : +15 croq./sec (Niv. ${formatNumber(usineCroquettesLevel)})`;
  if (score < usineCroquettesCost) {
    usineCroquettesButton.classList.add("disabled");
    usineCroquettesButton.disabled = true;
  } else {
    usineCroquettesButton.classList.remove("disabled");
    usineCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Convoi de croquettes
  convoiCroquettesButton.textContent = `Convoi exceptionnel (coût: ${formatNumber(convoiCroquettesCost)}) : +17 croq./sec (Niv. ${formatNumber(convoiCroquettesLevel)})`;
  if (score < convoiCroquettesCost) {
    convoiCroquettesButton.classList.add("disabled");
    convoiCroquettesButton.disabled = true;
  } else {
    convoiCroquettesButton.classList.remove("disabled");
    convoiCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Affrètement de croquettes
  affretementCroquettesButton.textContent = `Affrètement (coût: ${formatNumber(affretementCroquettesCost)}) : +20 croq./sec (Niv. ${formatNumber(affretementCroquettesLevel)})`;
  if (score < affretementCroquettesCost) {
    affretementCroquettesButton.classList.add("disabled");
    affretementCroquettesButton.disabled = true;
  } else {
    affretementCroquettesButton.classList.remove("disabled");
    affretementCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Téléporteur de croquettes
  teleporteurCroquettesButton.textContent = `Téléporteur (coût: ${formatNumber(teleporteurCroquettesCost)}) : +25 croq./sec (Niv. ${formatNumber(teleporteurCroquettesLevel)})`;
  if (score < teleporteurCroquettesCost) {
    teleporteurCroquettesButton.classList.add("disabled");
    teleporteurCroquettesButton.disabled = true;
  } else {
    teleporteurCroquettesButton.classList.remove("disabled");
    teleporteurCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Développeur de croquettes
  developpeurCroquettesButton.textContent = `Développeur (coût: ${formatNumber(developpeurCroquettesCost)}) : +29 croq./sec (Niv. ${formatNumber(developpeurCroquettesLevel)})`;
  if (score < developpeurCroquettesCost) {
    developpeurCroquettesButton.classList.add("disabled");
    developpeurCroquettesButton.disabled = true;
  } else {
    developpeurCroquettesButton.classList.remove("disabled");
    developpeurCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton C.G.M de croquettes
  cgmCroquettesButton.textContent = `C.G.M (coût: ${formatNumber(cgmCroquettesCost)}) : +32 croq./sec (Niv. ${formatNumber(cgmCroquettesLevel)})`;
  if (score < cgmCroquettesCost) {
    cgmCroquettesButton.classList.add("disabled");
    cgmCroquettesButton.disabled = true;
  } else {
    cgmCroquettesButton.classList.remove("disabled");
    cgmCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Patrouille de croquettes
  patrouilleCroquettesButton.textContent = `Patrouilles (coût: ${formatNumber(patrouilleCroquettesCost)}) : +35 croq./sec (Niv. ${formatNumber(patrouilleCroquettesLevel)})`;
  if (score < patrouilleCroquettesCost) {
    patrouilleCroquettesButton.classList.add("disabled");
    patrouilleCroquettesButton.disabled = true;
  } else {
    patrouilleCroquettesButton.classList.remove("disabled");
    patrouilleCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Continent de croquettes
  continentCroquettesButton.textContent = `Continent (coût: ${formatNumber(continentCroquettesCost)}) : +40 croq./sec (Niv. ${formatNumber(continentCroquettesLevel)})`;
  if (score < continentCroquettesCost) {
    continentCroquettesButton.classList.add("disabled");
    continentCroquettesButton.disabled = true;
  } else {
    continentCroquettesButton.classList.remove("disabled");
    continentCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Planète de croquettes
  planeteCroquettesButton.textContent = `Planète (coût: ${formatNumber(planeteCroquettesCost)}) : +42 croq./sec (Niv. ${formatNumber(planeteCroquettesLevel)})`;
  if (score < planeteCroquettesCost) {
    planeteCroquettesButton.classList.add("disabled");
    planeteCroquettesButton.disabled = true;
  } else {
    planeteCroquettesButton.classList.remove("disabled");
    planeteCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Galaxie de croquettes
  galaxieCroquettesButton.textContent = `Constellation (coût: ${formatNumber(galaxieCroquettesCost)}) : +45 croq./sec (Niv. ${formatNumber(galaxieCroquettesLevel)})`;
  if (score < galaxieCroquettesCost) {
    galaxieCroquettesButton.classList.add("disabled");
    galaxieCroquettesButton.disabled = true;
  } else {
    galaxieCroquettesButton.classList.remove("disabled");
    galaxieCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Trou Noir de croquettes
  trouNoirCroquettesButton.textContent = `Trou Noir (coût: ${formatNumber(trouNoirCroquettesCost)}) : +100 croq./sec (Niv. ${formatNumber(trouNoirCroquettesLevel)})`;
  if (score < trouNoirCroquettesCost) {
    trouNoirCroquettesButton.classList.add("disabled");
    trouNoirCroquettesButton.disabled = true;
  } else {
    trouNoirCroquettesButton.classList.remove("disabled");
    trouNoirCroquettesButton.disabled = false;
  }

  // Mise à jour du bouton Gamelle (décoration)
  gamelleButton.textContent = `Remplir la gamelle (coût : ${formatNumber(gamelleDecorationCost)} croquettes)`;
  if (gamellePurchased || score < gamelleDecorationCost) {
    gamelleButton.classList.add("disabled");
    gamelleButton.disabled = true;
  } else {
    gamelleButton.classList.remove("disabled");
    gamelleButton.disabled = false;
  }

  // Mise à jour du bouton Chambre (décoration)
  chambreButton.textContent = `Se rendre dans sa chambre préférée (coût : ${formatNumber(chambreDecorationCost)} croquettes)`;
  if (chambrePurchased || score < chambreDecorationCost) {
    chambreButton.classList.add("disabled");
    chambreButton.disabled = true;
  } else {
    chambreButton.classList.remove("disabled");
    chambreButton.disabled = false;
  }

  // Mise à jour du bouton Jardin (décoration)
  jardinButton.textContent = `Se rendre dans le jardin (coût : ${formatNumber(jardinDecorationCost)} croquettes)`;
  if (jardinPurchased || score < jardinDecorationCost) {
    jardinButton.classList.add("disabled");
    jardinButton.disabled = true;
  } else {
    jardinButton.classList.remove("disabled");
    jardinButton.disabled = false;
  }

  // Mise à jour du bouton Restaurant (décoration)
  restaurantButton.textContent = `Aller au restaurant (coût : ${formatNumber(restaurantDecorationCost)} croquettes)`;
  if (restaurantPurchased || score < restaurantDecorationCost) {
    restaurantButton.classList.add("disabled");
    restaurantButton.disabled = true;
  } else {
    restaurantButton.classList.remove("disabled");
    restaurantButton.disabled = false;
  }

  // Mise à jour du bouton Jet (décoration)
  jetButton.textContent = `Prendre son premier jet privé (coût : ${formatNumber(jetDecorationCost)} croquettes)`;
  if (jetPurchased || score < jetDecorationCost) {
    jetButton.classList.add("disabled");
    jetButton.disabled = true;
  } else {
    jetButton.classList.remove("disabled");
    jetButton.disabled = false;
  }

  // Mise à jour du bouton Conférence (décoration)
  conferenceButton.textContent = `Faire sa première conférence (coût : ${formatNumber(conferenceDecorationCost)} croquettes)`;
  if (conferencePurchased || score < conferenceDecorationCost) {
    conferenceButton.classList.add("disabled");
    conferenceButton.disabled = true;
  } else {
    conferenceButton.classList.remove("disabled");
    conferenceButton.disabled = false;
  }

  // Mise à jour du bouton Famous (décoration)
  famousButton.textContent = `Accepter l'invitation au MostFamousCat (coût : ${formatNumber(famousDecorationCost)} croquettes)`;
  if (famousPurchased || score < famousDecorationCost) {
    famousButton.classList.add("disabled");
    famousButton.disabled = true;
  } else {
    famousButton.classList.remove("disabled");
    famousButton.disabled = false;
  }

  // Mise à jour du bouton Nuit (décoration)
  nuitButton.textContent = `La nuit des chats (coût : ${formatNumber(nuitDecorationCost)} croquettes)`;
  if (nuitPurchased || score < nuitDecorationCost) {
    nuitButton.classList.add("disabled");
    nuitButton.disabled = true;
  } else {
    nuitButton.classList.remove("disabled");
    nuitButton.disabled = false;
  }

  // Mise à jour du bouton Reflex Game
  reflexGameButton.textContent = `Le Défi de la Patte (coût : ${formatNumber(reflexGameCost)} croquettes)`;
  if (reflexGamePurchased || score < reflexGameCost) {
    reflexGameButton.classList.add("disabled");
    reflexGameButton.disabled = true;
  } else {
    reflexGameButton.classList.remove("disabled");
    reflexGameButton.disabled = false;
  }
}

// Récupère le slider de volume
const volumeSlider = document.getElementById('volume-slider');
let volumeLevel = parseFloat(volumeSlider.value); // Initialise avec la valeur par défaut du slider

// Fonction pour appliquer le volume aux éléments audio
function setVolume(level) {
  const audioElements = document.querySelectorAll('audio'); // Sélectionne tous les éléments audio
  audioElements.forEach(audio => {
    audio.volume = level; // Met à jour le volume
  });
}

// Écoute les changements de volume
volumeSlider.addEventListener('input', (event) => {
  volumeLevel = parseFloat(event.target.value); // Mets à jour la variable
  setVolume(volumeLevel); // Applique le volume
});

// Charger les données sauvegardées (si elles existent)
function loadGame() {
  const savedGame = localStorage.getItem("clickerGameSave");
  if (savedGame) {
    const data = JSON.parse(savedGame);
    score = data.score || 0;
    croquettesParSeconde = data.croquettesParSeconde || 0;
    maitresseCroquettesCost = data.maitresseCroquettesCost || 2;
    sacCroquettesCost = data.sacCroquettesCost || 5;
    colisCroquettesCost = data.colisCroquettesCost || 50;
    champCroquettesCost = data.champCroquettesCost || 500;
    mineCroquettesCost = data.mineCroquettesCost || 1500;
    usineCroquettesCost = data.usineCroquettesCost || 5000;
    convoiCroquettesCost = data.convoiCroquettesCost || 10000;
    affretementCroquettesCost = data.affretementCroquettesCost || 30000;
    teleporteurCroquettesCost = data.teleporteurCroquettesCost || 50000;
    developpeurCroquettesCost = data.developpeurCroquettesCost || 75000;
    cgmCroquettesCost = data.cgmCroquettesCost || 125000;
    patrouilleCroquettesCost = data.patrouilleCroquettesCost || 200000;
    continentCroquettesCost = data.continentCroquettesCost || 350000;
    planeteCroquettesCost = data.planeteCroquettesCost || 500000;
    galaxieCroquettesCost = data.galaxieCroquettesCost || 750000;
    trouNoirCroquettesCost = data.trouNoirCroquettesCost || 2000000;
    maitresseCroquettesLevel = data.maitresseCroquettesLevel || 0;
    sacCroquettesLevel = data.sacCroquettesLevel || 0;
    colisCroquettesLevel = data.colisCroquettesLevel || 0;
    champCroquettesLevel = data.champCroquettesLevel || 0;
    mineCroquettesLevel = data.mineCroquettesLevel || 0;
    usineCroquettesLevel = data.usineCroquettesLevel || 0;
    convoiCroquettesLevel = data.convoiCroquettesLevel || 0;
    affretementCroquettesLevel = data.affretementCroquettesLevel || 0;
    teleporteurCroquettesLevel = data.teleporteurCroquettesLevel || 0;
    developpeurCroquettesLevel = data.developpeurCroquettesLevel || 0;
    cgmCroquettesLevel = data.cgmCroquettesLevel || 0;
    patrouilleCroquettesLevel = data.patrouilleCroquettesLevel || 0;
    continentCroquettesLevel = data.continentCroquettesLevel || 0;
    planeteCroquettesLevel = data.planeteCroquettesLevel || 0;
    galaxieCroquettesLevel = data.galaxieCroquettesLevel || 0;
    trouNoirCroquettesLevel = data.trouNoirCroquettesLevel || 0;
    gamellePurchased = data.gamellePurchased || false;
    chambrePurchased = data.chambrePurchased || false;
    jardinPurchased = data.jardinPurchased || false;
    restaurantPurchased = data.restaurantPurchased || false;
    jetPurchased = data.jetPurchased || false;
    conferencePurchased = data.conferencePurchased || false;
    famousPurchased = data.famousPurchased || false;
    nuitPurchased = data.nuitPurchased || false;
    reflexGamePurchased = data.reflexGamePurchased || false;
    if (data.volumeLevel !== undefined) {
      volumeLevel = data.volumeLevel;
    } else {
      volumeLevel = 0.2; // Valeur par défaut
    }
    volumeSlider.value = volumeLevel;
    updateScore();
    updateButtons();
    setVolume(volumeLevel);
    if (gamellePurchased) {
      markAsPurchased("gamelleDecoration");
      showFadeImage();
    }
    if (jardinPurchased) {
      markAsPurchased("jardinDecoration");
      changeBackgroundVideo('images/FondJardin.mp4')
    }
    if (chambrePurchased) {
      markAsPurchased("chambreDecoration");
      changeBackgroundVideo('images/FondChambre.mp4')
    }
    if (restaurantPurchased) {
      markAsPurchased("restaurantDecoration");
      changeBackgroundVideo('images/FondRestaurant.mp4')
    }
    if (jetPurchased) {
      markAsPurchased("jetDecoration");
      changeBackgroundVideo('images/FondJet.mp4')
    }
    if (conferencePurchased) {
      markAsPurchased("conferenceDecoration");
      changeBackgroundVideo('images/FondConference.mp4')
    }
    if (famousPurchased) {
      markAsPurchased("famousDecoration");
      changeBackgroundVideo('images/FondFamous.mp4')
    }
    if (nuitPurchased) {
      markAsPurchased("nuitDecoration");
      createStars();
    }
    if (reflexGamePurchased) {
      markAsPurchased("reflexButton");
      showReflexButtonHidden();
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
    maitresseCroquettesLevel: maitresseCroquettesLevel,
    sacCroquettesLevel: sacCroquettesLevel,
    colisCroquettesLevel: colisCroquettesLevel,
    champCroquettesLevel: champCroquettesLevel,
    mineCroquettesLevel: mineCroquettesLevel,
    usineCroquettesLevel: usineCroquettesLevel,
    convoiCroquettesLevel: convoiCroquettesLevel,
    affretementCroquettesLevel: affretementCroquettesLevel,
    teleporteurCroquettesLevel: teleporteurCroquettesLevel,
    developpeurCroquettesLevel: developpeurCroquettesLevel,
    cgmCroquettesLevel: cgmCroquettesLevel,
    patrouilleCroquettesLevel: patrouilleCroquettesLevel,
    continentCroquettesLevel: continentCroquettesLevel,
    planeteCroquettesLevel: planeteCroquettesLevel,
    galaxieCroquettesLevel: galaxieCroquettesLevel,
    trouNoirCroquettesLevel: trouNoirCroquettesLevel,
    gamellePurchased: gamellePurchased,
    chambrePurchased: chambrePurchased,
    jardinPurchased: jardinPurchased,
    restaurantPurchased: restaurantPurchased,
    jetPurchased: jetPurchased,
    conferencePurchased: conferencePurchased,
    famousPurchased: famousPurchased,
    nuitPurchased: nuitPurchased,
    reflexGamePurchased: reflexGamePurchased,
    volumeLevel: volumeLevel !== undefined ? volumeLevel : 0.2
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
  localStorage.removeItem("lastDailyReward");
  score = 0;
  croquettesParSeconde = 0;
  maitresseCroquettesCost = 2;
  sacCroquettesCost = 10;
  colisCroquettesCost = 100;
  champCroquettesCost = 1500;
  mineCroquettesCost = 5000;
  maitresseCroquettesLevel = 0;
  sacCroquettesLevel = 0;
  colisCroquettesLevel = 0;
  champCroquettesLevel= 0;
  mineCroquettesLevel= 0;
  usineCroquettesLevel= 0;
  convoiCroquettesLevel= 0;
  affretementCroquettesLevel= 0;
  teleporteurCroquettesLevel= 0;
  developpeurCroquettesLevel= 0;
  cgmCroquettesLevel= 0;
  patrouilleCroquettesLevel= 0;
  continentCroquettesLevel= 0;
  planeteCroquettesLevel= 0;
  galaxieCroquettesLevel= 0;
  trouNoirCroquettesLevel= 0;
  gamellePurchased = false;
  chambrePurchased = false;
  nuitPurchased = false;
  jardinPurchased = false;
  restaurantPurchased = false;
  jetPurchased = false;
  conferencePurchased = false;
  famousPurchased = false;
  reflexGamePurchased = false;

  // Réinitialiser le fond d'écran au fond par défaut
  document.body.style.background = "url('images/Fond.png') no-repeat center center";
  document.body.style.backgroundSize = "cover";

  // Supprimer les marques d'achat des améliorations
  document.querySelectorAll(".purchased").forEach((button) => {
    button.classList.remove("purchased");
  });

  // Réinitialiser les autres éléments visuels
  const fadeImage = document.getElementById("fadeImage");
  if (fadeImage) fadeImage.style.display = "none";

  const bowlImage = document.getElementById("bowlImage");
  if (bowlImage) bowlImage.style.display = "block";

  const backgroundVideo = document.getElementById("backgroundVideo");
  if (backgroundVideo) backgroundVideo.remove();

  updateScore();
  updateButtons();
};

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
function showReflexButtonHidden() {
  const fadeImage = document.getElementById("reflexButtonHidden");
  fadeImage.style.display = "block";
  fadeImage.classList.add("fade-in");
}

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
      unlockSteamAchievement("RUSSIANR_LOOSE");
    } else {
      // L'utilisateur double sa mise
      score *= 2;
      message.textContent = `Bien joué ! Vous avez maintenant ${formatNumber(Math.floor(score))} croquettes ! \n Fermeture...`;
      unlockSteamAchievement("RUSSIANR_WIN");
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
  <p id="bet-info">Remportez le total de vos croquettes multiplié par la côte en cas de victoire. Vous perdez 75% de vos croquettes totales en cas d'echec.</p>
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
        raceResult.textContent = `Bravo ! ${winnerId === "mouse-1" ? "Le chat" : winnerId === "mouse-2" ? "Le chien" : "La souris"} a gagné ! Vous êtes à ${formatNumber(winAmount)} croquettes maintenant.`;
        score = winAmount;
      } else {
        raceResult.textContent = `Dommage, vous avez perdu. ${winnerId === "mouse-1" ? "Le chat" : winnerId === "mouse-2" ? "Le chien" : "La souris"} a gagné.`;
        score = Math.floor(score * 0.25);
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
    raceResult.textContent = `Vous misez ${Math.floor(bet)} croquettes sur ${selectedMouse === 1 ? "le chat" : selectedMouse === 2 ? "le chien" : "la souris"} (Cote : ${odds[selectedMouse - 1]}). La course commence !`;

    startRace(selectedMouse, odds);
  });
});

document.querySelectorAll(".category-button").forEach(button => {
  button.addEventListener("click", () => {
    const category = document.getElementById(button.dataset.category);

    // Vérifie si le menu cliqué est déjà visible
    const isVisible = category.style.display === "block";

    // Ferme tous les menus
    document.querySelectorAll(".category-content").forEach(content => {
      content.style.display = "none";
    });

    // Basculer l'affichage du menu cliqué
    if (!isVisible) {
      category.style.display = "block";
    }
  });
});

// Référence au bouton du mini-jeu
const reflexButton = document.getElementById("reflexButtonHidden");
const reflexPopup = document.createElement("div");

// Création de la pop-up HTML
reflexPopup.id = "reflexPopup";
reflexPopup.innerHTML = `
  <button class="close-popup">&times;</button>
  <h3>Jeu du Réflexe</h3>
  <p>L'image met aléatoirement entre 1 et 3 secondes à apparaître et ne dure qu'une demi seconde à l'affichage !</p>
  <p>Cliquez sur l'image dès qu'elle apparaît pour gagner 3% du total de vos croquettes.</p>
  <div id="game-area"></div>
  <p id="reflex-feedback"></p>
  <button id="startReflex">Démarrer</button>
`;

document.body.appendChild(reflexPopup);

let reflexGameActive = false; // Indique si le jeu est en cours
let timeoutId;

// Ouvrir la pop-up
reflexButton.addEventListener("click", () => {
  reflexPopup.style.display = "block";
});

// Fermer la pop-up
reflexPopup.querySelector(".close-popup").addEventListener("click", () => {
  reflexPopup.style.display = "none";
  resetReflexGame();
});

// Fonction pour démarrer le mini-jeu
document.getElementById("startReflex").addEventListener("click", () => {
  if (reflexGameActive) return;
  reflexGameActive = true;

  const gameArea = document.getElementById("game-area");
  const feedback = document.getElementById("reflex-feedback");

  feedback.textContent = ""; // Réinitialise les messages
  gameArea.innerHTML = ""; // Nettoie l'aire de jeu

  // Délai avant l'apparition de l'image (entre 1 et 3 secondes)
  const delay = Math.random() * 2000 + 1000;

  // Affiche l'image après le délai
  timeoutId = setTimeout(() => {
    const targetImage = document.createElement("img");
    targetImage.src = "images/Patte.png"; // Chemin de votre image
    targetImage.alt = "Cible";
    targetImage.style.position = "absolute";
    targetImage.style.left = `${Math.random() * 80}%`; // Position aléatoire horizontale
    targetImage.style.top = `${Math.random() * 80}%`; // Position aléatoire verticale
    targetImage.style.width = "50px";
    targetImage.style.height = "50px";
    targetImage.style.cursor = "pointer";

    // Définit l'attribut draggable
    targetImage.setAttribute("draggable", "false");

    gameArea.appendChild(targetImage);

    // Gestion du clic sur l'image
    targetImage.addEventListener("click", () => {
      const bonus = Math.floor(score * 0.03); // 3% du score total
      score += bonus;
      updateScore();
      feedback.textContent = `Bravo ! Vous gagnez ${bonus} croquettes !`;
      feedback.style.color = "green";

      resetReflexGame(); // Réinitialise le jeu après le clic
    });

    // Supprime l'image après 1 seconde si elle n'est pas cliquée
    const imageTimeout = setTimeout(() => {
      if (gameArea.contains(targetImage)) {
        gameArea.removeChild(targetImage);
        feedback.textContent = "Trop lent ! Vous avez raté l'image.";
        feedback.style.color = "red";
        resetReflexGame();
      }
    }, 650);
  }, delay);
});

// Réinitialisation du mini-jeu
function resetReflexGame() {
  reflexGameActive = false;
  clearTimeout(timeoutId);
  document.getElementById("game-area").innerHTML = ""; // Vide l'aire de jeu
}


// Liste initiale des succès
const achievements = [
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

// Référence au bouton et création de la pop-up
const successButton = document.getElementById("successButton");
const successPopup = document.createElement("div");
successPopup.id = "successPopup";
successPopup.innerHTML = `
`;
document.body.appendChild(successPopup);

const successList = successPopup.querySelector(".success-list");

// Débloquer un succès
function unlockAchievement(id) {
  const achievement = achievements.find((ach) => ach.id === id);
  if (achievement && !achievement.unlocked) {
    achievement.unlocked = true;
    showNotification(`Succès débloqué : ${achievement.title}`);
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
// Charger les succès au démarrage
loadAchievements();

function unlockSteamAchievement(achievementId) {
  ipcRenderer.send('unlock-achievement', achievementId);
}