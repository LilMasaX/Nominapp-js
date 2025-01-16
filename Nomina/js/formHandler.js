import { saveWorker } from './api.js';

export function initFormHandler() {
  const formAddWorker = document.getElementById('formAddWorker');

  formAddWorker.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que se recargue la página

    // Obtenemos los valores
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const documentNumber = document.getElementById('document').value;
    const numberAccount = document.getElementById('numberAccount').value;

    try {
      const data = await saveWorker({ name, email, phone, numberAccount, documentNumber });
      if (data.success) {
        alert('Trabajador guardado con ID: ' + data.id);
        document.getElementById('modalAddWorker').style.display = 'none'; // Cerrar modal
        formAddWorker.reset(); // Resetear formulario
        // Aquí podrías recargar la lista de trabajadores, si tienes una función
        // loadWorkers();
      } else {
        alert('No se pudo guardar el trabajador: ' + data.error);
      }
    } catch (error) {
      alert('Ocurrió un error en la solicitud.');
    }
  });
}