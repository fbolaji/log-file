import { combineReducers } from 'redux';
import LogFileReducer from './logfile.reducer';

const rootReducer = combineReducers({
    logs: LogFileReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;