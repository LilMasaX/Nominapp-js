export function initModal() {
  const btnAbrirModal = document.getElementById('btnAbrirModal');
  const btnCerrarModal = document.getElementById('btnCerrarModal');
  const modalAddWorker = document.getElementById('modalAddWorker');

  // Abrir modal
  btnAbrirModal.addEventListener('click', () => {
    modalAddWorker.style.display = 'block';
  });

  // Cerrar modal (al hacer clic en la 'X')
  btnCerrarModal.addEventListener('click', () => {
    modalAddWorker.style.display = 'none';
  });

  // Opcional: cerrar modal al hacer clic en el fondo oscuro
  window.addEventListener('click', (event) => {
    if (event.target === modalAddWorker) {
      modalAddWorker.style.display = 'none';
    }
  });
}