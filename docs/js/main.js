
/* funcion de Ingresar contraseña */
function enter() {
  if (document.form.email.value === 'valentina@laboratoria.la' && document.form.password.value === 'laboratoria') {
    const btnhide = document.getElementById('buttonLogin');
    btnhide.addEventListener('click', () => {
      document.getElementsByClassName('login')[0].classList.add('buttonLogin');
      document.getElementsByClassName('afterEntering')[0].classList.remove('afterEntering');
    }
    );
  } else {
    document.getElementById('incorrectPassword').innerHTML = '¡Datos inválidos! Vuelve a intentarlo.';
  }
}
/* Este boton es el que abre el listado de pre admision en el menú superior*/
const btnPre = document.getElementById('btnPreadmission');
btnPre.addEventListener('click', () => {
  document.getElementsByClassName('listPreadmission')[0].classList.remove('listPreadmission');
  document.getElementsByClassName('personalInfo')[0].classList.remove('personalInfo');
});

/* Busqueda con input*/


