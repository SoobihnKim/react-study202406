import React, {useContext, useEffect, useState} from 'react';
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.scss";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({onShow}) => {

    // bump 애니메이션을 제어하는 상태변수
    const [isBump, setIsBump] = useState(false);

    // 장바구니 배열 가져오기
    const {cartItems} = useContext(CartContext);

    const numberOfCart = cartItems.reduce((accum, current) => {
        return accum + current.amount;
    }, 0);

    // 한줄로 정리
    // const numberOfCart = cartItems.reduce((accum, current) => accum + current.amount, 0);

    // const calcTotalAmount = () => {
    //     let totalAmount = 0;
    //     for (const item of cartItems) {
    //         totalAmount += item.amount;
    //     }
    //     return totalAmount;
    // };

    const {button, icon, badge, bump} = styles;

    // 담을 때 실행
    useEffect(() => {

        if(cartItems.length === 0) return;

        // console.log('useEffect 실행');
        setIsBump(true);

        // 애니메이션 실행 후 클래스 제거(한번만 실행되는 애니메이션이기 때문)
        // 비동기라 시간을 걸어줘야함
        const timer = setTimeout(() => {
            setIsBump(false);
        }, 300)

        return () => clearTimeout(timer);

    }, [cartItems]);

    return (
        <button className={`${button} ${isBump ? bump : undefined}`} onClick={onShow}>
      <span className={icon}>
        <CartIcon/>
      </span>
            <span>My Cart</span>
            {/*<span className={badge}>{totalAmount}</span>*/}
            <span className={badge}>{numberOfCart}</span>
        </button>
    );
};

export default HeaderCartButton;