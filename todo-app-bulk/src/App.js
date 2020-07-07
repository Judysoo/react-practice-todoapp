import React, { useState, useRef, useCallback } from 'react'; //상태 관리 useState
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: '렉걸리는중${i}',
      checked: false,
    });
  }
  return array;
}
const App = () => {
  const [todos, setTodos] = useState(
    createBulkTodos,
    //useState 함수의 파라미터에 함수의 기본값을 넣어 주었다.
    ///[상태값, 상태를 설정하는 함수]
    //{ id: 1, text: '애들 발톱깎기', checked: false },
    //{ id: 2, text: '리액트로 일정 어플리케이션 제작하기', checked: true },
    //{ id: 3, text: '설빙 먹기', checked: false },
  ); //todos 배열 안에 들어있는 객체에 고유 id, 내용 text, 완료 여부 checked 값이 있다.
  //이 배열은 TodoList.js에 props로 전달될 것이다.
  const nextId = useRef(2501);
  //고윳값으로 사용될 ID
  //Ref를 사용하여 변수 담기
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }, //todos 배열에서 id로 항목 지우기  ↑filter 조건(T or F)
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
