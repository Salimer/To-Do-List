import _ from 'lodash';
import './style.scss';

 function component() {
   const element = document.createElement('div');
  const btn = document.createElement('button');
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';

  element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component());