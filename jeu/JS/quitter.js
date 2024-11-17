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