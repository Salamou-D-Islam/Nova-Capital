const divs = document.querySelectorAll(".div-pers");
const avis = document.querySelectorAll(".pers-avis");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    // Supprime la classe active de toutes les div
    divs.forEach((d) => d.classList.remove("active"));
    // Ajoute active à la div cliquée
    div.classList.add("active");

    // Cache tous les avis
    avis.forEach((a) => (a.style.display = "none"));
    // Affiche le bon avis
    const target = div.dataset.avis;
    document.getElementById(target).style.display = "block";
  });
});

// Optionnel : afficher le premier par défaut
divs[0].classList.add("active");
avis[0].style.display = "block";
