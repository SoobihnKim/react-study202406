import React from 'react';
import {Link} from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: '1',
        title: '여름맞이 이벤트',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXvjjsw8G84qqSWC2Kdnn5r1cmXlZ3Js7Ng&s',
        date: '2024-07-20',
        description: '여름맞이 이벤트입니다.'
    },
    {
        id: '2',
        title: '여름맞이 할인 이벤트',
        image: 'https://m.puroluna.com/file_data/iffl8888/2019/06/18/e6a78ac2fbfa26acf240feb86380a47f.jpg',
        date: '2024-08-20',
        description: '여름맞이 할인 이벤트입니다.'
    },
];

const Events = () => {
    return (
        <>
        <h1>Events Page</h1>
        <ul>
            {
                DUMMY_EVENTS.map(event => (
                    <li key={event.id}>
                        <Link to={event.id}>{event.title}</Link>
                    </li>
                ))
            }
        </ul>
        </>
    );
};

export default Events;