import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            class: styles.normal,
        }
        this.handleOver = this.handleOver.bind(this)
        this.handleOut = this.handleOut.bind(this)
        this.handleDown = this.handleDown.bind(this)
        this.handleUp = this.handleUp.bind(this)
    }
    handleOver() {
        this.setState({
            class: styles.hover,
        })
    }
    handleOut() {
        this.setState({
            class: styles.normal,
        })
    }
    handleDown() {
        this.setState({
            class: styles.active,
        })
    }
    handleUp() {
        this.setState({
            class: styles.hover,
        })
    }
    render() {
        const buttonClass = [styles.button, this.state.class].join(' ');
        return (
            <button
                ref={this.props.buttonRef} 
                className={buttonClass}
                onMouseOver={this.handleOver}
                onMouseOut={this.handleOut}
                onMouseDown={this.handleDown}
                onMouseUp={this.handleUp}
                onClick={this.props.onClick}
            >
            { this.props.children }
            </button>
        )
    }
}

export default Button;