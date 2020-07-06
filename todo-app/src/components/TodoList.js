import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        //{todo} 통째로 전달하는↓ 게 나중에 성능 최적화 할 때 좋다.
        <TodoListItem todo={todo} key={todo.id} />
        //.map을 사용하여 컴포넌트로 ↑변환할 떄는 key props를 전달해 주어야 한다.
      ))}
    </div>
  );
};

export default TodoList;

/* todos 배열을 props로 받아온 후,(TodoItem으로 변환하여 렌더링)
이를 배열 내장 함수 map(todos.map)을 사용하여 
여러 개의 Todolist 컴포넌트로 변환하여 보여 줌*/
