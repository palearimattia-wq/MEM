document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const sezioni = document.querySelectorAll('.sezione');

    sezioni.forEach(sec => sec.classList.remove('attiva'));

    const target = document.getElementById(targetId);
    if (target) {
      target.classList.add('attiva');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById('prodotti').classList.add('attiva');
