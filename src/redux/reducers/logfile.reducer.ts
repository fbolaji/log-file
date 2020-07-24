import { LogfileActions } from '../actions/logfile.action';

type LogState = {
    logs: object[];
};

const initialState: LogState = {
    logs: [],
};

const LogFileReducer = (state: LogState = initialState, action: LogfileActions) => {
    switch(action.type) {
        case 'SAVE_LOGS':
            return {
                ...state,
                logs: action.payload,
            }
        default:
            return state;
    }
};

export default LogFileReducer;