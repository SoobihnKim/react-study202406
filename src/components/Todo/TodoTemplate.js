import React, {useState} from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";

const DUMMY_TODOS = [
    { id: 1, title: '리액트 공부', done: true },
    { id: 2, title: '점심 먹기', done: false },
    { id: 3, title: '프로젝트 하기', done: false },
    { id: 4, title: '과제 하기', done: false },
];

const TodoTemplate = () => {

    const [todoList, setTodoList] = useState(DUMMY_TODOS);

    const makeNewId = () => {
        if (todoList.length === 0) return 1;
        return todoList[todoList.length - 1].id + 1;
    };

    // 데이터 상향식 전달을 위한 함수를 생성(TodoInput에서 할 일을 끌어올리는 역할)
    const addTodo = (newTitle) => {
        // console.log('new: ', newTitle);
        const newTodo = {
            id: makeNewId(),
            title: newTitle,
            done: false
        };
        // console.log('new: ', newTodo);
        // todoList.push(newTodo);
        setTodoList(prevTodoList => [...prevTodoList, newTodo]);
    };

    // 삭제 끌어올리기(id로)
    // filter 복사된 배열을 줌(따로 만들어짐)
    const removeTodo = id => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    const checkTodo = id => {
        const copyTodoList = [...todoList];

        const foundTodo = copyTodoList.find(todo => todo.id === id);
        foundTodo.done = !foundTodo.done;
        console.log('founded: ', foundTodo);

        setTodoList(copyTodoList);

        // 한 줄로 정리
        // setTodoList(
        //     copyTodoList.map(todo =>
        //         todo.id === id ? {...todo, done: !todo.done} : todo));
    };

    return (
        <div className='TodoTemplate'>
            <TodoHeader />
            <TodoMain todos={todoList} onRemove={removeTodo} onCheck={checkTodo} />
            <TodoInput onAdd={addTodo} />
        </div>
    );
};

export default TodoTemplate;