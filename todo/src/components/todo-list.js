import React from 'react';

import TodoListItem from './todo-list-item';

// создаём первый компонент
// по требованию React называем с большой буквы,
// чтобы при вызове интерпретировать как кастомные компоненты
const TodoList = ({todos}) => {
  // const items = ['Drink water', 'Learn React', 'Build Awesome App 2'];
  const elements = todos.map((item) => {
    return (
      <li id={item.id}>
        <TodoListItem {...item} />
      </li>
    );
  });

  return (
    <ul>
      {elements}
    </ul>
  );
};

export default TodoList;
