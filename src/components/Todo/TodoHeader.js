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

    // 요일 가져오는 함수
    const getDayName = () => {
        const today = new Date();
        const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        return days[today.getDay()];
    };

    // 남은 할 일 수 계산


    return (
        <header>
            <h1>{getTodayDate()}</h1>
            <div className='day'>{getDayName()}</div>
            <div className='tasks-left'>할 일 {}개 남음</div>
        </header>
    );
};

export default TodoHeader;