import React, { useEffect } from 'react';
import { connect }  from 'react-redux';
import styles from './GuestBook.module.css';
import Message from './Message';

export function GuestBook(props) {

  /*
  // this causes some warning during testing
  useEffect(() => {
    if(window && window.hasOwnProperty("scrollTo")) window.scrollTo(0,document.body.scrollHeight);
  })
  */

  const messages = (props.messages)?props.messages:[];

  return (
    <div className={styles.container}>
      {
        messages.map((data, index) => {
          return (
            <Message key={index}
              author={data.author}
              title={data.title}
            >
              {
                data.text
              }
            </Message>
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
