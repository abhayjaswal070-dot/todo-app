import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

interface Todo {
  id: number;
  title: string;
  description: string;
}

function AddTask() {

  const [form, setForm] = useState<Todo>({
    id: Date.now(),
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const editTask = localStorage.getItem("editTask")

    if (editTask) {
      setForm(JSON.parse(editTask))
    }
  }, [])

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const tasks: Todo[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );

    const editTask = localStorage.getItem("editTask");

    if (editTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === form.id ? form : task
      );

      localStorage.setItem(
        "tasks",
        JSON.stringify(updatedTasks)
      );

      localStorage.removeItem("editTask");
    } else {
      localStorage.setItem(
        "tasks",
        JSON.stringify([...tasks, form])
      );
    }

    setForm({
      id: Date.now(),
      title: "",
      description: "",
    });
  };
  return (
    <>
      <Navbar />

      <div className="bg-gray-200 flex items-center h-screen justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-gray-400 p-10 rounded gap-5"
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            type="text"
            placeholder="Task Title"
            className="outline-none border p-2"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter Description"
            rows={3}
            className="resize-none outline-none border p-2"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white cursor-pointer active:scale-95 w-fit self-center px-2 py-3"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTask;