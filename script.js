const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const height = document.body.offsetHeight;

  if (scrollPosition >= height) {
    footer.classList.add('active');
  } else {
    footer.classList.remove('active');
  }
});
