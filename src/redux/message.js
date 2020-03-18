import ActionTypes from './actiontypes';
import {initGuestBook, addMessage} from './actions';

const initialData = () => {
    return {
        messages: [],
    }
}

const message = (state = initialData(), action) => {
    switch (action.type) {
        case ActionTypes.INIT_GUESTBOOK:
            return initGuestBook(state, action);
        case ActionTypes.ADD_MESSAGE:
            return addMessage(state, action);
        default:
            return state;
    }
}

export default message;