
// header dropdown
const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);

const iconDropdown = document.querySelector('.icon-dropdown');
const menuDropdown = document.querySelector('.menu-dropdown');

iconDropdown.addEventListener('click', function () {
  menuDropdown.classList.toggle('hidden');
});

window.addEventListener('click', function(e) {
  if(!e.target.matches('.icon-dropdown')) {
    if(!menuDropdown.classList.contains('hidden')) {
      menuDropdown.classList.add('hidden');
    }
  }
});


// button change password

const btnChangePassword = $('.btn-change-password');
const formChangePassword = $('.form-change-password');

if (btnChangePassword) {
    btnChangePassword.addEventListener('click', function () {
        formChangePassword.classList.toggle('hidden');
    });
}
