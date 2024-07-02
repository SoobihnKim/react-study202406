import React from 'react';
import Home from './components/RouteExample/pages/Home';
import Products from './components/RouteExample/pages/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from "./components/RouteExample/pages/ ErrorPage";

// 라우터 설정
const router = createBrowserRouter([

    {
        // path 바껴도 다른데 안바꿔도 됨
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <Home /> },
            { path: 'products', element: <Products /> }
        //     path: 'products' 상대경로로 작성하기( / 빼기)
        ]
    },

]);

const App = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default App;