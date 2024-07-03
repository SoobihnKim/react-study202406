import React from 'react';
import {useLoaderData, useParams} from "react-router-dom";


const EventDetail = () => {

    const {eventId: id} = useParams();

    const data = useLoaderData();
    // console.log('loader data: ', data);
    // 이벤트 안에서만 쓸 수 있는데 형제관계(EventDetail)에서는 사용할 수 없음

    return (
        <>
            <h1>EventDetail Page</h1>
            <p>Event ID: {id}</p>
        </>
    );
};

export default EventDetail;