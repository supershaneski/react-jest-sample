import React, { useEffect } from 'react';
import { connect }  from 'react-redux';
import styles from './GuestBook.module.css';

function GuestBook(props) {

  useEffect(() => {
    window.scrollTo(0,document.body.scrollHeight);
  })

  return (
    <div className={styles.container}>
      {
        props.messages.map((data, index) => {
          return (
            <div key={index} className={styles.content}>
              <div className={styles.author}>{ data.author }</div>
              <h4 className={styles.title}>{ data.title }</h4>
              <div className={styles.message}>
                <p>
                {
                  data.text
                }
                </p>
              </div>
            </div>
          )
        })
      }        
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.message
  }
}

export default connect(mapStateToProps)(GuestBook);
