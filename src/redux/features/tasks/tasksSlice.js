// ab jaha bhi -->
            //   import { addTask } from "../redux/taskAction";
// ese import kia tha , vha vha taskAction ki jgh taskSlice se import krna hai , baaki ki changes nhi honge             

import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name:"tasks",
    initialState :[],

    reducers : {
        addTask : (state , action) => {
            state.push(action.payload);
        },

        deleteTask : (state , action) => {
           return state.filter((task) => task.id !== action.payload )
        },

        editTask : (state , action) => {
           const {id , updates} = action.payload;
           const task = state.find((taskkk => taskkk.id === id ));
           if(task){
            Object.assign(task , updates);
           }
           //task is a draft object
           // Object.assign() mutates only the draft
           // Immer creates a new task object internally
        },
    }
});

export const {
    addTask , deleteTask ,editTask } = tasksSlice.actions;

export default tasksSlice.reducer ;    

