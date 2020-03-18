import ActionTypes from './actiontypes';
import { initGuestBook, addNewMessage } from './reducers';

describe("reducers", () => {

  it("should initialize the state", () => {
    const data = [
      { id: 'abc001', author: 'namae01', title: 'title01', text: 'this is text' },
      { id: 'abc002', author: 'namae02', title: 'title02', text: 'this is another text' },
    ]

    const expectedAction = {
      type: ActionTypes.INIT_GUESTBOOK,
      payload: data
    }

    expect(initGuestBook(data)).toEqual(expectedAction)

  })

  it("should add new message", () => {
    const data = { id: 'abc001', author: 'namae01', title: 'title01', text: 'this is text' }

    const expectedAction = {
      type: ActionTypes.ADD_MESSAGE,
      payload: data
    }

    expect(addNewMessage(data)).toEqual(expectedAction)

  })

})
  