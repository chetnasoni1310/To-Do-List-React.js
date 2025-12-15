// Purpose
// This file defines action creators.

import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./taskType"

// What is an action creator?
// A small function whose only job is to:
// Create a properly structured action object


// What should live here
// Functions like:

// addTask(task)
// deleteTask(id)
// editTask(id, updates)
// toggleTask(id)

// 🚫 No reducer logic
// 🚫 No state updates
// 🚫 No UI logic


export const addTask  = (task) => {
    return {
        type : ADD_TASK,
        payload : task
    };
}


export const deleteTask = (id) => {
    return {
        type : DELETE_TASK,
        payload : id
    };
}

export const editTask = (id , updates) => {
    return {
        type : EDIT_TASK,
        payload : {
            id , 
            updates,
        }
    };
}