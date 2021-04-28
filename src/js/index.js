import '../styles.css';
import menu from './menu.json';
import menuCards from '../templates/menu-cards.hbs';

console.log(menu);
console.log(menuCards);

const menuContainer = document.querySelector('.js-menu');
const markup = menuCards(menu);
menuContainer.insertAdjacentHTML('beforeend', markup);
