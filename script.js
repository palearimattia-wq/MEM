// Mostra solo la sezione cliccata
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // evita lo scroll automatico
    const targetId = link.getAttribute('href').substring(1); // es. "prodotti"
    const sezioni = document.querySelectorAll('.sezione');

    // nascondi tutte
    sezioni.forEach(sec => sec.classList.remove('attiva'));

    // mostra solo quella cliccata
    const target = document.getElementById(targetId);
    if (target) {
      target.classList.add('attiva');
    }
  });
});

// Mostra "prodotti" all'inizio
document.getElementById('prodotti').classList.add('attiva');

