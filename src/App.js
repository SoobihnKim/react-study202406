import React, {Fragment, useRef, useState} from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers';
import UserList from "./components/Users/UserList";
import ErrorModal from "./components/UI/Modal/ErrorModal";
import addUsers from "./components/Users/AddUsers";

const App = () => {

    // 회원들이 저장될 배열
    const [userList, setUserList] = useState([]);

    // useRef 기억을 해놨다가 증가시킬 수 있음(useState는 바로바로 반영되지않음)
    const count = useRef(1);
    console.log('count: ', count);

    const addUserHandler = user => {

        count.current++;
        console.log('count.current: ', count.current);

        console.log(user); // 신규 user
        setUserList(prev => [
            ...prev,
            {...user, id: Math.random().toString()} // 기존 user 복사하고 id 추가
        ]);
    };

    return (
        <>
            <AddUsers onAddUser={addUserHandler}/>
            <UserList users={userList} />
        </>
    );
};

export default App;
