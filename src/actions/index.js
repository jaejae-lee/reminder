import { ADD_REMINDER } from '../constants';

export const add_reminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text:text
    }
    console.log('action in add_reminder', action);
    return action
}