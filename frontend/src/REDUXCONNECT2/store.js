
import {createStore} from 'redux'
const intialState={
    count:0
}

const countReducer=(state=intialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,count:state.count + 1
            }
        case  'DECREMENT':
            return {
                ...state,count:state.count -1
            } 
        default: 
            return state
    }
}

const store=createStore(countReducer)
export default store