import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
// 81 - inject requireAuth into the heirarchy between connect and CommentBox
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
    state = { comment: ''};

    // 77 - Check to see if the user is logged in: 
    // Any time this component first mounts or first gets rendered to the screen
    // OR any time this component gets a new set of props.

    /*
    // 80 - Moved into requireAuth()

    // 77 - first mount
    componentDidMount() {
        this.shouldNavigateAway();
    }

    // 77 - component gets a new set of props
    componentDidUpdate() {
        this.shouldNavigateAway();
    }

    // 77 - Helper method to handle authentication
    shouldNavigateAway() {
        // 77 - User is not signed in
        if (!this.props.auth){
            // 78 - Any time one of our components is rendered directly by the React Router library, 
            // we automatically getaccess to the this.props.history object.
            // Programmatically navigate around  application by using push()
            // 'Push' them to the home route
            // If a user is signed in and sees CommentBox, then signs out,
            // user is 'pushed' to home route, forcibly navigated away, CommentBox no longer visible
            this.props.history.push('/');
        }
    }
    */

    handleChange = event => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' });
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <h4>Add A Comment</h4>
                <textarea 
                    onChange={this.handleChange}
                    value={this.state.comment} 
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        );
    }
}

// 80 - moved to requireAuth()
// 77 - To check to see if the user is signed in, 
// we need to get access to our auth piece of Redux  state. 
// function mapStateToProps(state){
//     return { auth: state.auth}
// }

// 80 - refactor to remove mapStateToProps as it now resides in requireAuth()
// 81 - connect() is currently taking our action creators and it's passing them as props down to the
// CommentBox components.
// This a really critical thing!!!
//      The action creators get passed as props down to CommentBox.
// But CommentBox will also get other props i.e. this.props.history because of Route
// Change the second () to call requireAuth with CommentBox
// This now injects requireAuth() into the hierarchy and gives access to action creators and history props
export default connect(
    null,
    actions
)(requireAuth(CommentBox));