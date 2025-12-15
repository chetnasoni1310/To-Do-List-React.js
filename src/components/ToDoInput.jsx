// Conceptually, your flow was:
// User types → handleAddTask →
// parent function → setTasks


// Now Redux flow becomes:
// User types → handleAddTask →
// dispatch(addTask(task)) →
// store → reducer → state update



import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskAction";

function ToDoInput() {


  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [val, setVal] = useState({
    title: "",
    description: "",
    //use this one instead of above 2 separate one's
  });
 

  // const inputValidationRegex = /^[A-za-z0-9{3,} ,.!?-]&/

  
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    const changedTitle = e.target.value;
    setVal((prev) => ({ ...prev, title: changedTitle }));

    // vaise if i have used the separate one's above ,separate states for title and description , then it would be easier
    // setTitle(e.target.value);
    //but khair koi na , next time dekhte hai
  };


  const handleDescription = (e) => {
    const changedDescription = e.target.value;
    setVal((prev) => ({
      ...prev,
      description: changedDescription,
    }));
  };



  const handleAddTask = (e) => {
    e.preventDefault();

    //validate the title input
    if (val.title.trim() === "") {
      alert("Adding title of task is must!");
      return;
    }


    // creating task object with the info provided and sending it to home
    const newTask = {
      id: Date.now(),
      title: val.title,
      description: val.description,
      completed: false,
    };
    // addNewTask(newTask);  ->> this was before redux
    dispatch(addTask(newTask));  // --> this is after redux
 

    console.log(val.title);
    console.log(val.description);


    //Clearing the fields
    setVal((prev) => ({
      ...prev,
      title: "",
      description: "",
    }));


    console.log(val.title);
    console.log(val.description);
  };





  return (
    <div className="w-5/6 bg-zinc-600 mx-auto rounded-xl text-white border-2 border-gray-200 py-6">
      <form action="" onSubmit={handleAddTask} autoComplete="on">
        <div className="taskTitle px-4 pt-2">
          <input
            type="text"
            value={val.title}
            required
            onChange={handleTitle}
            placeholder="Add something like Buy some icecreams"
            className="
               w-full rounded-xl py-1 px-2 bg-transparent outline-none
               border  border-gray-500
               text-md
               placeholder:text-gray-300
              "
          />
        </div>
        <div className="taskDescription px-4 pt-2">
          <input
            type="text"
            value={val.description}
            onChange={handleDescription}
            placeholder="Description"
            className="
               w-full bg-transparent rounded-xl py-1 px-2 outline-none
               text-md
                 placeholder:text-gray-300
              "
          />
          <div className="addTask flex justify-end items-end mt-3">
            <button
              type="submit"
              className="rounded-xl bg-red-800 px-4 py-1 text-white font-medium cursor-pointer text-md
             hover:scale-102  "
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToDoInput;

// enhancements
// -> to make the description textarea instead of input text
// random title generation from different inputs
// add regex to the input 
// LocalStorage
// Toggle complete working  still not implemented
// Validation working
// Redux data flow.
// id kko hum date.now() se generate krwa rhe h abhi , but i want them to be 1,2,3...
// Move checkbox (completed) into Redux
// 2️⃣ Add localStorage persistence via Redux
// 3️⃣ Replace Date.now() with incremental IDs
// tab navigation --> when i press enter it shifts from title -> to -> description and then to addTask


