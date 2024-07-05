import React from "react";
import EventForm from "../components/EventForm";
import {redirect} from "react-router-dom";

const NewEvent = () => {
    return <EventForm method='post'/>;

};

export default NewEvent;

// 서버에 갱신 요청을 보내는 트리거 함수(loader처럼 자동이 아님)
// App.js에서 router에 설정
export const action = async ({request}) => {

    // action 함수를 트리거하는 방법
    // 1. form이 있는 EventForm으로 이동
    console.log('action 함수 call!');
    // console.log('abc: ', abc);

    const formData = await request.formData();
    console.log(formData);

    // 서버에 보낼 데이터
    const payload = {
        title: formData.get('title'),
        desc: formData.get('description'),
        imageUrl: formData.get('image'),
        beginDate: formData.get('date')
    };
    console.log(payload);


    const response = await fetch(`http://localhost:8282/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    return redirect('/events');

};