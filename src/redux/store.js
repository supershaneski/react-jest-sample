import { createStore, combineReducers } from 'redux';
import message from './message';

const rootReducer = combineReducers({
    message,
});

export default createStore(rootReducer);