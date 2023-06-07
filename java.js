// Sélectionne tous les éléments de menu
var menuItems = document.querySelectorAll("#menu li");

// Parcours de chaque élément de menu
menuItems.forEach(function(item) {
  // Ajoute un gestionnaire d'événement pour le survol
  item.addEventListener("mouseover", function() {
    // Ajoute une classe CSS pour appliquer un effet supplémentaire
    this.classList.add("hovered");
  });

  // Ajoute un gestionnaire d'événement pour le survol
  item.addEventListener("mouseout", function() {
    // Supprime la classe CSS lorsqu'il n'y a plus de survol
    this.classList.remove("hovered");
  });
});

