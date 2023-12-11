const defaultState ={
    post: [],
    currentPage: 1
}
const ADD_MANY_POSTS ="ADD_MANY_POSTS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_SELECTED_POST = "SET_SELECTED_POST"
export const postReducer = (state=defaultState,action)=>{
    switch (action.type){
        case ADD_MANY_POSTS:
            return { ...state, post: [...state.post, ...action.payload] };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload, };
        case SET_SELECTED_POST:
            return {...state, selectedPost: action.payload,
            };

        default:
            return state
    }
}
export const addManyPost = (payload)=>({type: ADD_MANY_POSTS,payload})
//action for pagination
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
//action for transfer
export const setSelectedPost = (post) => ({type: SET_SELECTED_POST, payload: post,
});
