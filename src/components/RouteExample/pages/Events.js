import React, {useEffect, useState} from 'react';
import {Link, useLoaderData} from "react-router-dom";
import EventList from "../components/EventList";
import EventNavigation from "../layout/EventNavigation";

// DUMMY_EVENTS 포스트맨에 입력해서 데이터베이스에 조회되면 지우기

const Events = () => {

    // loader가 리턴한 데이터 받아오기
    const eventList = useLoaderData();
    console.log(eventList);

    // App.js loader로 이동하면서 상태변수 못씀
    // const [eventList, setEventList] = useState([]);

    // App.js loader로 이동
    // useEffect(() => {
    //     (async () => {
    //         const response = await fetch('http://localhost:8282/events');
    //         const jsonData = await response.json();
    //         setEventList(jsonData);
    //     })();
    // }, []);

    return (
        <>
            <h1>Events Page</h1>
            {/*<EventNavigation />*/}
            <EventList eventList={eventList}/>
        </>
    );
};

export default Events;