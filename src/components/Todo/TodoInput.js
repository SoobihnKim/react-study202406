import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";

import './scss/TodoInput.scss';

const TodoInput = ({onAdd}) => {

    const [userInput, setUserInput] = useState("");



    // 폼 전송
    const submitHandler = e => {
        e.preventDefault();
        console.log('폼 전송');
        console.log('userInput: ', userInput);

        setUserInput('');

    };

    return (
        <>
            <div className='form-wrapper'>
                <form className='insert-form' onSubmit={submitHandler}>
                    <input
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'
                    />
                </form>
            </div>
            <button className='insert-btn'>
                <MdAdd/>
            </button>
        </>
    );
};

export default TodoInput;