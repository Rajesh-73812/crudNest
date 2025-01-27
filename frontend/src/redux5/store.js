import {createStore} from 'redux'

const initialState={
    count:0
}

const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,count:state.count +1
            }
    
        default:
            return state;
    }
}

const store=createStore(rootReducer)
export default store