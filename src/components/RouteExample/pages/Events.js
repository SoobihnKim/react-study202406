import React, {useEffect, useRef, useState} from 'react';
import {Link, useLoaderData, json} from "react-router-dom";
import EventList from "../components/EventList";
import EventNavigation from "../layout/EventNavigation";
import EventSkeleton from "../components/EventSkeleton";

// npm install loadsh
import {debounce, throttle} from 'lodash';


const Events = () => {

    // loader가 리턴한 데이터 받아오기
    // const eventList = useLoaderData();
    // console.log(eventList);

    // console.log('event page rendering!');

    // 이벤트 목록 아래 박스 참조
    const skeletonBoxRef = useRef();

    // 서버에서 가져온 이벤트 목록
    const [events, setEvents] = useState([]);

    // 로딩 상태 체크
    const [loading, setLoading] = useState(false);

    // 현재 페이지 번호 상태
    const [currentPage, setCurrentPage] = useState(1);

    // 더이상 가져올 데이터가 있는지 확인
    const [isFinish, setIsFinish] = useState(false);

    // 로딩 스켈레톤 스크린을 보여줄 개수
    const [skeletonCount, setSkeletonCount] = useState(4);

    // 서버로 목록 조회 요청 보내기
    const loadEvents = async () => {

        if (isFinish) {
            console.log('loading finished!');
            return;
        }

        console.log('start loading...');
        setLoading(true);

        const response = await fetch(`http://localhost:8282/events/page/${currentPage}?sort=date`);
        const {events: loadedEvents, totalCount} = await response.json();

        console.log('loaded: ', {loadedEvents, totalCount, len: loadedEvents.length});

        const updatedEvents = [...events, ...loadedEvents]; // 기존꺼 + 추가로 불러옴
        setEvents(updatedEvents);
        setLoading(false);
        // 로딩이 끝나면 페이지번호를 1 늘려 놓는다.
        setCurrentPage(prevPage => prevPage + 1);
        console.log('end loading!');

        // 로딩이 끝나면 더이상 가져올게 있는지 체크
        setIsFinish(totalCount === updatedEvents.length);

        // 로딩 후 지금까지 불러온 데이터 개수(현재 렌더링된 개수)를 총 데이터 개수에서 차감
        const restEventsCount = totalCount - updatedEvents.length;

        // skeleton 개수 구하기 -> 남은 개수가 4보다 크면 4로 세팅, 4보다 작으면 그 수로 세팅
        const skeletonCnt = Math.min(4, restEventsCount);
        setSkeletonCount(skeletonCnt);

    };

    // 초기 이벤트 1페이지 목록 가져오기
    // useEffect(() => {
    //     loadEvents();
    // }, []);

    // 스크롤 핸들러
    // const scrollHandler = throttle(() => {
    //     // console.log('scroll!');
    //
    //     // 맨 밑인지 확인하는 공식
    //     if(loading || window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
    //         return;
    //     }
    //     loadEvents();
    // }, 2000);

    // 스크롤 이벤트 바인딩
    // 처음 한번만 실행
    // useEffect(() => {
    //     window.addEventListener('scroll', scrollHandler);
    //
    //     return() => {
    //         window.removeEventListener('scroll', scrollHandler);
    //         scrollHandler.cancel(); // 스로틀 취소
    //     }
    // }, [currentPage, loading]); // 페이지 번호나 로딩 상태 바뀌면 다시 실행

    // 화면에 특정 박스가 보이면 다음 페이지를 로딩
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            // 현재 감시하고 있는 타겟의 정보(배열)
            console.log('entries: ', entries[0]);

            // 서버에서 데이터 페칭
            // !entries[0].isIntersecting : 관찰하고 있는 박스가 감지되지 않으면
            if (!entries[0].isIntersecting || loading || isFinish) { // 로딩 중이거나 다 가져왔으면
                return;
            }
            loadEvents();
        }, {
            // 관찰하고 있는 요소의 높이가 50% 보일 때 콜백을 실행
            threshold: 0.5
        });

        // observer 관찰 대상(DOM)을 지정
        if (skeletonBoxRef.current) {
            observer.observe(skeletonBoxRef.current);
        }

        // 컴포넌트가 렌더링이 사라질 때 옵저빙 중지
        return () => {
            if (skeletonBoxRef.current) {
                observer.disconnect();
            }
        };
    }, [loading, currentPage]); // 상태가 변하면 다시 관찰 시작할 수 있도록

    return (
        <>
            <EventList eventList={events}/>
            <div ref={skeletonBoxRef}
                 // style={{height: '300px', background: 'yellow'}}
            >
                {loading && <EventSkeleton count={skeletonCount}/>}
                {/*    로딩중일때만 보여주기 */}
            </div>
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
