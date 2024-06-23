import React from "react";

function AddTaskForm({ newTask, handleSubmit, handleInputChange }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <label htmlFor="newItem">Add to the todo list</label>
      <input
        onChange={handleInputChange}
        name="inputTask"
        type="text"
        id="newItem"
        value={newTask}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddTaskForm;
