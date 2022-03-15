import initial from './script.js';

window.onload = initial.showAll();
document.addEventListener('click',(e)=>{
  if(e.target.id === 'all' || e.target.id === 'react' || e.target.id === 'ror' ){
    initial.addClass(e);
    initial.showProjects(e.target.id);
  }else if(e.target.id === 'menu-button'){
    initial.togglePopUp();
  }else if(e.target.classList.contains('arrow')){
    initial.showLang(e);
  }else if(e.target.classList.contains('pp-bg') || e.target.id ==='popup-link'){
    initial.togglePopUp();
  }
});