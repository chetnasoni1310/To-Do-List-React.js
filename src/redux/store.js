// Purpose
// This file creates the Redux store.

// What it does conceptually
// Takes the reducer
// Creates a single global store
// Exports the store

// This is the entry point of Redux.

// 🚫 No UI logic
// 🚫 No reducers logic
// 🚫 No actions

// Think of it as:
// “Wiring room”

import {createStore} from 'redux';
import taskReducer from './taskReducer';
import { loadTasks , saveTasks } from './storage';

// const store = createStore(taskReducer);
// export default store ;
//pehle yeh kr rhe the , but die to local storage , we will do this -->>>

const preloadedState = {
    tasks : loadTasks(),
}

const store = createStore(taskReducer , preloadedState);

//save tasks on every state change 
store.subscribe( () => {
    const state = store.getState();
    saveTasks(state.tasks);
});

export default store;
