import React from 'react'
import styles from './EventList.module.scss';
import {Link} from "react-router-dom";

const EventList = ({ eventList }) => {

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