import React from "react";

import styles from './EventForm.module.scss';
import {useParams, useNavigate} from "react-router-dom";

const EventForm = () => {

    // const { eventId : id} = useParams();
    const navigate = useNavigate();

    const cancelHandler = e => {
        // window.location.href = '/events/' + id; // 리액트에서 쓰면 안됨 (새로고침 일어남)
        // navigate('/events/' + id);
        navigate('..');
    };


    return (
        <form className={styles.form}>
            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" required />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" required />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" required />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="5" required />
            </p>
            <div className={styles.actions}>
                <button type="button" onClick={cancelHandler} >
                    Cancel
                </button>
                <button>Save</button>
            </div>
        </form>
    );
};

export default EventForm;
