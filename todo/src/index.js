import React from 'react';
import ReactDOM from 'react-dom';

// создаём первый компонент
// по требованию React называем с большой буквы,
// чтобы при вызове интерпретировать как кастомные компоненты
const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App 2</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};


// const el = <h1>Hello World</h1>;
// если нужно больше строк, то обернуть в круглые скобки ()

// const el = React.cloneElement('h1', null, 'Hello World'); // старый синтаксис
// в который превращается JSX на выходе

ReactDOM.render(<App />, document.querySelector('#root'));
// render() превращает реакт элементы в html элементы на странице
// Простым языком, рендерит в браузере
