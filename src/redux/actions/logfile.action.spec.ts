import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './logfile.action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('logfile.actions', () => {
    const logs: object = [
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

    it('SAVE_LOGS when saveLogs action is dispatched', () => {
        const expectedActions = { type: 'SAVE_LOGS', payload: logs };

        const store = mockStore({ logs: logs })
        return store.dispatch(actions.saveLogs(logs));
        expect(store.getActions()).toEqual(expectedActions);
    });
})