import React, { useState } from 'react'; //상태 관리 useState
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    //useState 함수의 파라미터에 함수의 기본값을 넣어 주었다.
    ///[상태값, 상태를 설정하는 함수]
    {
      id: 1,
      text: '애들 발톱깎기',
      checked: false,
    },
    { id: 2, text: '리액트로 일정 어플리케이션 제작하기', checked: true },
    { id: 3, text: '설빙 먹기', checked: false },
  ]); //todos 배열 안에 들어있는 객체에 고유 id, 내용 text, 완료 여부 checked 값이 있다.
  //이 배열은 TodoList.js에 props로 전달될 것이다.
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
