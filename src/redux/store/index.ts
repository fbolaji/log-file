import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = compose;

const store = createStore(
    rootReducer,
    composeWithDevTools(composeEnhancers(applyMiddleware(thunk)))
);

export default store;