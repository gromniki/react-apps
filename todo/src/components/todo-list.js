import React from 'react';

import TodoListItem from './todo-list-item';

// создаём первый компонент
// по требованию React называем с большой буквы,
// чтобы при вызове интерпретировать как кастомные компоненты
const TodoList = () => {
  // const items = ['Drink water', 'Learn React', 'Build Awesome App 2'];

  return (
    <ul>
      <li><TodoListItem label="Drink Coffee" /></li>
      <li><TodoListItem label="Build React Apps" important /></li>
    </ul>
  );
};

export default TodoList;
