import React, { useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";

function Home() {
  const [task, setTask] = useState([]);

  // To see the task array
  useEffect(() => {
    console.log(task);
  }, [task]);

  const addTaskHandler = (newTask) => {
    setTask((prev) => [...prev, newTask]);
  };

  const editTaskHandler = (taskID, newTitle, newDescription) => {
    setTask((prev) =>
      prev.map((task) =>
        task.id === taskID
          ? { ...task, title: newTitle, description: newDescription }
          : task
      )
    );

    console.log(taskID, newTitle, newDescription);
  };

  const deleteTaskHandler = (taskID) => {
    setTask((prev) => prev.filter((task) => task.id !== taskID));
    console.log(taskID);
  };

  return (
    <div className="pt-10">
      <ToDoInput addNewTask={addTaskHandler} />
      <ToDoList
        taskData={task}
        editTask={editTaskHandler}
        deleteTask={deleteTaskHandler}
      />
    </div>
  );
}

export default Home;
