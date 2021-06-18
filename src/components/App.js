import React, { Component }  from 'react';
// 72 - Add Routes to CommentBox and CommentList
import {  Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
// 75 - wire up Redux so we can read state.auth to see if user is signed in or not
import { connect } from 'react-redux'

// 74 - Make class based component so we can add helper methods
class App extends Component {

    // 75 - Render button based on user's auth
    renderButton() {
        if (this.props.auth) {
            return (
                <button>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button>
                    Sign In
                </button>
            );          
        }

    }
    
    
    renderHeader() {
        return(
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post A Comment</Link></li>
                {/* 74
                    Remember, adding () will cause this function to execute
                    when the component renders, it will not wait! 
                */}
                <li>{this.renderButton()}</li>
            </ul>
        );
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path= "/" exact component={CommentList} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(App);