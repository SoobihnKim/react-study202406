import React, {useContext} from 'react';
import CartIcon from "./CartIcon";
import styles from  "./HeaderCartButton.module.scss";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onShow }) => {

    // const { totalAmount } = useContext(CartContext);
    const { cartItems } = useContext(CartContext);

    const calcTotalAmount = () => {
        let totalAmount = 0;
        for (const item of cartItems) {
            totalAmount += item.amount;
        }
        return totalAmount;
    };

    const { button, icon, badge } = styles;

    return (
        <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon  />
      </span>
            <span>My Cart</span>
            {/*<span className={badge}>{totalAmount}</span>*/}
            <span className={badge}>{calcTotalAmount()}</span>
        </button>
    );
};

export default HeaderCartButton;