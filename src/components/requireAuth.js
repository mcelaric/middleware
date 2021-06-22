// 79 - Our HOC 
// A file starting with lowercase means by default
// we will be exporting by default a function, not a Class

// IMPORTANT NOTE:
// What these higher order components really do is kind of wrap or inject themselves right above
// the component that we're using them on.
// Also, be very sure you're passing the props down to the ChildComponent!

// 81 - Once you're done, the requireAuth() functionality will work
// BUT...
// Once you enter a comment and 'Submit Comment,' YOU WILL NOT SEE THAT COMMENT DISPLAYED
// Why?  Because we're not showing CommentList!
// But, if you nav back to 'Home' your comments will appear there


import React, { Component} from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.shouldNavigateAway();
        }

        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth){
                this.props.history.push('/');
            }
        }

        // In our example, all this render does is render CommentBox
        render() {
            {/* What {...this.props} does:
                This takes any props that were passed to our HOC ComposedComponent,
                it takes any props that it receives and it just passes them straight down 
                to the child's component of CommentBox.
            */}
            return <ChildComponent {...this.props} />
        }
    }

    function mapStateToProps(state){
        return { auth: state.auth}
    }

    return connect(
        mapStateToProps
    )(ComposedComponent);

};

/*
// USAGE - Imagine we're in CommentBox.js

// import the function
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {

}

// To make use of HOC, call the CommentBox with it
// CommentBox shows up in this function as ChildComponent
export default requireAuth(CommentBox);

// Now imagine we're in App.js
// This variable is going to be the result of requireAuth with CommentBox.
// So when we import CommentBox into our App.js file, we're not just getting our CommentBox class,
// we're getting the ComposedComponent class that renders, eventually, the CommentBox component.
import CommentBox from 'components/CommentBox';

*/

/*
This is the scaffold for HOCs

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        render() {
            return <ChildComponent />
        }
    }

    return ComposedComponent;
};
*/