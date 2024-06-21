import React from 'react';
import styles from './Input.module.scss';

const Input = ({ label, inputAttr }) => {
    return (
        <div className={styles.input}>
            <lavel>{label}</lavel>
            <input {...inputAttr} />

        </div>
    );
};

export default Input;