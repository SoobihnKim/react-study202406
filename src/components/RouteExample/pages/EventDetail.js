import React, {useEffect, useState} from 'react';
import {useLoaderData, useParams} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {

    const {eventId: id} = useParams();
    const [ev, setEv] = useState({});

    useEffect(() => {

        // (function foo() {}) (); // 함수 즉시 실행
        (async () => {

            const response = await fetch(`http://localhost:8282/events/${id}`);

            const json = await response.json();
            console.log('json: ', json);
            setEv(json);
        }) (); // 함수 즉시 실행

    }, []); // 한번만 실행해야하니 배열은 비워두기

    return (
        <EventItem event={ev} />
    );
};

export default EventDetail;