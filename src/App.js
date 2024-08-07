import React from 'react';
import Home from './components/RouteExample/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from "./components/RouteExample/pages/ ErrorPage";
import Events from "./components/RouteExample/pages/Events";
import EventDetail, { loader as eventDetailLoader, action as deleteAction } from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";
import NewEvent from "./components/RouteExample/pages/NewEvent";
import EditPage from "./components/RouteExample/pages/EditPage";
import { action as manipulateAction } from './components/RouteExample/components/EventForm';

// 라우터 설정
const router = createBrowserRouter([

    {
        // path 바껴도 다른데 안바꿔도 됨
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [ // 중첩 라우팅
            // { path: '', element: <Home /> }, 바로 보여지는 페이지는 index: true 이렇게 설정
            { index: true, element: <Home /> },
            {
                path: 'events',
                element: <EventLayout />,
                children: [
                    {
                        index: true,
                        element: <Events/>,
                        // loader: eventListLoader,
                    },
                    {
                        path: ':eventId',
                        loader: eventDetailLoader,
                        // element: <EventDetail />,
                        // loader가 children에게 직접적으로 연결되지 않아
                        // EventDetail에서 loader를 사용하지 못하고있음
                        id: 'event-detail', // loader에게 ID 부여
                        children: [
                            {
                                index: true,
                                element: <EventDetail />,
                                action: deleteAction
                            },
                            {
                                path: 'edit',
                                element: <EditPage />,
                                action: manipulateAction
                            },
                        ]
                    },
                    {
                        path: 'new',
                        element: <NewEvent />,
                        // 서버에 갱신 데이터 요청을 보낼 때 트리거
                        action: manipulateAction
                    },
                ]
            },
        ]
    },
]);

const App = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default App;