let showMenu = () => {
   
    let menu = document.querySelector('#mobile-menu');
    
    if(menu.classList.contains('display')){
        menu.classList.remove('display');
    }
    else {
        menu.classList.add('display');
    }
}