import _ from 'lodash';
import printMe from './print';
import './app.css';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());


if (module.hot) {
    module.hot.accept('./app.js')
}