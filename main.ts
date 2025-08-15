import './src/sass/main.scss';
import './src/components/HeaderComponent';
import './src/components/Logo';
import './src/components/Form';
import './src/components/Nav';

window.addEventListener('DOMContentLoaded', () => {
  let root = document.querySelector('#root');
  let header = document.createElement('app-header');
  root?.appendChild(header);
});
