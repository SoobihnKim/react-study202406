import React, {useEffect, useState} from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {

    const ev = useLoaderData();

    // const {eventId: id} = useParams();
    // const [ev, setEv] = useState({});
    //
    // useEffect(() => {
    //
    //     // (function foo() {}) (); // 함수 즉시 실행
    //     (async () => {
    //
    //         const response = await fetch(`http://localhost:8282/events/${id}`);
    //
    //         const json = await response.json();
    //         console.log('json: ', json);
    //         setEv(json);
    //     }) (); // 함수 즉시 실행
    //
    // }, []); // 한번만 실행해야하니 배열은 비워두기

    return (
        <EventItem event={ev} />
    );
};

export default EventDetail;

export const loader = async ({params}) => {

    const {eventId: id} = params;

    // console.log('abc: ', abc.params.eventId);

    // use로 시작하는 함수인 리액트 훅은 컴포넌트 내부에서만 사용 가능
    // const {eventId: id} = useParams();
    // const [ev, setEv] = useState({});

    const response = await fetch(`http://localhost:8282/events/${id}`);

    if(!response.ok) {
        //.. 예외 처리
    }

    return await response.json();
    // console.log('json: ', json);

};