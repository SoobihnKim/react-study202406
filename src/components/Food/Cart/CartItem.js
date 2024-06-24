import React from 'react';

import styles from './CartItem.module.scss';

// 장바구니 하나의 정보
const CartItem = ({ cart }) => {
    // 장바구니에 담은 정보
    const { name, price, amount } = cart;

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
                <button>−</button>
                <button>+</button>
            </div>
        </li>
    );
};

export default CartItem;
