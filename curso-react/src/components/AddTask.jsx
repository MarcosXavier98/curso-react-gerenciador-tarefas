import { useState } from "react";

function AddTask({ onAddTaskClick }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);

  return (
    <div className="space-y-4 p-6 bg-slate-200 shadow-md rounded-md flex flex-col">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-slate-300 outline-state-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-state-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          //VALIDA SE OS CAMPOS ESTÃO PREENCHIDOS
          // trim() remove os espaços em branco do início e do fim da string
          if (!title.trim() || !description){ 
              return alert("Preencha todos os campos");
          }
          onAddTaskClick(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white p-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
