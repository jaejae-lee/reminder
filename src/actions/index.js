import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const add_reminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text:text,
        dueDate:dueDate
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

export const clear_reminders = () => {
    const action = {
        type: CLEAR_REMINDERS,
    }
    console.log('clear_reminders in action', action);
    return action
}