import React from 'react';
import './CourseInput.css';
import Button from '../UI/Button';
import { useState } from 'react';

const CourseInput = ({ onAdd }) => {
  // 목표 인풋에 입력한 값
  const [enteredText, setEnteredText] = useState('');

  // 입력값 검증 통과 여부 상태관리
  const [isValid, setIsValid] = useState(true);

  const formSubmitHandler = e => {
    e.preventDefault();

    if(enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const newGoalObject = {
      id: Math.random().toString(),
      text: enteredText
    };
    console.log(newGoalObject);

    // 상향식 데이터 전달
    onAdd(newGoalObject);

    setEnteredText('');

  };

  const goalChangeHandler = e => {

    const inputValue = e.target.value;

    // 입력값 검증
    if(inputValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(e.target.value);
  };

  return (
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label>나의 목표</label>
          <input
              type="text"
              onChange={goalChangeHandler}
              value={enteredText}
              style={{
                backgroundColor: isValid ?  'transparent' : 'salmon',
                borderColor: isValid ? 'black' : 'red',
              }}
          />
        </div>
        <Button type="submit">목표 추가하기</Button>
      </form>
  );
};

export default CourseInput;
