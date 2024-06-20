import React, {useRef, useState} from 'react';
import {MdAdd} from "react-icons/md";

import './scss/TodoInput.scss';

const TodoInput = ({onAdd}) => {

    // input의 주소값을 기억하는 변수 생성
    // useRef()는 렌더링에 영향을 주지 않음
    const $textInput = useRef();

    // 입력창 토글링 상태값
    const [open, setOpen] = useState(false);

    // 버튼 토글링 함수
    // 이전 상태 받아서 하기
    const onToggle = () => setOpen(prevOpen => !prevOpen);

    const submitHandler = e => {
        e.preventDefault();
        // console.log($textInput.current.value);
        onAdd($textInput.current.value);
        // form 이 제출되면 입력창 비우기
        $textInput.current.value = '';
        // 토글 창 닫기
        setOpen(false);
    };

    return (
        <>
        {open && <div className='form-wrapper'>
                <form className='insert-form' onSubmit={submitHandler}>
                    <input
                        ref={$textInput}
                        type='text'
                        placeholder='할 일을 입력 후, 엔터를 누르세요!'

                    />
                </form>
            </div>}
            <button className={`insert-btn ${open ? 'open' : undefined}`} onClick={onToggle}>
                <MdAdd/>
            </button>
        </>
    );
};

export default TodoInput;