import { useNavigate } from "react-router-dom";
import { ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/task?${query.toString()}`)
    //
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 shadow-md rounded-md">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-left w-full text-white p-2 rounded-md 
                ${task.isCompleted && "line-through"}`}
            >
              {task.title}
            </button>
            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <ChevronRightIcon />
            </button>
            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <Trash2Icon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
