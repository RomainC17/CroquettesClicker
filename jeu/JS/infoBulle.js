const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

// Fonction pour afficher l'infobulle
function showTooltip(event) {
  const title = event.target.getAttribute("data-title");
  const description = event.target.getAttribute("data-description");

  tooltip.innerHTML = `<strong>${title}</strong><br>${description}`;
  tooltip.style.display = "block";

  const buttonRect = event.target.getBoundingClientRect();

  if (event.target.closest("titre")) {
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY + 10}px`;
  }
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

// Ajouter des événements de survol au titre
const titleElement = document.getElementById("titre");
titleElement.addEventListener("mouseover", showTooltip);
titleElement.addEventListener("mousemove", showTooltip);
titleElement.addEventListener("mouseout", hideTooltip);