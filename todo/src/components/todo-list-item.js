import React from 'react';

const TodoListItem = ({label, important = false}) => {
  const style = {
    color: important ? 'tomato' : 'black'
  };

  return <span style={style}>{label}</span>;
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

