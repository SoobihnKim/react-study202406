import React from 'react';
import Home from './components/RouteExample/pages/Home';
import Products from './components/RouteExample/pages/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RouteExample/layout/RootLayout';
import ErrorPage from "./components/RouteExample/pages/ ErrorPage";
import ProductDetail from "./components/RouteExample/pages/ProductDetail";

// 라우터 설정
const router = createBrowserRouter([

    {
        // path 바껴도 다른데 안바꿔도 됨
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            // { path: '', element: <Home /> }, 바로 보여지는 페이지는 index: true 이렇게 설정
            { index: true, element: <Home /> },
        //     path: 'products' 상대경로로 작성하기( / 빼기)
            { path: 'products', element: <Products /> },
        //     동적 라우팅(prodId 서버로 보내기)
            { path: 'products/:prodId/page/:pageNo', element: <ProductDetail /> }
        ]
    },

]);

const App = () => {

    return (
        <RouterProvider router={router} />
    );
};

export default App;