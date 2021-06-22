// 73 - Our 'higher' auth component reducer
// Store a boolean value 
//  true -  user is logged in 
//  false - user is not logged in

import { CHANGE_AUTH } from 'actions/types';

export default function(state = false, action) {
    switch(action.type) {
        case CHANGE_AUTH:
            return action.payload;
        default:
            return state;
    }
}