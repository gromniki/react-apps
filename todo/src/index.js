import React from 'react';
import ReactDOM from 'react-dom';

// const el = <h1>Hello World</h1>;
// если нужно больше строк, то обернуть в круглые скобки ()

// const el = React.cloneElement('h1', null, 'Hello World'); // старый синтаксис
// в который превращается JSX на выходе

const el = (
  <div>
    <h1>My Todo List</h1>
    <input placeholder="search" />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.querySelector('#root'));
// render() превращает реакт элементы в html элементы на странице
// Простым языком, рендерит в браузере
