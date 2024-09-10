import './style.css'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a this script,
    element.innerHTML = "Hello Webpack";
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());