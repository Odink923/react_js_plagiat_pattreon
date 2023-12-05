import {addManyMessage} from "../store/messageReducer";

export const fetchMessages=()=>{
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => dispatch(addManyMessage(json)))
    }
}