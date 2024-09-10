
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a this script,
    element.innerHTML = "Hello Webpack";
  
    return element;
  }
  
  document.body.appendChild(component());