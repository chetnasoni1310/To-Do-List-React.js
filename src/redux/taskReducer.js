// Purpose
// This is where Phase 4 logic lives.

import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./taskType"

// What goes here
// Initial state
// A reducer function
// switch(action.type)
// Immutable updates to tasks

// This file answers:
// “Given the current state and an action, what is the next state?”

// 🚫 No dispatch
// 🚫 No React code
// 🚫 No side effects

// Think of reducer as:
// “Decision-maker”


const initialState = {
    tasks : []
};

const taskReducer = (state = initialState , action) => {
    switch(action.type){
        case ADD_TASK :
            return {
                ...state ,
                tasks : [...state.tasks , action.payload]
            };

        case DELETE_TASK :
            return {
                ...state,
               tasks : state.tasks.filter( (task) => task.id !== action.payload )
            };
        
        case EDIT_TASK :
            return {
                ...state,
                tasks : state.tasks.map((task) => 
                 task.id === action.payload.id ?
                 {...task , ...action.payload.updates }
                  : task
            )
            };
        
        default : 
           return state;    
    }
};

export default taskReducer;