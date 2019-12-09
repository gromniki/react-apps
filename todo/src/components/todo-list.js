import React from 'react';

import TodoListItem from './todo-list-item';

// создаём первый компонент
// по требованию React называем с большой буквы,
// чтобы при вызове интерпретировать как кастомные компоненты
const TodoList = ({todos}) => {
  // const items = ['Drink water', 'Learn React', 'Build Awesome App 2'];

  return (
    <ul>
      <li><TodoListItem label={todos[0].label} important={todos[0].important} /></li>
      <li><TodoListItem label={todos[1].label} important={todos[1].important} /></li>
      <li><TodoListItem label={todos[2].label} important={todos[2].important} /></li>
    </ul>
  );
};

export default TodoList;
