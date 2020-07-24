import { SAVE_LOGS } from "../types";
import { Dispatch } from 'redux';

export const apiEndpoint = `http://127.0.0.1:3001`;

export const saveLogs: Function = (data: object[]) => {
    return (dispatch: Dispatch) => {
        dispatch({
            type: SAVE_LOGS,
            payload: data
        });
    };
};

export interface ISetLogfileAction {
    readonly type: 'SAVE_LOGS';
    payload: object[];
};

export type LogfileActions =
    | ISetLogfileAction;