import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs"></p>
  </div>
`;

const worker = new Worker(new URL('worker.js', import.meta.url));
let res = [];

worker.onmessage = function ({ data }) {
  if (data.value) {
    res[data.i] = data.value;
  } else if (data.innerHTML) {
    if (data.done) {
      element.innerHTML = data.innerHTML;
    } else {
      element.innerHTML += data.innerHTML;
    }
  }
};

const element = window.document.querySelector('.read-the-docs');

document
  .querySelector('button')
  .addEventListener('click', function btnClickHandler() {
    worker.postMessage({ res });
    res = [];
  });
