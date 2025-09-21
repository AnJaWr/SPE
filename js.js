 document.getElementById("egzamin").addEventListener("click", function() {
    window.location.hash = "egzamin-sekcja";})


      function toggleMenu() {
    const nav = document.querySelector("nav ul.nav-m");
    const burger = document.querySelector(".burger");
    const expanded = burger.getAttribute("aria-expanded") === "true";

    nav.classList.toggle("active");
    burger.classList.toggle("open");
    burger.setAttribute("aria-expanded", !expanded);
  }