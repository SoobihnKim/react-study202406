import React from 'react';
import styles from './CourseItem.module.css';

const CourseItem = ({ item, onDelete }) => {

  const deleteHandler = e => {
    console.log('삭제');
    // 여기서 App.js에게 삭제 대상 id를 전달
    // console.log(item.id);
    onDelete(item.id);
  };

  return <li className={styles['goal-item']} onClick={deleteHandler}>{item.text}</li>;
};

export default CourseItem;