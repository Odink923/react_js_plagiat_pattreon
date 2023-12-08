import {messageReducer} from "./messageReducer";
import {combineReducers} from "redux";
import {postReducer} from "./postReducer";

const rootReducer = combineReducers({
    message: messageReducer,
    post: postReducer
});
export default rootReducer;