const defaultState ={
    post: []
}
const ADD_MANY_POSTS ="ADD_MANY_POSTS"
export const postReducer = (state=defaultState,action)=>{
    switch (action.type){
        case ADD_MANY_POSTS:
            return { ...state, post: [...state.post, ...action.payload] };
        default:
            return state
    }
}
export const addManyPost = (payload)=>({type: ADD_MANY_POSTS,payload})