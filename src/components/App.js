import React  from 'react';
// 72 - Add Routes to CommentBox and CommentList
import {  Route } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => {
    return (
        <div>
            <Route path="/post" component={CommentBox} />
            <Route path= "/" component={CommentList} />
        </div>
    );
}
