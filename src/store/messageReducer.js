const defaultState ={
    message: []
}
const ADD_MESSAGE = "ADD_MESSAGE"
const REMOVE_MESSAGE = "REMOVE_MESSAGE"
const ADD_MANY_MESSAGE ="ADD_MANY_MESSAGE"
export const messageReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case ADD_MESSAGE:
            return{...state,message:[...state.message,action.payload]}
        case ADD_MANY_MESSAGE:
            return{...state,message:[...state.message,...action.payload]}
        case REMOVE_MESSAGE:
            return {...state, message: state.message.filter(message=>message.id!==action.payload)}
        default:
            return state
    }
}

export const addMessage = (message)=>({type: ADD_MESSAGE,payload:message})
export const addManyMessage = (payload)=>({type: ADD_MANY_MESSAGE,payload})
export const removeMessageAction = (payload)=>({type: REMOVE_MESSAGE,payload})