let projects = [
  {
    title:'projectOne',
    description:'lorem',
    image:'url',
    technologies:['react','javascript','html5'],
    categories:['react','all']
  },
  {
    title:'projectTwo',
    description:'lorem',
    image:'url',
    technologies:['rails','postgresql','html'],
    categories:['ror','all']
  },
  {
    title:'projectThree',
    description:'lorem',
    image:'url',
    technologies:['rails','postgresql','html'],
    categories:['ror','all']
  }
]

const initial = {
  showAll:()=>{
  },
  addClass:(e)=>{
    e.target.classList.toggle('selected');
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
    <div class="featured-img">
      <img src="${obj.image}" alt="project_image"/>
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
  }
}

export default initial;