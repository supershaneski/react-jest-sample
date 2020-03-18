import ActionTypes from './actiontypes';
import message from './message';

describe('message reducer', () => {

    it('should return the initial state', () => {
        expect(message({messages:[]}, {})).toEqual({
            messages: []
        })
    })

    it('should initialize the state', () => {
        const initData = [
            { id: 'abc01', author: 'namae01', title: 'title01', text: 'this is text'},
            { id: 'abc02', author: 'namae02', title: 'title02', text: 'this is another text'}
        ]
        expect(message([], {
            type: ActionTypes.INIT_GUESTBOOK,
            payload: initData
        })).toEqual({
            messages: initData
        })
    })

    it('it should add new message', () => {
        const initData = {
            messages: []
        }
        const newMessage1 = {
            id: 'abc01',
            name: 'namae1',
            title: 'title1',
            message: 'text1'
        }
        const newMessage2 = {
            id: 'abc02',
            name: 'namae2',
            title: 'title2',
            message: 'text2'
        }

        const newData1 = {
            id: 'abc01',
            author: 'namae1',
            title: 'title1',
            text: 'text1'
        }
        const newData2 = {
            id: 'abc02',
            author: 'namae2',
            title: 'title2',
            text: 'text2'
        }

        expect(message(initData, {
            type: ActionTypes.ADD_MESSAGE,
            payload: newMessage1
        })).toEqual({
            messages: [
                newData1
            ]
        })

        expect(message({
            messages:[
                newData1
            ]
        }, {
            type: ActionTypes.ADD_MESSAGE,
            payload: newMessage2
        })).toEqual({
            messages: [
                newData1,
                newData2
            ]
        })

    })

})