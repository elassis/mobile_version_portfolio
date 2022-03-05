import {initial} from './script.js';

document.addEventListener('click',(e)=>{
  if(e.target.id === 'all'){
    initial();
  }
});