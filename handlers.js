import initial from './script.js';

window.onload = initial.showAll();
document.addEventListener('click',(e)=>{
  e.preventDefault();
  if(e.target.id === 'all' || e.target.id === 'react' || e.target.id === 'ror' ){
    initial.addClass(e);
    initial.showProjects(e.target.id);
  }else if(e.target.id === 'menu-button'){
    initial.showMenu();
  }else if(e.target.classList.contains('arrow')){
    initial.showLang(e);
  }
});