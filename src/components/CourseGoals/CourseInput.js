import React from 'react';
import './CourseInput.css';
import Button from '../UI/Button';
import { useState } from 'react';

const CourseInput = ({ onAdd }) => {

  const [enteredText, setEnteredText] = useState('');

  const formSubmitHandler = e => {
    e.preventDefault();
    const newGoalObject = {
      id: Math.random().toString(),
      text: enteredText
    };
    console.log(newGoalObject);

    // 상향식 데이터 전달
    onAdd(newGoalObject);

    setEnteredText('');

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>나의 목표</label>
        <input type="text" onChange={e => setEnteredText(e.target.value)} value={enteredText} />
      </div>
      <Button type="submit" >목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
