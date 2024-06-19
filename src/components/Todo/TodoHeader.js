import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = () => {

    // 오늘 날짜 가져오는 함수
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}년 ${month}월 ${day}일`;
    }

    return (
        <header>
            <h1>{getTodayDate()}</h1>
            <div className='day'>수요일</div>
            <div className='tasks-left'>할 일 3개 남음</div>
        </header>
    );
};

export default TodoHeader;