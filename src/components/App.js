import React from 'react';
import { connect }  from 'react-redux';
import Header from './Header';
import GuestBook from './GuestBook';
import AddButton from './AddButton';
import MessageInput from './MessageInput';
import { initGuestBook, addNewMessage } from '../redux/reducers';
import dummy from '../data/data.json';
import './App.css';

class Clock extends React.Component {
  constructor() {
    super()
    this.timer = null;
    this.state = {
      time: new Date()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <span style={{
        fontSize: '0.7em',
        fontWeight: '400',
        color: '#dedede',
      }}>{ this.state.time.toLocaleTimeString()}</span>
    )
  }
}

class App extends React.Component {
  
  constructor() {
    super()

    this.state = {
      showInput: false,
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleNewMessage = this.handleNewMessage.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  componentDidMount() {
    const data = dummy.items;
    this.props.initGuestBook(data);
  }
  
  handleAdd() {
    this.setState({
      showInput: true,
    })
  }

  handleNewMessage(newMessage) {
    this.props.addNewMessage(newMessage)
  }

  handleClose() {
    this.setState({
      showInput: false
    })
  }
  
  render() {
    return (
      <div className="app">
        <Header><Clock /> My GuestBook</Header>    
        <GuestBook />
        <AddButton onClick={this.handleAdd} />
        <MessageInput 
          show={this.state.showInput} 
          onClose={this.handleClose} 
          onSubmit={this.handleNewMessage}
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    ...state.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initGuestBook: (data) => {
      dispatch(initGuestBook(data));
    },
    addNewMessage: (data) => {
      dispatch(addNewMessage(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
