import React from 'react';
import {MdDelete, MdDone} from "react-icons/md";

import './scss/TodoItem.scss';

const TodoItem = ({ item, onRemove, onCheck }) => {

    const { id, title, done } = item;

    // 삭제 클릭 이벤트
    const removeHandler = e => {
        onRemove(id);
    };

    // 상향식으로 id 올려줌
    const checkHandler = e => {
        onCheck(id);
    };

    return (
        <li className='todo-list-item'>
            <div
                className={`check-circle ${done ? 'active' : undefined}`}
                onClick={checkHandler}
            >
                {done && <MdDone/>}
            </div>
            <span className={`text ${done ? 'finish' : undefined}`}>{title}</span>
            <div className='remove' onClick={removeHandler}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;