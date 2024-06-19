import React, {useState} from 'react';

import './scss/TodoMain.scss';
import TodoItem from "./TodoItem";

const TodoMain = () => {

    const todo = [{
        content: '할 일1'
    }];

    const [todoList, setTodoList] = useState(todo);
    const [userInput, setUserInput] = useState("");

    const onAddTodo = () => {

        setTodoList.push(userInput);
        const newTodoList = [...todoList, userInput];
        setTodoList([...todoList, userInput]);
        console.log(setTodoList());

    };

    return (
        <ul className='todo-list'>
            <TodoItem onSave={onAddTodo}/>
            <TodoItem />
            <TodoItem />
        </ul>
    );
};

export default TodoMain;

/*
const App = () => {

    // 배열을 상태변수로 관리
    const [expenseList, setExpenseList] = useState(expenses);

    // ExpenseForm에게 내려보낼 함수
    const onAddExpense = (userInput) => {
        console.log('App.js가 내려보낸 함수 호출!');
        // console.log(userInput);

        // expenseList.push(userInput);
        // 렌더링을 위해 새로운 배열 필요. 배열 복사하면서 푸시
        // const newExpenseList = [...expenseList, userInput];
        setExpenseList([...expenseList, userInput]);

        // console.log(expenseList);
    };

    /*
    한줄로 정리
     const onAddExpense = (userInput) => setExpenseList([...expenseList, userInput]);
     */

// return (
//     <>
//         <NewExpense onSave={onAddExpense}/>
//         <ExpenseList expenses={expenseList}/>
//     </>
// );
// }
//
// export default App;

// */