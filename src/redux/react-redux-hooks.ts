import { Dispatch } from "react";
import {
    useDispatch as originalUseDispatch
} from 'react-redux';

import { ISetLogfileAction} from "./actions/logfile.action";

export const useDispatch = () => originalUseDispatch<Dispatch<ISetLogfileAction>>();