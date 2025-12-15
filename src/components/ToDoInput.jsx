import React, { useState } from "react";

function ToDoInput({addNewTask}) {


  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [val, setVal] = useState({
    title: "",
    description: "",
    //use this one instead of above 2 separate one's
  });

  // const inputValidationRegex = /^[A-za-z0-9{3,} ,.!?-]&/

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
    }


    // creating task object with the info provided and sending it to home
    const newTask = {
      id: Date.now(),
      title: val.title,
      description: val.description,
      completed: false,
    };
    addNewTask(newTask);


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