
import {ADD_TODO} from "../Actions/const";

const initialState = [{id:1,title:'Learn  Redux'}];


let todoReducer = (state = initialState,action)  =>{
    switch (action.type){
        case ADD_TODO:
            return [...state,{id: action.payload.id,title:action.payload.title}]
        default: return state;
    }
};

export default todoReducer;

