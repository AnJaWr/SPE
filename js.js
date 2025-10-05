


      function toggleMenu() {
    const nav = document.querySelector("nav ul.nav-m");
    const burger = document.querySelector(".burger");
    const expanded = burger.getAttribute("aria-expanded") === "true";

    nav.classList.toggle("active");
    burger.classList.toggle("open");
    burger.setAttribute("aria-expanded", !expanded);
  }


    const main = document.getElementById("main");
    let toggle = false;

    setInterval(() => {
      // Zaczynamy animację fade out
      main.classList.add('fade-out');

      // Po 1.5s (czas animacji) zmieniamy klasę tła
      setTimeout(() => {
        toggle = !toggle;
        main.classList.toggle('main_bg1', !toggle);
        main.classList.toggle('main_bg2', toggle);

        // Po zmianie klasy uruchamiamy fade in
        main.classList.remove('fade-out');
      }, 1500);
    }, 10000); // 20 sekund
