import logo from './logo.svg';
import './App.css';
import React from "react";

import './components/expenses/ExpenseItem.css'
import ExpenseItem from "./components/expenses/ExpenseItem";

const App = () => {
    // jsx 문법
    // const $h2 = React.createElement('h2', null, '방가방가햄토리');
    // const $h2 = <h2>방가방가햄토리</h2>;

    // jsx 규칙
    // 1. return 안에 있는 태그는 반드시 하나의 태그로 묶여야 함.
    // 2. 빈 태그(닫는 태그 없는)는 반드시 />로 마감해야함
    // 3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기함.
    // 4. 의미없는 부모는 <React.Fragment>로 감싸면 됨. <>로도 가능함.
    // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.

    // const hello = '안녕안녕?';

    return (
        <>
            {/*/*문자열만 {} 생략 가능 다른 타입은 {} 써야함 */}
            <ExpenseItem title="치킨" price={30000} date={new Date(2024, 6, 3)} />
            <ExpenseItem title="족발" price={40000} date={new Date(2024, 6, 5)} />
            <ExpenseItem title="헬스장 등록" price={300000} date={new Date(2024, 6, 10)} />

        </>
    );
}

export default App;
