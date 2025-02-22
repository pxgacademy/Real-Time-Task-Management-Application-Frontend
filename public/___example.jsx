import React, { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, arrayMove, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const COLUMNS = [
  { id: "TODO", title: "To Do" },
  { id: "IN_PROGRESS", title: "In Progress" },
  { id: "DONE", title: "Done" },
];

const INITIAL_TASKS = [
  { id: 1, title: "Task 1", status: "TODO" },
  { id: 2, title: "Task 2", status: "IN_PROGRESS" },
  { id: 3, title: "Task 3", status: "TODO" },
  { id: 4, title: "Task 4", status: "DONE" },
  { id: 5, title: "Task 5", status: "IN_PROGRESS" },
  { id: 6, title: "Task 6", status: "TODO" },
  { id: 7, title: "Task 7", status: "DONE" },
];

const Task = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-white p-3 rounded shadow-md cursor-grab"
    >
      {task.title}
    </div>
  );
};

const Column = ({ id, title, tasks }) => {
  return (
    <div className="w-1/3 p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <SortableContext items={tasks.map((task) => task.id)}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </SortableContext>
    </div>
  );
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeTask = tasks.find((task) => task.id === active.id);
    if (!activeTask) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === active.id ? { ...task, status: over.id } : task
      )
    );
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
      <div className="flex gap-4 p-10">
        {COLUMNS.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            tasks={tasks.filter((task) => task.status === column.id)}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default TaskBoard;
