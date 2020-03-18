import React from 'react';
import styles from './AddButton.module.css';

export default class AddButton extends React.Component {
    constructor() {
        super()
        this.state = {
            class: styles.default,
        }
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }
    onMouseDown() {
        this.setState({
            class: styles.active,
        })
    }
    onMouseUp() {
        this.setState({
            class: styles.hover,
        })
    }
    onMouseOver() {
        this.setState({
            class: styles.hover,
        })
    }
    onMouseOut() {
        this.setState({
            class: styles.default,
        })
    }
    render() {
        const classContainer = [styles.container, this.state.class].join(' ');
        return (
            <div ref={this.props.buttonRef} className={classContainer} 
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onMouseOver={this.onMouseOver}
                onMouseOut={this.onMouseOut}
                onClick={this.props.onClick}
            >
                <div className={styles.button}>&#43;</div>
            </div>
        )
    }    
}