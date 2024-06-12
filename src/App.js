import logo from './logo.svg';
import './App.css';
import React from "react";
import Hello from "./components/Hello";
import Bye from "./components/Bye";
import Greet from "./components/Greet";

function App() {
    // jsx 문법
    // const $h2 = React.createElement('h2', null, '방가방가햄토리');
    const $h2 = <h2>방가방가햄토리</h2>;

    // jsx 규칙
    // 1. return 안에 있는 태그는 반드시 하나의 태그로 묶여야 함.
    // 2. 빈 태그(닫는 태그 없는)는 반드시 />로 마감해야함
    // 3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기함.
    // 4. 의미없는 부모는 <React.Fragment>로 감싸면 됨. <>로도 가능함.
    // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.

    const hello = '안녕안녕?';

    return (
        <>
            <Bye />
            <Hello />
            <Bye />
            <Greet />
            {/*<div className="App">*/}
            {/*    <h1>{hello}</h1>*/}
            {/*    {$h2}*/}
            {/*</div>*/}
            {/*<div className='noname'>*/}
            {/*    <input type="text"/>*/}
            {/*    <label htmlFor=""></label>*/}
            {/*</div>*/}
        </>
    );
}

export default App;

/*
// rsc 단축키로 이렇게 완성

import React from 'react';

const Foo = () => {
    return (
        <div>

        </div>
    );
};

export default Foo;
 */