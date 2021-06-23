import React from 'react';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
//import reduxPromise from 'redux-promise';
import reducers from 'reducers';
// 88 - wire up our new middleware
import async from 'middlewares/async';

export default ({ children, initialState = {} }) => {    
    // 83 - remove reduxPromise, cause race conditions where flow races ahead
    // of waiting for response from API call in action creator
    // We use middleware to look at actions that are about to be sent to a reducer
    // and we get the opportunity to delay the action or we get the ability
    // to log it or modify it or stop the action entirely.
    // It's only through these middleware that we can make these asynchronous requests or many other different
    // types of operations work the way we expect inside of a redux application.
    // You can have multiple middleware, this would be called a middleware stack
    const store = createStore(
        reducers, 
        initialState, 
        applyMiddleware(async)
    );
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}