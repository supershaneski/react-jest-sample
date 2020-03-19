import React from 'react';
import styles from './Message.module.css';

export default function Message(props) {
  return (
    <div className={styles.content}>
      <div className={styles.author}>{ props.author }</div>
      <h4 className={styles.title}>{ props.title }</h4>
      <div className={styles.message}>
        <p>
        {
          props.children
        }
        </p>
      </div>
    </div>
  )
}