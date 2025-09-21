 document.getElementById("egzamin").addEventListener("click", function() {
    window.location.hash = "egzamin-sekcja";})
 function toggleMenu() {
    const nav = document.querySelector('.nav.nav-m');
    const burger = document.querySelector('.burger');

    if (!nav || !burger) return;

    nav.classList.toggle('active');
    burger.classList.toggle('toggle');

    // accessibility: aria-expanded
    const expanded = nav.classList.contains('active');
    burger.setAttribute('aria-expanded', expanded);
  }

  // obsługa klawiatury: Enter / Space na "burgerze"
  document.querySelectorAll('.burger').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
  });

  // (opcjonalne) — zamknij menu po kliknięciu linku (przydatne na mobile)
  document.querySelectorAll('.nav.nav-m a').forEach(a => {
    a.addEventListener('click', () => {
      const nav = document.querySelector('.nav.nav-m');
      const burger = document.querySelector('.burger');
      if (nav && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  });