import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

//새로운 항목을 입력하고 추가할 수 있는 컴포넌트. state를 통해 input의 상태 관리

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
        {/* MdAdd(+)라는 react-icons 불러오기  */}
      </button>
    </form>
  );
};

export default TodoInsert;

/*새로운 항목을 입력하고 추가할 수 있는 컴포넌트
state를 통해 인풋의 상태를 관리함*/
