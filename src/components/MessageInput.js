import React from 'react';
import styles from './MessageInput.module.css';
import TextInput from './TextInput';
import Button from './Button';
import TextArea from './TextArea';
import Lib from '../lib/utils';

class MessageInput extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            name: props.param.name,
            title: props.param.title,
            message: props.param.message,
        }

        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeMessage = this.handleChangeMessage.bind(this)
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    
    handleChangeName(event) {
        this.setState({
            name: event.target.value,
            errorName: false
        })
    }

    handleChangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeMessage(event) {
        this.setState({
            message: event.target.value,
            errorMessage: false
        })
    }

    handleCancel() {
        this.props.onClose();
        this.setState({
            name: '',
            title: '',
            message: '',
            errorName: false,
            errorMessage: false,
        })
    }

    handleSubmit() {
        const { name, title, message } = this.state;
        
        if(name.length === 0 || message.length === 0) {
            
            let errorName = false;
            let errorMessage = false;
            
            if(name.length === 0) {
                errorName = true;
            }

            if(message.length === 0) {
                errorMessage = true;
            }
            
            this.setState({
                errorName: errorName,
                errorMessage: errorMessage,
            })

            return;
        }
        
        this.props.onSubmit({
            id: Lib.getSimpleId(),
            name: name,
            title: title,
            message: message,
        })

        this.props.onClose();

        this.setState({
            name: '',
            title: '',
            message: ''
        })
    }

    render() {
        const visible = (this.props.show)?styles.visible:styles.hidden;
        const classContainer = [styles.container, visible].join(' ');
        return (
            <div ref={this.props.containerRef} className={classContainer}>
                <div className={styles.form}>

                    <div className={styles.header}>
                        <h4>New Message</h4>
                    </div>

                    <TextInput 
                        label="From" 
                        value={this.state.name}
                        error={this.state.errorName}
                        errorMessage="You need to write your name"
                        onChange={this.handleChangeName}
                    />

                    <TextInput 
                        label="Title" 
                        value={this.state.title}
                        onChange={this.handleChangeTitle}
                    />
                    
                    <TextArea
                        label="Message"
                        value={this.state.message}
                        onChange={this.handleChangeMessage}
                        error={this.state.errorMessage}
                        errorMessage="You need to write a message"
                    />

                    <div className={styles.buttons}>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                        <Button onClick={this.handleCancel}>Cancel</Button>
                    </div>

                </div>
            </div>
        )
    }
}

MessageInput.defaultProps = {
    show: false,
    param: {
        name: '',
        title: '',
        message: ''
    }
}

export default MessageInput;