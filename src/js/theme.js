import '../styles.css';
import { Theme } from './constants';
console.log(Theme.DARK);
console.log(Theme.LIGHT);

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
themeSwitchToggle.addEventListener('change', themeSwitch);
console.log(themeSwitchToggle.checked);

const body = document.querySelector('body');
savedTheme();
function themeSwitch(e) {
  console.log(e.target.checked);
  const toggle = e.target.checked;

  if (toggle == true) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    console.log(body.classList);
  }
  if (toggle == false) {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    console.log(body.classList);
  }

  localStorage.setItem('theme', toggle);
}

function savedTheme() {
  const savedTheme = localStorage.getItem('theme');
  console.log(savedTheme);

  if (savedTheme == 'true') {
    body.classList.add(Theme.DARK);
    themeSwitchToggle.checked = true;
  }
}
