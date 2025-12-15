// 🧩 Step 1 — Decide a storage key
// Hardcode a single key (important)!
// Why?import store from './store';

// avoids typos
// easy to change later
// consistent access

const STORAGE_KEY = 'todo_tasks';



// 🧩 Step 2 — Load from localStorage
// Create a function that:
// reads data
// parses JSON
// handles errors
// returns a safe fallback

// Why this design?
// try/catch → prevents app crash
// return [] → safe Redux initial state
// reducer stays pure

export const loadTasks = () => {
   try{
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if(!storedTasks){
        return [];
    }

    return JSON.parse(storedTasks);
   }catch(error)
   {
    console.error("Failed to load tasks from localStorage ",error);
    return [];
   }
};



// 🧩 Step 3 — Save to localStorage
// Create a function that:
// accepts tasks array
// stringifies it
// stores it

// Why no return?
// Because saving is a side effect, not a computation.

export const saveTasks =(tasks) => {
    try{
        localStorage.setItem(STORAGE_KEY , JSON.stringify(tasks));
    }catch(error)
    {
        console.error("Failed to save tasks to localStorage",error);
    }
};



// IN STORE
// 1. pehle import krne ko bol rha hai
// 🧩 STEP 2 — Create initial state from localStorage
// Redux allows passing preloaded state to the store.

// Concept:
// localStorage → initialState → Redux

// Add this before createStore:
// const preloadedState = {
//   tasks: loadTasks(),
// };


// Why this works:
// loadTasks() returns an array
// Matches reducer shape { tasks: [] }
// Redux thinks this is its “initial memory”



// 🧩 STEP 3 — Pass preloadedState to createStore
// ❌ Before
// const store = createStore(taskReducer);

// ✅ After
// const store = createStore(taskReducer, preloadedState);

// Now:
// On refresh, Redux starts with stored tasks
// UI immediately shows old tasks


// 🧩 STEP 4 — Subscribe to store changes
// Redux exposes:
// store.subscribe(() => { ... })
// This runs every time state changes.

// Add after store creation:

// store.subscribe(() => {
//   const state = store.getState();
//   saveTasks(state.tasks);
// });


// This means:
// Any add/edit/delete
// Automatically saved to localStorage