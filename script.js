function showMenu() {
  const menu = document.querySelector('#mobile-menu');

  if (menu.classList.contains('display')) {
    menu.classList.remove('display');
  } else {
    menu.classList.add('display');
  }
}

const array = [
  myObj1 = {
    id: 0,
    title: 'Ruby on Rails Budget Web App',
    devType:'Front end / Back end',
    devTools:['Ruby','Rails','JavaScript'],
    imgSrc: 'elements/cropped-ruby-budget.png',
    imgAlt: 'image-project-budget',
    metaDescription: 'Web application where the user can track their daily expenses and sort it by categories.',
    linkGithub:'https://github.com/elassis/rails_budget_app',
    linkLive:'https://protected-anchorage-45932.herokuapp.com/'
  },
  myObj2 = {
    id: 1,
    title: 'React Math Website',
    devTools:['React','JavaScript','HTML'],
    devType:'Front end',
    imgSrc: 'elements/snapshoot-4.png',
    imgAlt: 'image-project-4',
    metaDescription: 'This is a website  of privately personalized reads no accounts or sign-ups required.',
  },
  myObj3 = {
    id: 2,
    title: 'To do List Project',
    devType:'Back end',
    devTools:['JavaScript','HTML','CSS'],
    imgSrc: 'elements/screenShot-toDoList.jpg',
    imgAlt: 'image-todolist',
    metaDescription: 'To do list able to add, remove, edit and save in browser the tasks.',
    linkGithub:'https://github.com/elassis/webpack_project',
    linkLive:'https://elassis.github.io/webpack_project/'
  },
  myObj4 = {
    id: 3,
    title: 'Doctor Profile Layout',
    devType:'Front end',
    devTools:['JavaScript','HTML','CSS'],
    imgSrc: 'elements/screenShot-doctor.jpg',
    imgAlt: 'image-project-2',
    metaDescription: 'A frontend layout update to the doctor profile of sodenn.com page',
    linkGithub:'https://github.com/elassis/sodenn-doctor-profile',
    linkLive:'https://elassis.github.io/sodenn-doctor-profile/'
  },
];

function showProjects(obj) {
  const project_container = document.querySelector('.work');
  const project_card = `<li class="project">
    <div class="img_container">
      <img src="${obj.imgSrc}" alt="${obj.imgAlt}"/>
    </div>
    <div class="data_container">
    </div>
  </li>`;
  project_container.innerHTML += project_card;

}

function closePopup() {
  const container = document.querySelector('#cont-popup');
  const subcontainer = document.querySelector('#container');

  if (!container.classList.contains('display')) {
    subcontainer.innerHTML = '';
    container.classList.add('display');
  }
}

// local storage code
function getStorage() {
  // convert the json string into js object
  const objFinal = JSON.parse(localStorage.getItem('inputUsuario'));

  document.getElementById('inputUser').value = objFinal.valorUsuario;
  document.getElementById('inputEmail').value = objFinal.valorCorreo;
  document.getElementById('textArea').value = objFinal.valorMessage;
}
function populateStorage() {
  const form = document.getElementById('myForm');
  const valueUser = form.elements.username.value;
  const valueEmail = form.elements.useremail.value;
  const valueMessage = form.elements.message.value;

  const myObj = {
    valorUsuario: valueUser,
    valorCorreo: valueEmail,
    valorMessage: valueMessage,
  };
  // convert object into JSON string and save it in one localStorage variable
  localStorage.setItem('inputUsuario', JSON.stringify(myObj));
}

window.onload = function () {
  showProjects(array[0]);
  showProjects(array[1]);
  showProjects(array[2]);
  showProjects(array[3]);

  // form validation
  const form = document.getElementById('myForm');
  const messageContainer = document.querySelector('#message');

  form.addEventListener('submit', (event) => {
    const { value } = form.elements.useremail;
    const lowercaseValue = value.toLowerCase();

    if (value !== lowercaseValue) {
      event.preventDefault();
      messageContainer.className = 'message';
      messageContainer.innerText = 'Email must be in lower case';
    }
  });

  // localStorage part

  getStorage();
};
