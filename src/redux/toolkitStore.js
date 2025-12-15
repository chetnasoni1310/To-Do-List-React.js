import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskReducer";
import { loadTasks, saveTasks } from "./storage";


const toolkitStore = configureStore({
    reducer : {
       tasks : taskReducer,
    },

    preloadedState : {
        tasks : loadTasks(),
    },
});


toolkitStore.subscribe(() => {
    saveTasks(toolkitStore.getState().tasks);
});

export default toolkitStore;

