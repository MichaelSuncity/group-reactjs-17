import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

import {createRootReducer} from 'reducers';

import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';

import {loggerMiddleware} from './middlewares/loggerMiddleware';
import {botMiddleware} from './middlewares/botMiddleware';

export const history = createBrowserHistory();

export const store = createStore(createRootReducer(history), composeWithDevTools(
    applyMiddleware(logger, botMiddleware, routerMiddleware(history)),
    ));