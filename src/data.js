
// LISTADO DE postulantes
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
      console.log(progressUser);
      renderProgress(progressUser);
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

  /* Recorrer los id de progress */
  const renderProgress = progressUser => {
    const renderPro = progressUser.forEach(element => {
      if (renderId === progressUser.id);
      console.log(renderProgress)
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
}