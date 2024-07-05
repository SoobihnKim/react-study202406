import React from "react";
import styles from './EventItem.module.scss';
import {Link, redirect, useNavigate, useParams} from "react-router-dom";

const EventItem = ({event}) => {

    const {
        'event-id': id,
        title,
        desc: description,
        'img-url': image,
        'start-date': date
    } = event;

    // const { eventId: id } = useParams();
    const navigate = useNavigate();

    // const fetchDelete = async () => {
    //     const res = await fetch(`http://localhost:8282/events/${id}`, {
    //         method: 'DELETE'
    //     });
    // };

    const deleteHandler = e => {

        if (!window.confirm('정말 삭제하시겠습니까?')) return;

        console.log('id: ', id);

        // await 쓰려면 클릭 이벤트에 async 쓸 수 없어서 밖에서 함수 만들어서 불러오거나
        // 이렇게 즉시실행 함수로 써야함
        (async () => {
            await fetch(`http://localhost:8282/events/${id}`, {
                method: 'DELETE'
            });
            navigate('/events');
        })();

        // fetchDelete();

    };

    return (
        <article className={styles.event}>
            <img src={image} alt={title}/>
            <h1>{title}</h1>
            <time>{date}</time>
            <p>{description}</p>
            <menu className={styles.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={deleteHandler}>Delete</button>
            </menu>
        </article>
    );
};


export default EventItem;
