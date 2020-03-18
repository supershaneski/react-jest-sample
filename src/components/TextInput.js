import React from 'react';
import styles from './TextInput.module.css';

function TextInput(props) {
    const labelStatus = (!props.error)?styles.normal:styles.error;
    const labelClass = [styles.label, labelStatus].join(' ');
    
    const inputStatus = (!props.error)?styles.normalInput:styles.errorInput;
    const inputClass = [styles.input, inputStatus].join(' ');
    
    const labelText = (!props.error)?props.label:`${props.label} (${props.errorMessage})`;

    return (
        <div className={styles.container}>
            <label 
                ref={props.labelRef} 
                className={labelClass}
            >{ labelText }</label>
            <input
                ref={props.inputRef}
                className={inputClass}
                type="text"
                value={props.value}
                maxLength={64}
                onChange={props.onChange}
            />
        </div>
    )
}

export default TextInput;