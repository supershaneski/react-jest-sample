import ActionTypes from './actiontypes';

export function initGuestBook(data) {
    return {
      type: ActionTypes.INIT_GUESTBOOK,
      payload: data
    }
}
  
export function addNewMessage(data) {
    return {
      type: ActionTypes.ADD_MESSAGE,
      payload: data
    }
}
  