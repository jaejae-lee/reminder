import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

export const add_reminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text:text
    }
    console.log('action in add_reminder', action);
    return action
}

export const delete_reminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id:id
    }
    console.log('delete_reminder in action', action);
    return action
}