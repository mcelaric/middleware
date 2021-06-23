import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

export default function(state = [], action) {
    switch (action.type) {
        case SAVE_COMMENT:
            // 93 - add empty object {} to state after payload to test validation
            return [...state, action.payload, {}];
        
        case FETCH_COMMENTS:
            // 83 - Look inside action object via debugger
            //debugger;
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];

         default:
            return state;
    }
}

