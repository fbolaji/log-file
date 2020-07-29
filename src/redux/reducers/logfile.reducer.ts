import { LogfileActions } from '../actions/logfile.action';

type LogState = {
    logs: object[];
};

const initialState: LogState = {
    logs: [],
};

// it is reasonable to spread the previous state for the unknow action within the application, therefore you will have a copy and merge
// with the current incoming action.
// action in reducer is a plain object;
// reducer is here to
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