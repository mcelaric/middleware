import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import authReducer from 'reducers/auth';

// 74 - wire up auth reducer
export default combineReducers ({
    comments: commentsReducer,
    auth: authReducer
});