import React, {useContext} from 'react';

import styles from './CartItem.module.scss';
import CartContext from "../../../store/cart-context";

// 장바구니 하나의 정보
const CartItem = ({ cart }) => {

    const { addItem, removeItem } = useContext(CartContext);

    // 장바구니에 담은 정보
    const { id, name, price, amount } = cart;

    // css
    const {
        'cart-item': cartItem,
        summary,
        price: priceStyle,
        amount: amountStyle,
        actions
    } = styles;

    // 한국 원화 포맷팅
    const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

    const cartAddHandler = e => {

        // 장바구니에 보낼 객체
        const item = {
           ...cart,
            amount: 1,
        };
        addItem(item);
    };

    const cartRemoveHandler = e => {
        removeItem(id);
    };

    return (
        <li className={cartItem}>
            <div>
                <h2>{name}</h2>
                <div className={summary}>
                    <span className={priceStyle}>{formatPrice}</span>
                    <span className={amountStyle}>x {amount}</span>
                </div>
            </div>
            <div className={actions}>
                <button onClick={cartRemoveHandler}>−</button>
                <button onClick={cartAddHandler}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
