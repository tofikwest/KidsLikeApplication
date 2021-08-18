import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTaskOperation } from "../../redux/tasks/tasksOperations";

const initialState = {
  title: "",
  reward: 0,
  fileImg: "",
};

const PlanningPage = () => {
  const [task, setTask] = useState({ ...initialState });
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createTaskOperation({ ...task }));
    setTask({ ...initialState });
  };

  return (
    <>
      <form className="taskForm" onSubmit={onHandleSubmit}>
        <label className="labelForm">
          Title:
          <input
            className="inputForm"
            type="text"
            name="title"
            value={task.title}
            required
            onChange={onHandleChange}
          />
        </label>
        <label className="labelForm">
          Reward:
          <input
            className="inputForm"
            type="number"
            name="reward"
            value={task.reward}
            required
            onChange={onHandleChange}
          />
        </label>
        <label className="labelForm">
          Reward:
          <input
            className="inputForm"
            type="text"
            name="fileImg"
            value={task.fileImg}
            onChange={onHandleChange}
          />
        </label>
        <button type="submit" className="buttonForm">
          Add contact
        </button>
      </form>
    </>
  );
};

export default PlanningPage;
