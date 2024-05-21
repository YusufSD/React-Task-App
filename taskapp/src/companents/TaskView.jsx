import { useState } from "react";
import TaskCreate from "./taskcreate";

function TaskView({ task, onDelete, update }) {
  const [showUpdate, setShowUpdate] = useState(false);
  const deleteTask = () => {
    onDelete(task.id);
  };

  const updateTask = () => {
    setShowUpdate(!showUpdate);
  };

  const updateButton = (id, updatedTitle, updatedDetails) => {
    setShowUpdate(false);
    update(id, updatedTitle, updatedDetails);
  };

  return (
    <div className="taskView">
      {showUpdate ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={updateButton} />
      ) : (
        <div>
          <h3 className="taskTitle">Göreviniz</h3>
          <p>{task.titleHolderKey}</p>
          <h3 className="taskTitle">Yapılacaklar</h3>
          <p>{task.taskDetailsHolderKey}</p>
          <div>
            <button className="taskDelete" onClick={deleteTask}>
              Sil
            </button>
            <button className="taskUpdate" onClick={updateTask}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskView;
