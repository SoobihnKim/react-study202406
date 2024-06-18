import React, {useEffect, useReducer, useState} from 'react';

import Card from '../UI/Card';
import styles from './Login.module.css';
import Button from '../UI/Button';

// 리듀서 함수
/*
  이 컴포넌트의 모든 상태와 상태변경을 중앙제어하는 함수
  컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하므로
  컴포넌트 바깥쪽에 선언하는게 일반적입니다.

  param1 - state : 변경 전의 상태값
  param2 - action : dispatch 함수(상태변경 등의 행동)가 전달한 상태변경객체,
                    지금 어떤 상태값을 변경하는가? - type
                    어떤 값으로 변경하는지? - value
  return : 변경 후의 상태값
 */

const emailReducer = (state, action) => {
    // console.log('email reducer call!');
    // console.log('state: ', state); // 변경 전 상태 객체
    // console.log('action: ', action); // 지금 상태 변경이 일어난 객체

    // return { inputValue: action.val }; // 변경 후 상태 객체
    if (action.type === 'USER_INPUT') {
        return {
            inputValue: action.val,
            isValid: action.val.includes('@')
        };
    } else if (action.type === 'VALIDATE') {
        return {
            inputValue: state.inputValue,
            isValid: state.inputValue.includes('@')
        };
    }
};

const passwordReducer = (state, action) => {
    // console.log('email reducer call!');
    // console.log('state: ', state); // 변경 전 상태 객체
    // console.log('action: ', action); // 지금 상태 변경이 일어난 객체

    // return { inputValue: action.val }; // 변경 후 상태 객체
    if (action.type === 'USER_INPUT') { // 체인지 이벤트
        return {
            inputValue: action.val,
            isValid: action.val.trim().length > 6
        };
    } else if (action.type === 'VALIDATE') { // 블러 이벤트
        return {
            inputValue: state.inputValue,
            isValid: state.inputValue.trim().length > 6
        };
    }
};


const Login = ({onLogin}) => {

    // console.log('렌더링 수행'); // 한 글자 입력할 때마다 수행됨

    // email reducer로 이메일 상태관리하기
    /*
     param1: 위에서 만든 리듀서 함수
     param2: 상태값의 초기값
     return: 리듀서를 관리하는 배열
        [0]: 이메일 관련 상태값
        [1]: 상태를 변경할 수 있는 함수
     */
    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        inputValue: '',
        isValid: null
    });
    // console.log('abc: ', abc);
    // console.log('변경 후 이메일 상태: ', emailState);

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        inputValue: '',
        isValid: null
    });

    // 사용자가 입력한 이메일을 상태 관리
    // const [enteredEmail, setEnteredEmail] = useState('');
    // 이메일 입력 값이 정상인지 확인
    // const [emailIsValid, setEmailIsValid] = useState();


    // 사용자가 입력한 패스워드를 상태 관리
    const [enteredPassword, setEnteredPassword] = useState('');
    // 패스워드 입력 값이 정상인지 확인
    const [passwordIsValid, setPasswordIsValid] = useState();
    // 이메일, 패스워드가 둘 다 정상인지 확인
    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (e) => {
        // setEnteredEmail(e.target.value);

        // reducer의 상태 변경은 반드시 dispatch 함수를 통해 처리
        // dispatch 호출 시 리듀서 함수가 호출됨

        // param1: 리듀서 함수의 action에 전달할 내용
        dispatchEmail({
            type: 'USER_INPUT',
            val: e.target.value
        });

    };

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value);

        // setFormIsValid(
        //     e.target.value.trim().length > 6 && enteredEmail.includes('@')
        // );
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(enteredEmail.includes('@'));

        dispatchEmail({
            type: 'VALIDATE'
        });
    };


    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    // 로그인 버튼을 눌렀을 때 이벤트 핸들러
    const submitHandler = (e) => {
        e.preventDefault();
        // App.js에서 받은 로그인 핸들러 호출
        onLogin(emailState.inputValue, passwordState.inputValue);
    };

    // 비동기
    useEffect(() => { // 보통 fetch 들어감

        // 디바운싱 Debouncing 마지막 입력 후 한 번 실행
        const timer = setTimeout(() => {
            console.log('useEffect call in Login.js');
            setFormIsValid(
                passwordState.isValid && emailState.isValid
            );
        }, 1000);

        // clean up 함수는 컴포넌트가 업데이트되거나 사라지기 전에 실행
        return () => {
            // console.log('clean up: ', enteredEmail); // 변경 전 값을 가지고있음
            clearTimeout(timer);
        };
    }, []); // 의존성 배열

    // console.log('render: ', enteredEmail); // 변경된 값을 가지고있음

    return (
        <Card className={styles.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${styles.control} ${
                        emailState.isValid === false ? styles.invalid : ''
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.inputValue}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler} // 포커싱을 잃었을때
                    />
                </div>
                <div
                    className={`${styles.control} ${
                        passwordState.isVaild === false ? styles.invalid : ''
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.inputValue}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={styles.actions}>
                    <Button type="submit"
                            className={styles.btn}
                        // 둘다 조건 맞으면 버튼 활성화됨
                            disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
