import React from 'react';
import { render } from '@testing-library/react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as ReactReduxHooks from '../../redux/react-redux-hooks';
import { withLoader } from '../HOC/withLoader';

import LogsListComponent from '../logsList/index';

import configureMockStore from 'redux-mock-store';
import LogsDataViewComponent from "./LogsDataViewComponent";

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const RenderLogs = withLoader(LogsDataViewComponent);


describe('LogsListComponent', () => {
    let useEffect: any;
    let store: any;

    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
    };

    const response = [
        {
            id: 1595610796967,
            datetime: '2020-07-24T17:13:16.909Z',
            severity: 'INFO',
            message: 'Some INFO message'
        },
        {
            id: 1595610806034,
            datetime: '2020-07-24T17:13:25.976Z',
            severity: 'WARNING',
            message: 'Some WARNING message'
        },
        {
            id: 1595610815087,
            datetime: '2020-07-24T17:13:35.054Z',
            severity: 'INFO',
            message: 'Some INFO message'
        },
        {
            id: 1595610824112,
            datetime: '2020-07-24T17:13:44.101Z',
            severity: 'INFO',
            message: 'Some INFO message'
        },
        {
            id: 1595610833176,
            datetime: '2020-07-24T17:13:53.153Z',
            severity: 'WARNING',
            message: 'Some WARNING message'
        },
        {
            id: 1595610842236,
            datetime: '2020-07-24T17:14:02.220Z',
            severity: 'WARNING',
            message: 'Some WARNING message'
        },
        {
            id: 1595610851313,
            datetime: '2020-07-24T17:14:11.266Z',
            severity: 'ERROR',
            message: 'Some ERROR message'
        },
        {
            id: 1595610860351,
            datetime: '2020-07-24T17:14:20.332Z',
            severity: 'ERROR',
            message: 'Some ERROR message'
        },
        {
            id: 1595610869450,
            datetime: '2020-07-24T17:14:29.397Z',
            severity: 'INFO',
            message: 'Some INFO message'
        },
        {
            id: 1595610878453,
            datetime: '2020-07-24T17:14:38.443Z',
            severity: 'WARNING',
            message: 'Some WARNING message'
        },
        {
            id: 1595610887526,
            datetime: '2020-07-24T17:14:47.500Z',
            severity: 'ERROR',
            message: 'Some ERROR message'
        }
    ];

    beforeEach(() => {
        /* mocking store */
        store = configureStore([thunk])({
            logs: [],
        });

        /* mocking useEffect */
        useEffect = jest.spyOn(React, "useEffect");
        mockUseEffect(); // 2 times
        mockUseEffect(); //

        /* mocking useDispatch on our mock store  */
        jest
            .spyOn(ReactReduxHooks, "useDispatch")
            .mockImplementation(() => store.dispatch);
        /* shallow rendering */

    });

    describe("on mount", () => {
        it('should match snapshot', () => {
            const { container } = render(<Provider store={store} ><LogsListComponent /></Provider>);
            expect(container).toMatchSnapshot();
        });
        it('should render', () => {
            const { container } = render(<RenderLogs loading={true} list={response} />);
            expect(container).toBeInTheDocument();
        });
        it('should render Chart component', () => {
            const { getByTestId } = render(<Provider store={store} ><LogsListComponent /></Provider>);

            expect(getByTestId('logStatistic')).toBeTruthy();
        })
    });
});
