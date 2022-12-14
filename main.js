const menuIcon = document.querySelector('.icon-menu');
const menuContainer = document.querySelector('.menu-container');
const contactButton = document.getElementById('contact-button');

const dialog = document.querySelector('dialog');

menuIcon.addEventListener('click', () => {
  dialog.showModal();
});

contactButton.addEventListener('click', () => {
  dialog.close();
});

dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
    && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
  if (!isInDialog) {
    dialog.close();
  }
});