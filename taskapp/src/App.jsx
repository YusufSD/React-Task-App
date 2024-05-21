import "./App.css";
import { useEffect, useState } from "react";
import TaskCreate from "./companents/taskcreate";
import TaskList from "./companents/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  //Props
  const createTask = async (titleHolderKey, taskDetailsHolderKey) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      titleHolderKey,
      taskDetailsHolderKey,
    });
    console.log(response);

    const tasksArray = [...tasks, response.data];
    setTasks(tasksArray);
  };

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTask();
  }, []);

  //DeleteTask
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeleteTasks = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(afterDeleteTasks);
  };

  //UpdateTask
  const updateTaskById = async (id, updatedTitle, updatedDetails) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      titleHolderKey: updatedTitle,
      taskDetailsHolderKey: updatedDetails,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: id,
          titleHolderKey: updatedTitle,
          taskDetailsHolderKey: updatedDetails,
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreateProps={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasksProps={tasks}
        onDelete={deleteTaskById}
        update={updateTaskById}
      />
    </div>
  );
}

export default App;
