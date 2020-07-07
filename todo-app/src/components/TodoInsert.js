import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

//새로운 항목을 입력하고 추가할 수 있는 컴포넌트. state를 통해 input의 상태 관리

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    //onsubmit은 Enter키 입력해도 이벤트 발생(onClick은 클릭이벤트만)
    (e) => {
      onInsert(value);
      setValue(''); //value값 초기화
      // submit이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
        {/* MdAdd(+)라는 react-icons 불러오기  */}
      </button>
    </form>
  );
};

export default TodoInsert;


