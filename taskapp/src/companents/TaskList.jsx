import TaskView from "./TaskView";

function TaskList({ tasksProps, onDelete, update }) {
  return (
    <div className="taskList">
      {tasksProps.map((task, index) => {
        return (
          <TaskView
            key={index}
            task={task}
            onDelete={onDelete}
            update={update}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
