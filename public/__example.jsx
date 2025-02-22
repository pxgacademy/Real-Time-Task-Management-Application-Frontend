import React, { useEffect } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const COLUMNS = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const fetchTasks = async () => {
  const res = await axios.get("http://localhost:5000/tasks");
  return res.data;
};

const updateTaskStatus = async ({ id, status }) => {
  await axios.put(`http://localhost:5000/tasks/${id}`, { status });
};

const TaskBoard = () => {
  const queryClient = useQueryClient();
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
  const mutation = useMutation({
    mutationFn: updateTaskStatus,
    onSuccess: () => queryClient.invalidateQueries("tasks"),
  });

  if (isLoading) return <p>Loading tasks...</p>;

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;
    const task = tasks.find((task) => task.id === taskId);
    if (task && task.status !== newStatus) {
      mutation.mutate({ id: taskId, status: newStatus });
    }
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 gap-4 p-4">
        {COLUMNS.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={tasks.filter((task) => task.status === column.id)}
          />
        ))}
      </div>
    </DndContext>
  );
};

const Column = ({ column, tasks }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">{column.title}</h2>
      <SortableContext items={tasks.map((task) => task.id)}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </SortableContext>
    </div>
  );
};

const Task = ({ task }) => {
  return (
    <div
      className="p-2 bg-white shadow rounded mb-2 cursor-pointer"
      id={task.id}
    >
      {task.title}
    </div>
  );
};

export default TaskBoard;
