import React from "react";

// 로그인 관련 상태 데이터들을 중앙집중 관리하는 파일
// 컨텍스트는 데이터 중앙저장소 - 생성시 관리할 기본 데이터를 명시
// 테이터 값은 타입 기본값을 명시
const AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogout: () => {} // 타입 기본 데이터를 넣으면 에디터에서 자동완성이 뜸
    }
);

export default AuthContext;