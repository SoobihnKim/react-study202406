import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = ({count}) => {
    // 날짜
    const today = new Date();

    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
        <header>
            <h1>{dateString}</h1>
            <div className='day'>{dayName}</div>
            <div className='tasks-left'>할 일 {count}개 남음</div>
        </header>
    );
};

export default TodoHeader;
    // // 오늘 날짜 가져오는 함수
    // const getTodayDate = () => {
    //     const today = new Date();
    //     const year = today.getFullYear();
    //     const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
    //     const day = String(today.getDate()).padStart(2, '0');
    //     return `${year}년 ${month}월 ${day}일`;
    // }
    //
    // // 요일 가져오는 함수
    // const getDayName = () => {
    //     const today = new Date();
    //     const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    //     return days[today.getDay()];
    // };
