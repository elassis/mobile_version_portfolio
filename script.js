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
    title: 'To do List Project',
    devType:'Back end',
    imgSrc: 'elements/screenShot-toDoList.jpg',
    imgAlt: 'image-todolist',
    metaDescription: 'To do list able to add, remove, edit and save in browser the tasks.',
    linkGithub:'https://github.com/elassis/webpack_project',
    linkLive:'https://elassis.github.io/webpack_project/'
  },
  myObj2 = {
    id: 1,
    title: 'Doctor Profile Layout',
    devType:'Front end',
    imgSrc: 'elements/screenShot-doctor.jpg',
    imgAlt: 'image-project-2',
    metaDescription: 'A frontend layuout update to the doctor profile of sodenn.com page',
    linkGithub:'https://github.com/elassis/sodenn-doctor-profile',
    linkLive:'https://elassis.github.io/sodenn-doctor-profile/'
  },
  myObj3 = {
    id: 2,
    title: 'tonic',
    devType:'Front end',
    imgSrc: 'elements/snapshoot-3.png',
    imgAlt: 'image-project-3',
    metaDescription: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
  },
  myObj4 = {
    id: 3,
    title: 'multi-post stories',
    devType:'Front end',
    imgSrc: 'elements/snapshoot-4.png',
    imgAlt: 'image-project-4',
    metaDescription: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
  },
];

function showProjects(obj) {
  const projectSection = document.querySelector('#work');
  const projectContainer = document.createElement('li');
  const featuredImage = document.createElement('img');
  const projectSubcontainer = document.createElement('div');
  const projectTitle = document.createElement('h2');
  const projectMeta = document.createElement('div');
  const metaText1 = document.createElement('p');
  const metaText2 = document.createElement('p');
  const metaText3 = document.createElement('p');
  const separator1 = document.createElement('img');
  const separator2 = document.createElement('img');
  const metaDescriptionText = document.createElement('p');
  const toolsContainer = document.createElement('ul');
  const tool1 = document.createElement('li');
  const tool2 = document.createElement('li');
  const tool3 = document.createElement('li');
  const projectButton = document.createElement('a');

  projectContainer.setAttribute('class', 'project');
  featuredImage.setAttribute('alt', obj.imgAlt);
  featuredImage.setAttribute('src', obj.imgSrc);
  projectSubcontainer.setAttribute('class', 'project-info');
  projectTitle.setAttribute('class', 'project-name');
  projectTitle.innerText = obj.title;
  projectMeta.setAttribute('class', 'meta');
  metaText1.innerText = 'HTML';
  metaText2.innerText = obj.devType;
  metaText3.innerText = '2021';
  separator1.setAttribute('src', 'elements/counter.png');
  separator1.setAttribute('alt', 'separator-dots');
  separator2.setAttribute('src', 'elements/counter.png');
  separator2.setAttribute('alt', 'separator-dots');
  metaDescriptionText.setAttribute('class', 'second-text');
  metaDescriptionText.innerText = obj.metaDescription;
  toolsContainer.setAttribute('class', 'tools');
  tool1.innerText = 'html';
  tool2.innerText = 'css';
  tool3.innerText = 'javascript';
  projectButton.setAttribute('class', 'button');
  projectButton.setAttribute('onclick', `showPopup(${obj.id})`);
  projectButton.innerText = 'see project';

  projectMeta.appendChild(metaText1);
  projectMeta.appendChild(separator1);
  projectMeta.appendChild(metaText2);
  projectMeta.appendChild(separator2);
  projectMeta.appendChild(metaText3);
  toolsContainer.appendChild(tool1);
  toolsContainer.appendChild(tool2);
  toolsContainer.appendChild(tool3);

  projectSubcontainer.appendChild(projectTitle);
  projectSubcontainer.appendChild(projectMeta);
  projectSubcontainer.appendChild(metaDescriptionText);
  projectSubcontainer.appendChild(toolsContainer);
  projectSubcontainer.appendChild(projectButton);

  projectContainer.appendChild(featuredImage);
  projectContainer.appendChild(projectSubcontainer);
  projectSection.appendChild(projectContainer);
}

