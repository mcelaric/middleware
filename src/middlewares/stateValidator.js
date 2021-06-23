// 92 - boilerplate
import tv4 from "tv4";
import stateSchema from "./stateSchema";

// dispatch has getState prop to give access to redux store data
export default ({ dispatch, getState }) => (next) => (action)  => {
    // Immediately pass action on to reducers
    next(action);

    // Validation logic is only going to occur after the action has gone through 
    // all the rest of everything else inside of our redux store.

    if (!tv4.validate(getState(), stateSchema)){
        console.warn('Invalid state schema detected');
    };

}
