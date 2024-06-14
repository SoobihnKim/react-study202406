
import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

// 기본 더미 데이터
const DUMMY_DATA = [
    {
        id: 'g1',
        text: '리액트 컴포넌트 스타일링 마스터하기'
    },
    {
        id: 'g2',
        text: 'UI/UX 프로그래밍 고수되기'
    },
];

const App = () => {

    const [goals, setGoals] = useState(DUMMY_DATA);

    // CourseInput에게 전달할 함수
    const addGoalHandler = (goalObject) => {
        // 기존 goals 복사하여 새로운 goalObject 배열에 추가
        setGoals([...goals, goalObject]);
    };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseList items={goals} />
      </section>
    </div>
  );
};

export default App;








// import React, {useState} from "react";
// import './components/expenses/ExpenseItem.css';
// import ExpenseList from "./components/expenses/ExppenseList";
// import Counter from "./components/practice/Counter";
// import NewExpense from "./components/new-expense/NewExpense";

// const App = () => {

//     // 서버에서 지출항목 JSON 배열을 응답받음
//     const expenses = [
//         {
//             title: '치킨먹음',
//             price: 30000,
//             date: new Date(2024, 6 - 1, 3)
//         },
//         {
//             title: '족발먹음',
//             price: 40000,
//             date: new Date(2023, 12 - 1, 7)
//         },
//         {
//             title: '헬스장등록',
//             price: 300000,
//             date: new Date(2024, 6 - 1, 12)
//         },
//         {
//             title: '파파존스 피자',
//             price: 40000,
//             date: new Date(2022, 3 - 1, 2)
//         },
//         {
//             title: '피리',
//             price: 2000,
//             date: new Date(2023, 5 - 1, 6)
//         },
//     ];

//     // 배열을 상태변수로 관리
//     const [expenseList, setExpenseList] = useState(expenses);

//     // ExpenseForm에게 내려보낼 함수
//     const onAddExpense = (userInput) => {
//         console.log('App.js가 내려보낸 함수 호출!');
//         // console.log(userInput);

//         // expenseList.push(userInput);
//         // 렌더링을 위해 새로운 배열 필요. 배열 복사하면서 푸시
//         // const newExpenseList = [...expenseList, userInput];
//         setExpenseList([...expenseList, userInput]);

//         // console.log(expenseList);
//     };

//     /*
//     한줄로 정리
//      const onAddExpense = (userInput) => setExpenseList([...expenseList, userInput]);
//      */

//     return (
//         <>
//             <NewExpense onSave={onAddExpense}/>
//             <ExpenseList expenses={expenseList}/>
//         </>
//     );
// }

// export default App;
