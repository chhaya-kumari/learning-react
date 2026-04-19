// function customRender(reactElement, container) {
//   const createDom = document.createElement(reactElement.type)
//   createDom.innerHTML = reactElement.children;
//   createDom.setAttribute('href', reactElement.props.href);
//   createDom.setAttribute('target', reactElement.props.target);

//   container.appendChild(createDom);
// }

function customRender(reactElement, container) {
 const createDom = document.createElement(reactElement.type);
 createDom.innerHTML = reactElement.children;
 for (const prop in reactElement.props) {
  if (prop === 'children') continue;
  createDom.setAttribute(prop,reactElement.props[prop])
 }
 container.appendChild(createDom);
}
const reactElement = {
  type: 'a',
  props: {
    href:'https://google.com',
    target : '_blank'
  },
  children:'Click here for Google'
}

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);