function showPopup(id) {
  const projectContainer = document.querySelector('#cont-popup');
  const projectWrapper = document.querySelector('#container');
  const projectSqueleton = document.createElement('ul');
  const rowTitle = document.createElement('li');
  const rowMeta = document.createElement('li');
  const rowImg = document.createElement('li');
  const row4 = document.createElement('li');
  const title = document.createElement('p');
  const closeButton = document.createElement('a');
  const metaText1 = document.createElement('p');
  const metaText2 = document.createElement('p');
  const metaText3 = document.createElement('p');
  const separator1 = document.createElement('img');
  const separator2 = document.createElement('img');
  const featuredImage = document.createElement('img');
  const wrapperDesktop = document.createElement('ul');
  const rowDesktop1 = document.createElement('li');
  const rowDesktop2 = document.createElement('li');
  const textDescription = document.createElement('p');
  const secondPartText = document.createElement('span');
  const wrapperTools = document.createElement('ul');
  const tool1 = document.createElement('li');
  const tool2 = document.createElement('li');
  const tool3 = document.createElement('li');
  const wrapperbuttons = document.createElement('ul');
  const wrapperButton1 = document.createElement('li');
  const wrapperButton2 = document.createElement('li');
  const button1 = document.createElement('a');
  const button2 = document.createElement('a');

  projectWrapper.setAttribute('class', 'container');
  rowTitle.setAttribute('class', 'first-row');
  title.setAttribute('class', 'project-name');
  title.innerText = array[id].title;
  closeButton.innerText = 'x';
  closeButton.setAttribute('onclick', 'closePopup()');
  rowMeta.setAttribute('class', 'meta');
  metaText1.innerText = 'HTML';
  separator1.setAttribute('src', 'elements/counter.png');
  separator2.setAttribute('src', 'elements/counter.png');
  metaText2.innerText = array[id].devType;
  metaText3.innerText = '2021';
  rowImg.setAttribute('class', 'popup-img');
  featuredImage.setAttribute('src', array[id].imgSrc);
  featuredImage.setAttribute('alt', array[id].imgAlt);
  wrapperDesktop.setAttribute('class', 'desktop-layout');
  textDescription.setAttribute('class', 'second-text secont-text-popup');
  textDescription.innerText = array[id].metaDescription;
  secondPartText.setAttribute('class', 'second-part');
  secondPartText.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
  rowDesktop2.setAttribute('class', 'second-child');
  wrapperTools.setAttribute('class', 'tools');
  tool1.innerText = 'html';
  tool2.innerText = 'css';
  tool3.innerText = 'javascript';
  wrapperbuttons.setAttribute('class', 'last-row');
  button1.setAttribute('id', 'desktop-button1');
  button1.setAttribute('class', 'button popup-button');
  button1.setAttribute('href',array[id].linkLive);
  button1.innerText = 'see live';
  button2.setAttribute('id', 'desktop-button2');
  button2.setAttribute('class', 'button popup-button');
  button2.setAttribute('href',array[id].linkGithub);
  button2.innerText = 'see source';

  rowTitle.appendChild(title);
  rowTitle.appendChild(closeButton);

  rowMeta.appendChild(metaText1);
  rowMeta.appendChild(separator1);
  rowMeta.appendChild(metaText2);
  rowMeta.appendChild(separator2);
  rowMeta.appendChild(metaText3);

  rowImg.appendChild(featuredImage);
  //textDescription.appendChild(secondPartText);
  rowDesktop1.appendChild(textDescription);
  // rowDesktop1.appendChild(secondPartText);

  wrapperTools.appendChild(tool1);
  wrapperTools.appendChild(tool2);
  wrapperTools.appendChild(tool3);

  wrapperButton1.appendChild(button1);
  wrapperButton2.appendChild(button2);

  wrapperbuttons.appendChild(wrapperButton1);
  wrapperbuttons.appendChild(wrapperButton2);

  rowDesktop2.appendChild(wrapperTools);
  rowDesktop2.appendChild(wrapperbuttons);

  wrapperDesktop.appendChild(rowDesktop1);
  wrapperDesktop.appendChild(rowDesktop2);

  row4.appendChild(wrapperDesktop);

  projectSqueleton.appendChild(rowTitle);
  projectSqueleton.appendChild(rowMeta);
  projectSqueleton.appendChild(rowImg);
  projectSqueleton.appendChild(row4);
  projectWrapper.appendChild(projectSqueleton);
  projectContainer.classList.remove('display');
  document.documentElement.scrollTop = 0;
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
