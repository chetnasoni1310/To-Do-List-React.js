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


const store = createStore(taskReducer);

export default store ;