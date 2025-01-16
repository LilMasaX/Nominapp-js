import { initFormHandler } from './formHandler.js';
import { initModal } from './modal.js';
import { initSidebar } from './sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();

  // Verificar si estamos en la página de trabajadores
  if (document.getElementById('formAddWorker')) {
    initFormHandler();
    initModal();
  }
});