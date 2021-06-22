function showMenu() {
  const menu = document.querySelector('#mobile-menu');

  if (menu.classList.contains('display')) {
    menu.classList.remove('display');
  } else {
    menu.classList.add('display');
  }
}