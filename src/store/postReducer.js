const defaultState ={
    post: [],
    currentPage: 1
}
const ADD_MANY_POSTS ="ADD_MANY_POSTS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const postReducer = (state=defaultState,action)=>{
    switch (action.type){
        case ADD_MANY_POSTS:
            return { ...state, post: [...state.post, ...action.payload] };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload, };
        default:
            return state
    }
}
export const addManyPost = (payload)=>({type: ADD_MANY_POSTS,payload})
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });