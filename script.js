let projects = [
  {
    title:'projectOne',
    description:'lorem',
    image:'none',
    technologies:['react','javascript','html5'],
    categories:['react','all'],
    liveUrl:'whatEver',
    githubUrl:'github-url'
  },
  {
    title:'projectTwo',
    description:'lorem',
    image:'url',
    technologies:['rails','postgresql','html5'],
    categories:['ror','all'],
    liveUrl:'whatEver',
    githubUrl:'github-url'
  },
  {
    title:'projectThree',
    description:'lorem',
    image:'url',
    technologies:['rails','postgresql','html5'],
    categories:['ror','all'],
    liveUrl:'whatEver',
    githubUrl:'github-url'
  },
  {
    title:'projectFour',
    description:'lorem',
    image:'url',
    technologies:['react','javascript','html5'],
    categories:['react','all'],
    liveUrl:'whatEver',
    githubUrl:'github-url'
  }
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
      <div class="tech-icons"></div>
      <div class="tech-icons"></div>
      <div class="tech-icons"></div>
    </div>
    <div class="data">
      <div class="title-project">
        <p>${obj.title}</p>
      </div>
      <div class="description-project">
        <p>${obj.description}</p>
      </div>
      <div class="frameworks-project">
        <p>${obj.technologies[0]}</p>
        <p>${obj.technologies[1]}</p>
        <p>${obj.technologies[2]}</p>
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
}

export default initial;