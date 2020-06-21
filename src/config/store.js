import  countries from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const middlewareList = [];
if (process.env.NODE_ENV == 'development') {
    middlewareList.push(createLogger());
}

const str = createStore(countries, applyMiddleware(...middlewareList));

export const store = str;