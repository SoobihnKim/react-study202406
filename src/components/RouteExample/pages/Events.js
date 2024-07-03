import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import EventList from "../components/EventList";
import EventNavigation from "../layout/EventNavigation";

// DUMMY_EVENTS 포스트맨에 입력해서 데이터베이스에 조회되면 지우기
// const DUMMY_EVENTS = [
//     {
//         id: '1',
//         title: '여름맞이 이벤트',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXvjjsw8G84qqSWC2Kdnn5r1cmXlZ3Js7Ng&s',
//         date: '2024-07-20',
//         description: '여름맞이 이벤트입니다.'
//     },
// ];

const Events = () => {

    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:8282/events');
            const jsonData = await response.json();
            setEventList(jsonData);
        })();

    }, []);

    // 렌더링 하기 전 최초 한번만 실행하면 됨
    // useEffect(() => {
    //     const fetchEvents = async () =>{
    //         const response = await fetch();
    //         const jsonData = await response.json();
    //         setEventList(jsonData);
    //     };
    //
    //     fetchEvents();
    //
    //     fetch('http://localhost:8282/events')
    //         .then(res => res.json())
    //         .then(jsonData => {
    //             console.log(jsonData);
    //             setEventList(jsonData); // (useEffect 사용 안할 때)상태변수의 변경 -> 리렌더링 -> 무한루프
    //         });
    // }, []); // 의존성 배열 비워두면 한번만 실행됨

    return (
        <>
            <h1>Events Page</h1>
            {/*<EventNavigation />*/}
            <EventList eventList={eventList}/>

        </>
    );
};

export default Events;