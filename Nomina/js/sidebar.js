export function initSidebar() {
  const toggler = document.querySelector(".toggler-btn");
  const sidebar = document.querySelector("#sidebar");

  toggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    sidebarLinks.forEach(link => link.classList.remove('active'));

    sidebarLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', setActiveLink);
  window.addEventListener('popstate', setActiveLink);
}