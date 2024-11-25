const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

// Fonction pour afficher l'infobulle
function showTooltip(event) {
  const title = event.target.getAttribute("data-title");
  const description = event.target.getAttribute("data-description");

  if (!title && !description) return; // Si pas d'infobulle, ne rien faire

  tooltip.innerHTML = `<strong>${title}</strong><br>${description}`;
  tooltip.style.display = "block";

  const elementRect = event.target.getBoundingClientRect();
  
  // Position par défaut : à droite de l'élément
  tooltip.style.left = `${elementRect.right + 10 + window.scrollX}px`;
  tooltip.style.top = `${elementRect.top + window.scrollY}px`;

  // Ajuster la position si elle dépasse l'écran
  const tooltipRect = tooltip.getBoundingClientRect();
  
  // Si dépassement à droite, mettre à gauche
  if (tooltipRect.right > window.innerWidth) {
    tooltip.style.left = `${elementRect.left - tooltipRect.width - 10 + window.scrollX}px`;
  }
  
  // Si dépassement en bas, mettre au-dessus
  if (tooltipRect.bottom > window.innerHeight) {
    tooltip.style.top = `${elementRect.top - tooltipRect.height - 10 + window.scrollY}px`;
  }
}

// Fonction pour masquer l'infobulle
function hideTooltip() {
  tooltip.style.display = "none";
}

// Ajouter les événements de survol
document.querySelectorAll("#titre, #credits, .jeux-button, .upgrade-buttons button, .decoration-buttons button").forEach(element => {
  element.addEventListener("mouseover", showTooltip);
  element.addEventListener("mousemove", showTooltip);
  element.addEventListener("mouseout", hideTooltip);
});
