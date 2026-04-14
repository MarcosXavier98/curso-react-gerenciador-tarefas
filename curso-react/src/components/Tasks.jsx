import { ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks(props) {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 shadow-md rounded-md">
        {props.tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => props.onTaskClick(task.id)}
              className={`bg-slate-400 text-left w-full text-white p-2 rounded-md 
                ${task.isCompleted && "line-through"}`}
            >
              {task.title}
            </button>
            <button className="bg-slate-400 text-white p-2 rounded-md">
              <ChevronRightIcon />
            </button>
            <button className="bg-slate-400 text-white p-2 rounded-md">
                <Trash2Icon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
