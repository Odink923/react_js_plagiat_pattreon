import {addManyPost} from "../store/postReducer";


export const fetchPost = (page = 1, limit = 10) => {
    return function (dispatch) {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
            .then(response => response.json())
            .then(json => dispatch(addManyPost(json)))
    }
}