import React, { useReducer, useRef, useCallback } from 'react'; //상태 관리 useState
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 1000; i++) {
    array.push({
      id: i,
      text: '할 일' + i,
      checked: false,
    });
  }
  return array;
}

//const todoReducer = (state,action) => {
function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': //새로 추가
      //{type:INSERT, todo:{id:1, text:'todo', checked:false}}
      return todos.concat(action.todo);
    case 'REMOVE': //제거
      //{type:'REMOVE',id:1}
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE': //토글
      //{type:'REMOVE},id:1}
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  //useReducer(상태값  , 초기 상태, 초기 상태를 넣어주는 함수)
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  //컴포넌트가 맨 처음 렌더링될 떄만 createBulkTodos 함수 호출

  const nextId = useRef(1001);
  //고윳값으로 사용될 ID
  //Ref를 사용하여 변수 담기

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1; //nextId 1씩 더하기
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;

//미친 존나빨라짐 몇백만배로빨라짐;
//useReducer를 사용합시다...
