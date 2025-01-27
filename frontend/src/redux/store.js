// import { createStore } from 'redux'

import { createStore } from "redux";

// const initialState = {
//     count:0
// };

// function counterReducer(state=initialState,action){
//     switch(action.type){
//         case 'INCREMENT':
//             return {
//                 ...state,
//                 count: state.count+1
//             };
//         case 'DECREMENT':
//             return{
//                 ...state,
//                 count:state.count-1
//             };
//         case 'INCREMENTBY':
//             return{
//                 ...state,
//                 count:state.count + action.payload
//             };  
//         default:
//             return state;
//     }
// }

// const store=createStore(counterReducer);
// export default store;







//====================================using connect===================


const intialState={
    count:0,
}

function countReducer(state=intialState,action){
    switch(action.type){
        case 'INCREMENT':
            return {...state,count:state.count+1}
        case 'DECREMENT':
            return {...state,count:state.count -1} 
        case 'INCREMENTBY':
            return {...state, count:state.count +action.payload}      
        default:
            return state;     
    }
}

const store=createStore(countReducer)
export default store