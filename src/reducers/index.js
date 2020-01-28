import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { read_cookie, bake_cookie } from 'sfcookies';

const reminder = (action) => {
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const remove_by_id = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id )
    console.log("new reduced reminders", reminders)
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    // this will set state as previous reminder not as an empty array
    state = read_cookie('reminder')
    switch(action.type){
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            // 1st arg = flag 2nd arg = actual array we want to store
            bake_cookie('reminder', reminders)
            return reminders;
        case DELETE_REMINDER:
            reminders = remove_by_id(state, action.id);
            // so update reminder array with deleted one
            bake_cookie('reminder', reminders)
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            bake_cookie('reminder', reminders)
            return reminders;
        default: return state;

    }
}

export default reminders;