
import React, {useState} from "react";
import './components/expenses/ExpenseItem.css';
import ExpenseList from "./components/expenses/ExppenseList";
import Counter from "./components/practice/Counter";
import NewExpense from "./components/new-expense/NewExpense";
// import CheckBoxStyle from "./components/practice/CheckBoxStyle";


const App = () => {

    // 서버에서 지출항목 JSON 배열을 응답받음
    const expenses = [
        {
            title: '치킨먹음',
            price: 30000,
            date: new Date(2024, 6 - 1, 3)
        },
        {
            title: '족발먹음',
            price: 40000,
            date: new Date(2023, 12 - 1, 7)
        },
        {
            title: '헬스장등록',
            price: 300000,
            date: new Date(2024, 6 - 1, 12)
        },
        {
            title: '파파존스 피자',
            price: 40000,
            date: new Date(2022, 3 - 1, 2)
        },
        {
            title: '피리',
            price: 2000,
            date: new Date(2023, 5 - 1, 6)
        },
    ];

    // ExpenseForm에게 내려보낼 함수
    const onAddExpense = (userInput) => {
        console.log('App.js가 내려보낸 함수 호출!');
        console.log(userInput);
        expenses.push(userInput);
        console.log(expenses);
    };

    return (
        <>
            {/*<CheckBoxStyle />*/}
            <NewExpense onSave={onAddExpense}/>
            <ExpenseList expenses={expenses}/>
        </>
    );
}

export default App;
