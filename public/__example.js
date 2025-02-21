//
//
//

const demo = {
  email: ["john-doe@example.com","david-johnson@example.com"],
  project: [
    {
      id: 1,
      projectName: "Web Development",
      status: "pending",
      toDo: [
        {
          id: 1,
          title: "Task 1",
          startedDate: "10-1-2015",
          dueDate: "15-1-2015",
          priority: "Medium",
          status: "To Do",
        },
        {
          id: 2,
          title: "Task 2",
          startedDate: "10-1-2015",
          dueDate: "15-1-2015",
          priority: "High",
          status: "Doing",
        },
        {
          id: 3,
          title: "Task 3",
          startedDate: "10-1-2015",
          dueDate: "15-1-2015",
          priority: "Low",
          status: "Done",
        },
      ],
    },
    {
      id: 2,
      projectName: "Web Design",
      status: "pending",
      toDo: [
        {
          id: 1,
          title: "Task 1",
          startedDate: "10-1-2015",
          dueDate: "15-1-2015",
          priority: "Medium",
          status: "To Do",
        },
        {
          id: 2,
          title: "Task 2",
          startedDate: "12-1-2015",
          dueDate: "18-1-2015",
          priority: "Low",
          status: "To Do",
        },

      ],
    },
  ],
};

export default demo;
