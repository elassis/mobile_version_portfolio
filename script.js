let projects = [
  {
    title:'car booking application',
    description:"web app where the user can rent cars per hour. in this project I've used react in the frontend and ruby on rails in the backend as a remote rest api.",
    technologies:['rails-icon.png','react-icon.png','posgresql-icon.jpg'],
    categories:['ror','react','all'],
    liveUrl:'https://final-capstone-project-r.netlify.app/login',
    githubUrl:'https://github.com/lfmnovaes/car-rental-back-end'
  },
  {
    title:'rails budget application',
    description:'web app where the user can track their expenses and organize it by categories, i developed this app completely with ruby on rails and postgresql as database.',
    image:'url',
    technologies:['rails-icon.png','posgresql-icon.jpg','html-icon.png'],
    categories:['ror','all'],
    liveUrl:'https://calm-thicket-74866.herokuapp.com/',
    githubUrl:'https://github.com/elassis/rails_budget_app'
  },
  {
    title:'recipes social network',
    description:'a website where user can create recipes and also share it with other users, user will be able to delete and add as much recipes and food as they want.',
    image:'url',
    technologies:['rails-icon.png','posgresql-icon.jpg','html-icon.png'],
    categories:['ror','all'],
    liveUrl:'https://enigmatic-escarpment-64320.herokuapp.com/users/sign_in',
    githubUrl:'https://github.com/LOctavio/rails_recipe_site'
  },
  {
    title:'rockets/missions reservations',
    description:'web application where the user is able to reserve rockets and missions, this application consumes information from the space x remote api.',
    technologies:['js-icon.png','react-icon.png','redux-icon.png'],
    categories:['react','all'],
    liveUrl:'https://react-redux-capstone-jose-enmanuel.netlify.app/rockets',
    githubUrl:'https://github.com/elassis/react-redux-capstone'
  },
  {
    title:'live statistics about covid-19',
    description:'a website where users can have live statistical information about covid-19 sorted by country. this information is retrieve from a public API called Narrativa. ',
    image:'url',
    technologies:['js-icon.png','react-icon.png','redux-icon.png'],
    categories:['react','all'],
    liveUrl:'https://m3-capstone-microverse.netlify.app/',
    githubUrl:'https://github.com/elassis/module-3-final-project'
  },
  {
    title:'comment on tv shows website',
    description:'a website where users can add a comment to the displayed show. this website was made with webpack and consumes data from two remote rest APIs.',
    image:'url',
    technologies:['js-icon.png','css-icon.png','html-icon.png'],
    categories:['all'],
    liveUrl:'https://elassis.github.io/module-2-capstone/dist/',
    githubUrl:'https://github.com/elassis/module-2-capstone'
  },
]

const initial = {
  showAll:()=>{
    initial.showProjects('all');
  },
  addClass:(e)=>{
    e.target.classList.add('selected');
    e.path[1].childNodes.forEach((c)=>{
      if(c.id !== e.target.id && c.className === 'selected') c.classList.remove('selected');
    });
  },
  showProjects:(categorie)=>{
    document.querySelector('#work').innerHTML = "";
      projects.map((obj)=>{
        if(obj.categories.includes(categorie)){
          initial.projectTemplate(obj);
        }
      });
  },
  projectTemplate:(obj)=>{
    let container = document.querySelector('#work');
    let template = ` <li class="project-box">
    <div class="featured-tech">
      <div class="tech-icons">
        <img src="./elements/${obj.technologies[0]}"/>
      </div>
      <div class="tech-icons">
        <img src="./elements/${obj.technologies[1]}"/>
      </div>
      <div class="tech-icons">
        <img src="./elements/${obj.technologies[2]}"/>
      </div>
    </div>
    <div class="data">
      <div class="title-project">
        <p>${obj.title}</p>
      </div>
      <div class="description-project">
        <p>${obj.description}</p>
      </div>
      <div class="frameworks-project">
        <a href="${obj.githubUrl}">
          <img class="links" src="./elements/pop-btn-2.png"/>
        </a>
        <a href="${obj.liveUrl}">
          <img class="links" src="./elements/pop-btn-1.png"/>
        </a>
      </div>
    </div>
  </li>`;
  container.innerHTML += template;
  },
  showMenu:()=>{
    let mobileMenu = `<div class="pp-bg">
    <div class="pp-body">
      <p>here</p>
    </div>
  </div>`;
  document.body.innerHTML+= mobileMenu;
  },
  showLang:(e)=>{
    e.target.classList.toggle('rotate');
    e.path[2].childNodes[3].classList.toggle('showUp');
    e.path[2].classList.toggle('expand');    
  }
}

export default initial;