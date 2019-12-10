import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {
  const todoData = [
    {label: 'Drink water', important: false},
    {label: 'Make Awesome App', important: true},
    {label: 'Take a tea', important: false},
    {label: 'Have a lunch', important: false}
  ];

  return (
    <div>
      <span>{(new Date()).toString()}</span>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={todoData}/>
    </div>
  );
};

// { loginBox }  т.о. можно вставлять только реакт-компоненты
// const el = <h1>Hello World</h1>;
// если нужно больше строк, то обернуть в круглые скобки ()

// const el = React.cloneElement('h1', null, 'Hello World'); // старый синтаксис
// в который превращается JSX на выходе

/*
* Пример логики с условиями
*
* const App = () => {
  const isLoggedIn = true;
  const loginBox = <span>Log in please! </span>;
  const welcomeBox = <span>Welcome back, man</span>;

  return (
    <div>
      { isLoggedIn ? welcomeBox : loginBox }
      <span>{ (new Date()).toString() }</span>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};
*
* */


ReactDOM.render(<App/>, document.querySelector('#root'));
// render() превращает реакт элементы в html элементы на странице
// Простым языком, рендерит в браузере
