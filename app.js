// Navigation robuste pour GitHub Pages : toutes les sections demeurent dans index.html.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.nav');
    if (menu) menu.scrollLeft = 0;
  });
});
