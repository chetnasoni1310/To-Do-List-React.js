import React, { useRef, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../redux/taskAction";


function ToDoTask({data}) {
  const { id, title, description } = data;
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef();


  const deleteTaskHandler = () => {
    dispatch(deleteTask(id));
  };


  const editTaskHandler = () => {
    const newTitle = prompt("Enter the new title : ", title);
    if (newTitle === null) return;
    
    const newDescription = prompt(
      "Enter the new description : ",
      description || ""
    );

    dispatch(editTask( id , { title : newTitle , description : newDescription }))
    // because in edit , we do have payloads as a object containing fields : id and updates
  };


  const editTaskTitle = () => {
    setTempTitle(title); // prefilled with existing title
    setIsEditingTitle(true);

    // wait for input to mount , and only select when it do exists
    setTimeout(() => {
      inputRef.current?.select();
    },0);
  };


  const saveEditedTitle = () => {
    if (tempTitle.trim() === "") return;
    dispatch(editTask(id , { title : tempTitle , description ,}));
    setIsEditingTitle(false);
  };


  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      saveEditedTitle();
    }
  };

  
  return (
    <div className="w-[70%] px-4 py-3 bg-zinc-800 rounded-3xl text-white flex gap-4 items-center justify-between">
      <div className="title  flex justify-center items-center gap-4">
        <label>
          <input
            type="checkbox"
            name=""
            id=""
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="hidden"
          />
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center border
                ${
                  isChecked
                    ? "bg-green-600 border-green-600 "
                    : " border-gray-300"
                }
                `}
          >
            {isChecked ? (
              <div className="w-3 h-3 bg-white rounded-full" />
            ) : null}
          </div>
        </label>

        {
          // agar isEdiditngTitle true hai , toh mera h1 ek input mai convert ho jaayega
          // aur agar false hai toh firse h1 bnn jaayega
          isEditingTitle ? (
            <input
              ref = {inputRef}
              type="text"
              value={tempTitle}
              onChange={(e) => setTempTitle(e.target.value)}
              onBlur={saveEditedTitle}
              onKeyDown={handleEnterKeyPress}
              autoFocus // kaam toh nhi aa rha vaise but select krleta h poore text ko
              className="bg-transparent outline-none text-lg"
            />
          ) : (
            <h1 className="text-lg font-medium" onDoubleClick={editTaskTitle}>
              {title}
            </h1>
          )
        }
      </div>

      <div className="icons flex justify-center items-center gap-6">
        <MdDeleteSweep
          className="text-2xl cursor-pointer transition-transform  hover:scale-120 "
          onClick={deleteTaskHandler}
        />
        <MdModeEdit
          className="text-2xl cursor-pointer transition-transform hover:scale-120"
          onClick={editTaskHandler}
        />
      </div>
    </div>
  );
}

export default ToDoTask;
