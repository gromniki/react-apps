import React from 'react';

import TodoListItem from './todo-list-item';

// создаём первый компонент
// по требованию React называем с большой буквы,
// чтобы при вызове интерпретировать как кастомные компоненты
const TodoList = () => {
  // const items = ['Drink water', 'Learn React', 'Build Awesome App 2'];

  return (
    <ul>
      <li><TodoListItem /></li>
      <li><TodoListItem /></li>
    </ul>
  );
};

export default TodoList;
