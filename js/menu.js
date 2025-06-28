  const menuToggle = document.querySelector(".btmenu");
  const menuOpciones = document.querySelector(".opciones");

  menuToggle.addEventListener("click", () => {
    menuOpciones.style.display =
      menuOpciones.style.display === "block" ? "none" : "block";
  });

  window.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !menuOpciones.contains(e.target)) {
      menuOpciones.style.display = "none";
    }
  });