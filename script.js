function showScreen(id) {
  document.querySelectorAll('.s').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
    target.querySelectorAll('.sc').forEach(sc => sc.scrollTop = 0);
  }
}

document.addEventListener('click', e => {
  const el = e.target.closest('[data-to]');
  if (el) {
    e.preventDefault();
    e.stopPropagation();
    showScreen(el.dataset.to);
  }
});