import { LogfileActions } from '../actions/logfile.action';

type LogState = {
    logs: object[];
};

const initialState: LogState = {
    logs: [],
};

// it is reasonable to spread (iterate or expand values of an object) the previous `state` for the unknow action within the application, therefore you will have a copy and merge
// with the current incoming action.
// `Action` in reducer is a plain object;
// `Reducers` specify how the application's state changes in response to actions ...
// The reducer is a pure function that takes the previous state and an action in order to execute the next state.

const LogFileReducer = (state: LogState = initialState, action: LogfileActions) => {
    switch(action.type) {
        case 'SAVE_LOGS':
            return {
                ...state,
                logs: action?.payload || [],
            }
        default:
            return state;
    }
};

export default LogFileReducer;