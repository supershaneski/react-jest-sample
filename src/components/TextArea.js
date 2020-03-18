import React from 'react';
import styles from './TextArea.module.css';

function TextArea(props) {
    
    const labelText = (!props.error)?props.label:`${props.label} (${props.errorMessage})`
    const labelStatus = (!props.error)?styles.normal:styles.error;
    const labelClass = [styles.label, labelStatus].join(' ');
    
    const textStatus = (!props.error)?styles.normalText:styles.errorText;
    const textClass = [styles.textarea, textStatus].join(' ');

    return (
        <div className={styles.container}>
            <label ref={props.labelRef} 
                className={labelClass}>{ labelText }</label>
            <textarea
            ref={props.textRef} 
            className={textClass}
            value={ props.value }
            onChange={ props.onChange } />
        </div>
    )
}

export default TextArea;