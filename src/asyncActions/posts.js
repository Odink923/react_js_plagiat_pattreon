import {addManyPost} from "../store/postReducer";


export const fetchPost=()=>{
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(addManyPost(json)))
    }
}