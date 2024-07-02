import React from 'react';
import {Link} from "react-router-dom";

const DUMMY_PRODUCTS = [
    { id: 'p1', name: '세탁기' },
    { id: 'p2', name: '에어컨' },
    { id: 'p3', name: '청소기' },
];

const Products = () => {
    console.log('products!')

    return (
        <>
            <h1>My Products Page</h1>
            <ul>
                {
                    DUMMY_PRODUCTS.map(prod => (
                        <li key={prod.id}>
                            {/* 주소 동적으로 바꾸기 /products/p1 */}
                            <Link to={`${prod.id}/page/10`}>{prod.name}</Link>
                        </li>
                    ))
                }
            </ul>
            {/*<p>*/}
            {/*    <Link to='..'>Home</Link> 페이지로 이동하기*/}
            {/*</p>*/}
        </>
    )

};

export default Products;