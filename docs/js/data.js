/* Listado de postulantes */

window.onload = () => {
  dataJSON();
};

function dataJSON() {
  const btnPre = document.getElementById('btnPreadmission');

  const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  const progressJSON = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';

  /* Llamar archivos de users JSON*/
  fetch(usersJSON)
    .then(response => response.json())
    .then(dataUser => {
      console.log(dataUser);
      renderUsers(dataUser);
    });

  /* Llamar archivos de progress JSON*/
  fetch(progressJSON)
    .then(response => response.json())
    .then(progressUser => {
      progress = progressUser;
      console.log(progress);
      renderProgress();
      /* renderProgress(progressUser);*/
    });


  const renderUsers = dataUser => {
    btnPre.addEventListener('click', () => {
      const render = dataUser.forEach(element => {
        const contenedorData = document.createElement('div');
        const contenedorNames = document.createElement('button');
        const contenedor = document.getElementById('paragraphList');
        contenedor.appendChild(contenedorData);
        contenedorData.appendChild(contenedorNames);
        let listName = document.createTextNode(element.name);
        contenedorNames.appendChild(listName);
      });
      return render;
    });
    // Recorrer los id de los users
    const renderId = dataUser.forEach(element => {
      let listIds = document.createTextNode(element.id);
      console.log(listIds);
      return listIds;
    });
  };

  /* Funcion para poder tomar los datos de progress */

  function renderProgress() {
    console.log(progress);
    const match = progress[listIds]; /* variable para hacer "match" entre id de users y progress */
  }
}


/*
for (let j in proceso) {
  let progresId == progreso[i];
  if (user[i].id === progresId[0]) {
    console.log(user[i].name+' '+ progresId[1].intro.percent);
    break;
  }else {
    console.log('no');
    break;
  }
}
const btnUser = document.getElementById('btnPreadmission'); 
const container = document.getElementById('paragraphList');  //este es el div vacio 
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  });

const renderUsers = (data) => {  recorre el objeto y me devuelve el nombre de cada una 
  btn.addEventListener('click', () => {
    const render = data.forEach(element => {
      return container.innerHTML += `<ul><li><a>${element.name}</a></li></ul>`;
    });
  };

 
  /*
  const btnUser = document.getElementById('btnPreadmission'); 
  const container = document.getElementById('paragraphList');  //este es el div vacio 
  const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  
  fetch(usersJSON)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderUsers(data);
    });
  
  const renderUsers = (data) => {  recorre el objeto y me devuelve el nombre de cada una 
    btn.addEventListener('click', () => {
      const render = data.forEach(element => {
        return container.innerHTML += `<ul><li><a>${element.name}</a></li></ul>`;
      });
      return render;
    });
  }; */
