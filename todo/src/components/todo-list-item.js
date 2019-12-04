import React from 'react';

const TodoListItem = ( { label } ) => {
  const liStyle = {
    color: important ? 'tomato' : 'black'
  };

  return <span>{ label }</span>;
};

export default TodoListItem;


/**
 * было так
 * const TodoListItem = (props) => {
 *   return <span>{ props.label }</span>;
 * };
 *
 * с помощью деструктуризации стало так
 * const TodoListItem = ( { label } ) => {
 *   return <span>{ label }</span>;
 * };
 *
 * */