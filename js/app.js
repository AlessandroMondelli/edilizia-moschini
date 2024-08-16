document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = () => {
    const headerEl = document.getElementById('header');
    const fixPos = headerEl.offsetTop;

    if (window.scrollY > fixPos) {
      headerEl.classList.add('fixed');
    } else {
      headerEl.classList.remove('fixed');
    }
  };
});
