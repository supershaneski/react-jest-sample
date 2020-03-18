
export function initGuestBook(state, action) {
    return {
        ...state,
        messages: action.payload
    }
}

export function addMessage(state, action) {
    var data = state.messages.splice(0);
    data.push({
        id: action.payload.id,
        author: action.payload.name,
        title: action.payload.title,
        text: action.payload.message,
    });
    return {
        ...state,
        messages: data,
    }
}