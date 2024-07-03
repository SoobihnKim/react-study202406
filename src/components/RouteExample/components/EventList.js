import React from 'react'
import styles from './EventList.module.scss';
import {Link, useLoaderData} from "react-router-dom";

const EventList = ({ eventList }) => {

    // 이벤트 하위라 쓸 수 있음
    // loader 데이터는 loader를 선언한 페이지 밑에 있는 하위 컴포넌트 어디서든 사용 가능
    // const eventList = useLoaderData();
    // console.log('loader data: ', data);

    const {events, list, item, content} = styles;

    return (
        <div className={events}>
            <h1>All Events</h1>
            <ul className={list}>
                {
                    eventList.map(ev => (
                        <li key={ev.id} className={item}>
                            {/* 링크에는 무조건 문자가 들어가야함 숫자는 안됨 그래서 toString() */}
                            <Link to={ev.id.toString()}>
                                <img src={ev.image} alt={ev.title} />
                                <div className={content}>
                                    <h2>{ev.title}</h2>
                                    <time>{ev.date}</time>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default EventList