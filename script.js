// Ano automático no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Botão voltar ao topo
document.getElementById('btn-topo').addEventListener('click', () => {
  document.getElementById('topo').scrollIntoView({ behavior: 'smooth' });
});

// Reveal on scroll para seções e cards
const alvos = document.querySelectorAll(
  '.sobre, .card-projeto, .etapa, .contato-item'
);

alvos.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

alvos.forEach(el => observer.observe(el));
