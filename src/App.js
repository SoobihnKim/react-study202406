import React from 'react';
import Home from './components/RouteExample/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from "./components/RouteExample/pages/ ErrorPage";
import Events, { loader } from "./components/RouteExample/pages/Events";
import EventDetail from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";
import NewEvent from "./components/RouteExample/pages/NewEvent";

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
                        loader: loader,
                    },
                    { path: ':eventId', element: <EventDetail /> },
                    { path: 'new', element: <NewEvent /> },
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