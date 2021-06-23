// 85 - Our very first middleware
// Dude, check the video notes on this!!!
/*
export default function({ dispatch }) {
    // The 'next' arg is a reference to the next middleware on our chain
    // Inside of our application, we could potentially have many different middleware.
    return function(next) {
        // The very real action returned from action creator
        return function(action) {

        }
    }
}
*/

import { act } from "react-dom/cjs/react-dom-test-utils.production.min"

// Refactor of boilerplate code commented out above
// Any time we have an arrow function, if the arrow function contains a single expression
// like just one line of JavaScript code, then we can optionally remove our curly braces.
// We then can omit the return key word in front of 'function(next)'
// This is still a function that returns a function, that returns a function
export default ({ dispatch }) => next => action => {
    // 86 - This is where middleware logic gets executed
    // Check to see if the action has a promise on its payload prop
    // If yes - wait for it to resolve
    // If no - send the action on to the next middleware

    // 88 - add debugger to see under the hood
    //debugger;

    // Check to see if it has a promise
    // We can't check directly for a promise so...
    // First check to make sure that it has a payload in the first place 
    // or if there is not a 'then' function on the payload
    // If 'then' is there, we are *assuming* it has a promise
    if (!action.payload || !action.payload.then) {
        // Forward action onto next middleware
        return next(action);
    }

    // 87 - Waiting for promise to resolve and get its data
    // then create new action and dispatch it

    // Hook into promise - this is usual interaction with promise
    // function() will be called whenever promise resolves
    action.payload.then(function(response) {
        // Create new action and dispatch it
        const newAction = { ...action, payload: response }
        // This sends new action back through all the middlewares
        dispatch(newAction);
    });

};


