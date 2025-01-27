import { createStore } from "redux"


const initialState={
    count:1,
    user:{
        name:"john doe",
        age:25
    },
    todos:[],
    theme:"light",
}

const counterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return{
                ...state,count:state.count +1
            }
        case "DECREMENT":
            return{
                ...state,count:state.count -1
            } 
        case "INCREMENTBY":
            return {
                ...state,count:state.count + action.payload
            }      
        case "DECREMENTBY":
            return {
                ...state,count:state.count - action.payload
            }
        case "RESET":
            return {
                ...state ,count:0
            } 
        case "MULTIPLYBY10"  :
            return {
                ...state ,count:state.count *  action.payload
            } 
        case "UPDATENAME":
            return {
                ...state,user:{
                    ...state.user,name:action.payload
                }
            } 
        case "UPDATEDAGE":
            return {
                ...state ,user:{
                    ...state.user,age:action.payload
                }
            }  
        case "ADDTODO":
            return {
                ...state,todos:[...state.todos,action.payload]
            } 
        case "REMOVETODO":
            return {
                ...state,todos:state.todos.filter((todo,index)=>index !==action.payload)
            }  
        case "CLEARTODO":
            return {
                ...state,todos:[]
            } 
            
        case "DOUBLE":
            return {
                ...state,count:state.count * 2
            } 
        case "SQUARE":
            return {
                ...state,count:state.count * state.count
            }  
        case "RANDOMIZE":
            return {
                ...state,count:Math.floor(Math.random() * 1000)
            } 
        case "TOGGLE_THEME":
            return {
                ...state,theme:action.payload 
            } 
        case "SET_COUNT":
            return {
                ...state,count:action.payload
            }               
        default:
            return state
    }
}

const store=createStore(counterReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store.getState());
export default store