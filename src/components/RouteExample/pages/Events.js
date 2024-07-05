import React, {useEffect, useState} from 'react';
import {Link, useLoaderData, json} from "react-router-dom";
import EventList from "../components/EventList";
import EventNavigation from "../layout/EventNavigation";
import EventSkeleton from "../components/EventSkeleton";

const Events = () => {

    // loader가 리턴한 데이터 받아오기
    // const eventList = useLoaderData();
    // console.log(eventList);

    // console.log('event page rendering!');

    // 서버에서 가져온 이벤트 목록
    const [events, setEvents ] = useState([]);

    // 로딩 상태 체크
    const [loading, setLoading] = useState(false);

    // 서버로 목록 조회 요청 보내기
    const loadEvents = async () => {

        console.log('start loading...');
        setLoading(true);

        const response = await fetch('http://localhost:8282/events/page/1?sort=date');
        const events = await response.json();

        setEvents(events);
        setLoading(false);
        console.log('end loading!');
    };

    // 초기 이벤트 1페이지 목록 가져오기
    useEffect(() => {
       loadEvents();
    }, []);

    return (
        <>
            <EventList eventList={events}/>
            {loading && <EventSkeleton/>}
        {/*    로딩중일때만 보여주기 */}
        </>
    );
};

export default Events;

// loader를 app.js로부터 아웃소싱 / 이 페이지 렌더링 되기 직전 실행됨
// export const loader = async () => {
//
//     console.log('loader call'); // loader는 항상 먼저 작동됨
//
//     // 이 페이지가 열릴 때 자동으로 트리거되어 호출되는 함수
//     // 이 함수에는 페이지가 열리자마자 해야할 일을 적을 수 있습니다.
//
//     const response = await fetch('http://localhost:8282/events/page/2?sort=date');
//     // const jsonData = await response.json();
//     // console.log(response.status); // 상태코드 출력
//
//     // 예외 처리
//     if (!response.ok) {
//         // 백에서 에러메시지 가져옴
//         const errorText = await response.text();
//
//         throw json(
//             {message: errorText},
//             {
//                 status: response.status //fetch에서 서버에서 받아온 상태코드
//             }
//         ); // return 말고, 코드 흐름을 끊어줘야함
//         // return response; // error message
//     }
//
//     // loader에서 fetch의 결과를 바로 리턴하면 알아서 json을 추출해줌(loader에서만 가능함)
//     return response; // ok일 경우 events[]
// };
