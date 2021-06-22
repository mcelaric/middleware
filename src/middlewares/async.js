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

// Refactor of boilerplate code commented out above
// Any time we have an arrow function, if the arrow function contains a single expression
// like just one line of JavaScript code, then we can optionally remove our semi-trailer curly braces.
// We then can omit the return key word in front of 'function(next)'
// This is still a function that returns a function, that returns a function
export default ({ dispatch }) => next => action => {

}


